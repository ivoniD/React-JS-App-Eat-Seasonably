export const Other = () => {
  return(
    <>
    
    <div className="grid_4">
          <h2>Testimonials</h2>
          <blockquote className="bq1">
            <img
              src="images/page1_img7.jpg"
              alt=""
              className="img_inner fleft noresize"
            />
            <div className="extra_wrapper">
              <div className="bq_title color1">Mark Wood</div>
              Sivamus at magna non nuncer tristique rhoncus. Aliquame nibh ante,
              egestas id dictumertolom commodo. Praesent faucib mal.
              <a href="#">
                <span className="fa fa-chevron-right" />
                more testimonials
              </a>
            </div>
          </blockquote>
        </div>
        <div className="grid_4">
          <h2>What’s new</h2>
          <div className="block2">
            <time dateTime="2014-01-01">
              11
              <br />
              June
            </time>
            <div className="extra_wrapper">
              <div className="text1">
                <a href="#">Vivamus at magna non nunc </a>
              </div>
              Rehoncus. Aliquam nibh antegestas id dictum a, commodo.
              Praesenterto faucibus malesuada faucibus
            </div>
          </div>
          <div className="block2">
            <time dateTime="2014-01-01">
              15
              <br />
              APR
            </time>
            <div className="extra_wrapper">
              <div className="text1">
                <a href="#">Tivamus at magna non nunc </a>
              </div>
              Rehoncus. Aliquam nibh antegestas id dictum a, commodo.
              Praesenterto faucibus malesuada faucibu
            </div>
          </div>
        </div>
        <div className="grid_4">
          <h2>Opening Hours</h2>
          <ul className="shed">
            <li>
              <span>Breakfast:</span> 8AM - 11AM
            </li>
            <li>
              <span>Grill Menu:</span> 12AM - 12PM
            </li>
            <li>
              <span>Live Musiс:</span> 8AM - 11AM
            </li>
          </ul>
        </div>
    
    </>
  )
}