import './CreateFact.css'
import { create } from '../../../services/factService';
import { useContext } from 'react';
import { FactContext } from '../../../contexts/FactContext';


export const CreateFact = () => {
  const { addNewFactHandler } = useContext(FactContext)

  const onSubmit = (e) => {
    e.preventDefault();

    const factData = Object.fromEntries(new FormData(e.target))

    create(factData)
      .then(result => {
        console.log(`new fact result ${result}`);
        addNewFactHandler(result)
      })

  }

  return (
    <>

      <div className="home-cont">
        <div className='create-form create-fact'>
          <h2 className="heading-create">Create Fact Abourt Product</h2>
          <form
            className="mb-5"
            method="post"
            id="contactForm"
            name="contactForm"
            onSubmit={onSubmit}
          >
            <div className="row">
              <div className="col-md-6 form-group name-div">
                <label htmlFor="name" className="col-form-label">
                  Product name*
                </label>
                <input
                  type="text"
                  className="formInput"
                  name="product"
                />
              </div>

              <div className="row">
              <div className="col-md-6 form-group name-div">
                <label htmlFor="name" className="col-form-label">
                 Fact title*
                </label>
                <input
                  type="text"
                  className="formInput"
                  name="name"
                />
              </div>
              </div>
              
              <div className="row">
                <div className="col-md-12 form-group">
                  <label htmlFor="message" className="col-form-label">
                    Fact details*
                  </label>
                  <textarea
                    className="formInput"
                    name="description"
                    id="message"
                    cols={30}
                    rows={7}
                    defaultValue={""}
                  />
                </div>
              </div>


            </div>
            <div className="row">
              <div id="form-message-warning mt-4" />
              <p className="error-message" style={{ color: 'red', 'font-size': '15px', fontWeight: 'bold' }}>All fields are required!</p>
              <div className="col-md-12">
                <input
                  type="submit"
                  value="Create"
                  className="create-btn formInput btn btn-block btn-primary rounded-0 py-2 px-4"
                />
                <span className="submitting" />
              </div>
            </div>
          </form>

        </div>
      </div>
    </>

  )
}