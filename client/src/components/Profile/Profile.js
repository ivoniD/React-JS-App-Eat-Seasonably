import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { ProductsContext } from '../../contexts/ProductsContext';
import './Profile.css'
import { Link } from 'react-router-dom';

export const Profile = () => {
const {user} = useContext(AuthContext);
const {seasonProducts} = useContext(ProductsContext)

const userFtuits = seasonProducts.filter(x => x._ownerId === user._id);

  return(
    <>

  {/* about and skills section */}

  <section className="container">
  <div className="col-md-12 col-sm-12">
  <img
  // src={user.imageUrl}
  // className="img-responsive img-circle tm-border"
  // style={{
  //   width: "180px",
  //   height: "200px",
  // }}
  alt="profile picture"
/>
 
          <hr />
          <h2 className="personName tm-title bold shadow">{user.name} </h2>
          <h2 className="personEmail white bold shadow">{user.email}</h2>
        </div>
    <div className="row">
      <div className="col-md-6 col-sm-12">
        <div className="skills">
          <h2 className="fav">My Season Foods</h2>
          <ul>
            {userFtuits && userFtuits.map(x => 
            <li className='my-item'>
               <Link 
                  // className="my-added-item" 
                  className={`my-added-item ${ x.season === "summer" ? "summer-item" : x.season === "winter" ? "winter-item" : x.season === "autumn" ? "autumn-item" : x.season === "spring" ? "spring-item" : "default"}`}
                  to={`/catalog/${x.season}/${x._id}`} key={x._id}
                  
                  >{x.name}
               </Link>
            </li>)}

          </ul>
        </div>
      </div>
    </div>
  </section>
  {/* contact and experience */}
  {/* <section className="container">
    <div className="row">
      <div className="col-md-4 col-sm-12">
        <div className="contact">
          <h2>Added Foods</h2>
        </div>
      </div>
    </div>
  </section> */}
</>

  )
}