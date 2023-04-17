import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { ProductsContext } from '../../contexts/ProductsContext';
import { FactContext } from '../../contexts/FactContext';
import './Profile.css'


export const Profile = () => {
const {user} = useContext(AuthContext);
const {seasonProducts} = useContext(ProductsContext)
const {facts} = useContext(FactContext)

const userFtuits = seasonProducts.filter(x => x._ownerId === user._id);
const userFacts = facts.filter(x => x._ownerId === user._id)

const animal = userFacts.length <= 3 ? {level: 'MOUSE', more: (4 - userFacts.length), next: 'BUNNY'} :
               userFacts.length <= 6 ? {level: 'BUNNY', more: (7 - userFacts.length), next: 'PANDA'} :
               userFacts.length <= 9 ? {level: 'PANDA', more: (10 - userFacts.length), next: 'COALA'} :
               userFacts.length <= 12 ? {level: 'COALA', more: (13 - userFacts.length), next: 'TIGER'} :
               {level: 'TIGER'};
  return (
    <>

      <div className='home-cont '>
        <section className="container-profil ">
          <div className="col-md-12 col-sm-12 user-info">

            {animal.level === 'MOUSE' && (<img className='img-animal' src='./images/animals/1-mouse.jpeg' alt="profile picture" />)}
            {animal.level === 'BUNNY' && (<img className='img-animal' src='./images/animals/2-rabbit.jpg' alt="profile picture" />)}
            {animal.level === 'PANDA' && (<img className='img-animal' src='./images/animals/3-coala.jpg' alt="profile picture" />)}
            {animal.level === 'COALA' && (<img className='img-animal' src='./images/animals/4-panda.jpg' alt="profile picture" />)}
            {animal.level === 'TIGER' && (<img className='img-animal' src='./images/animals/5-tiger.jpg' alt="profile picture" />)}

            <h2 className="personName tm-title bold shadow profil-text name-email">{user.name}  </h2>
            <h2 className="personName white bold shadow profil-text email-user">{user.email}</h2>
            <h2 className="personEmail white bold shadow profil-text added-facts add-f">Added Facts: {userFacts.length}</h2>
            <h2 className="personName tm-title bold shadow profil-text level lvl" >Level: {animal.level} </h2>
            <h4 className="create-more" ><Link className="link-create" to="/create/fact">CREATE</Link> {animal.more} more fact to become {animal.next} level. </h4>
          </div>
          <div className="fav-row ">
            <div className="skills">
              <h2 className="fav my-fav my">My Season Foods</h2>
              <ul>
                {userFtuits && userFtuits.map(x =>
                  <li className='my-item'>
                    <Link
                      className={`my-added-item ${x.season === "summer" ? "summer-item" : x.season === "winter" ? "winter-item" : x.season === "autumn" ? "autumn-item" : x.season === "spring" ? "spring-item" : "default"}`}
                      to={`/catalog/${x.season}/${x._id}`} key={x._id}
                    >{x.name} - {x.season}
                    </Link>
                  </li>)}
              </ul>
            </div>
            <div className="skills my-facts">
              <h2 className="fav my-facts my-fav my ff" >My Facts</h2>
              <ul>
                {userFacts && userFacts.map(x =>
                  <li className='my-item '>
                    <Link to={`/catalog/${(seasonProducts.filter(p => p.product = x.name))[0].season}/${(seasonProducts.filter(p => p.product = x.name))[0]._id}/fact/${x._id}`}
                      className='fav-item-name .my-added-item'>{(x.product)} - {x.name}
                    </Link>
                  </li>)}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>

  )
}