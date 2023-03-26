import './CreateNew.css'

export const CreateNew = () => {
  return(
    <div className="content createCont">
  <div className="container">
    <div className="row">
    <div className="col-md-5 mr-auto">
        <h3 className="mb-3"></h3>
        <p>
        
        </p>
        
      </div>

        <div className="box">
          <h2 className="heading">Create New Fact</h2>
          <form
            className="mb-5"
            method="post"
            id="contactForm"
            name="contactForm"
          >
            <div className="row">
              <div className="col-md-6 form-group">
                <label htmlFor="name" className="col-form-label">
                  Title*
                </label>
                <input
                  type="text"
                  className="formInput"
                  name="name"
                  id="name"
                  // placeholder="Name of Dish"
                />
              </div>
              <div className="row mb-3">
              <div className="col-md-6 form-group">
                <label htmlFor="budget" className="col-form-label">
                 Season*
                </label>
                <select className="custom-select" id="budget" name="budget">
                  <option selected="">Choose...</option>
                  <option value="$1000 below">SPRING</option>
                  <option value="$2,000 - $5,000">SUMMER</option>
                  <option value="$5,000 - $15,000">AUTUMN</option>
                  <option value="$15,000 - $25,000">WINTER</option>
                </select>
              </div>
              {/* <div className="col-md-6 form-group">
                <label htmlFor="name" className="col-form-label">
                  Image 
                </label>
                <input
                  type="text"
                  className="formInput"
                  name="organization"
                  id="organization"
                  // placeholder="Season"
                />
              </div> */}
            </div>
            
            <div className="row">
              <div className="col-md-12 form-group">
                <label htmlFor="message" className="col-form-label">
                  Fact description *
                </label>
                <textarea
                  className="formInput"
                  name="message"
                  id="message"
                  cols={30}
                  rows={7}
                  defaultValue={""}
                />
              </div>
            </div>
            
              
            </div>
            <div className="row">
              <div className="col-md-12">
                <input
                  type="submit"
                  value="Create"
                  className="submitBtn formInput btn btn-block btn-primary rounded-0 py-2 px-4"
                />
                <span className="submitting" />
              </div>
            </div>
          </form>
          <div id="form-message-warning mt-4" />
          <p className="formInput" id="form-message-success">Your message was sent, thank you!</p>
        </div>

    </div>
  </div>
</div>

  )
}