import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { ProductsContext } from '../../contexts/ProductsContext';
import './Profile.css'

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
            src="images/rihana.jpg"
            className="img-responsive img-circle tm-border"
            alt="templatemo easy profile"
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
            {userFtuits && userFtuits.map(x => <li key={x._id} className="favFood">{x.name}</li>)}
            {/* <li className="favFood">Strawbery</li>
            <li className="favFood">Cherry</li> */}
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