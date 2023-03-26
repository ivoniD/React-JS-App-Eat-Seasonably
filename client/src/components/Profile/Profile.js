import './Profile.css'

export const Profile = () => {
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
          <h2 className="personName tm-title bold shadow">Robyn Rihanna </h2>
          <h2 className="personEmail white bold shadow">rihanna@abv.bg</h2>
        </div>
    <div className="row">
      <div className="col-md-6 col-sm-12">
        <div className="skills">
          <h2 className="fav">Favourite Season Foods</h2>
          <ul>
            <li className="favFood">Strawbery</li>
            <li className="favFood">Cherry</li>
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