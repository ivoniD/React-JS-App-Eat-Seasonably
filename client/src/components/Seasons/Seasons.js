
export const Seasons = () => {
  return (
    <>

      <div className="seasons">
        <div className="grid_4">
          <a href="#" className="gall_item">
            <img className='seasonImg' src="images/SEASONS/spring_4.jpg" alt="" />
          </a>
          <a href="#" className="spring" >
            SPRING
          </a>
          <div className="clear" />
        </div>
        <div className="grid_4">
          <a href="#" className="gall_item">
            <img className='seasonImg' src="images/SEASONS/summer.jpg" alt="" />
          </a>
          <a href="#" className="summer">
            SUMMER 
          </a>
          <div className="clear" />
        </div>
        <div className="grid_4">
          <a href="images/big3.jpg" className="gall_item">
            <img className='seasonImg' src="images/SEASONS/autumn.jpg" alt="" />
          </a>
          <a href="#" className="autumn">
            AUTUMN
          </a>
          <div className="clear" />
        </div>
        <div className="grid_4">
          <a href="images/big3.jpg" className="gall_item">
            <img className='seasonImg' src="images/SEASONS/winter.jpg" alt="" />
          </a>
          <a href="#" className="winter">
            WINTER
          </a>
          <div className="clear" />
        </div>
      </div>

    </>
  )
}