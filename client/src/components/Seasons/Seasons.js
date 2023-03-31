import { Link } from "react-router-dom"
import './Seasons.css'
export const Seasons = () => {
  return (
    <>

      <div className="seasons">
        <div className="grid_4">
          <Link to="/catalog/spring" className="gall_item">
            <img className='seasonImg seasonImage' src="images/SEASONS/spring_4.jpg" alt="" />
          </Link>
          <Link to="/catalog/spring" className="spring" >
            SPRING
          </Link>
          <div className="clear" />
        </div>
        <div className="grid_4">
          <Link to="/catalog/summer" className="gall_item">
            <img className='seasonImg' src="images/SEASONS/summer.jpg" alt="" />
          </Link>
          <Link to="/catalog/summer" className="summer">
            SUMMER 
          </Link>
          <div className="clear" />
        </div>
        <div className="grid_4">
          <Link to="/catalog/autumn" className="gall_item">
            <img className='seasonImg' src="images/SEASONS/autumn.jpg" alt="" />
          </Link>
          <Link to="/catalog/autumn" className="autumn">
            AUTUMN
          </Link>
          <div className="clear" />
        </div>
        <div className="grid_4">
          <Link to="/catalog/winter" className="gall_item">
            <img className='seasonImg' src="images/SEASONS/winter.jpg" alt="" />
          </Link>
          <Link to="/catalog/winter" className="winter">
            WINTER
          </Link>
          <div className="clear" />
        </div>
      </div>

    </>
  )
}