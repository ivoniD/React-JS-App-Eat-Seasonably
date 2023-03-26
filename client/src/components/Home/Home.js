import './Home.css'

export const Home = () => {
  return(
   <>
   <div className="row">
        <div className="grid_4">
          <div className="banner">
            <div className="gall_block">
              <img src="images/SEASONS/s.jpg" alt="" />
              <div className="bann_capt ">
                <div className="maxheight">
                  <img className="smallImg"src="images/icon1.png" alt="" />
                  <div className="bann_title">EAT SEASONALY</div>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid_4">
          <div className="banner">
            <div className="gall_block">
              <div className="bann_capt  bn__1">
                <div className="maxheight">
                  <img className="smallImg" src="images/icon2.png" alt="" />
                  <div className="bann_title">STAY HAEALTHY</div>

                </div>
              </div>
              <img className=""src="images/SEASONS/healthy.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="grid_4">
          <div className="banner ">
            <div className="gall_block">
              <img className="fresh"src="images/SEASONS/fresh.jpg" alt="" />
              <div className="bann_capt  bn__2">
                <div className="maxheight">
                  <img className="smallImg" src="images/icon3.png" alt="" />
                  <div className="bann_title">
                    FEEL FRESH
                  </div>
                  <a href="#">more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
   </>
  )
}