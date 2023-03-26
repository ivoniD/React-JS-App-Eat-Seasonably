import { Link } from "react-router-dom"
import './Seasons.css'
export const Seasons = () => {
  return (
    <>

      <div className="seasons">
        <div className="grid_4">
          <Link to="/spring/food" className="gall_item">
            <img className='seasonImg seasonImage' src="images/SEASONS/spring_4.jpg" alt="" />
          </Link>
          <Link to="/spring/food" className="spring" >
            SPRING
          </Link>
          <div className="clear" />
        </div>
        <div className="grid_4">
          <Link to="/summer/food" className="gall_item">
            <img className='seasonImg' src="images/SEASONS/summer.jpg" alt="" />
          </Link>
          <Link to="/summer/food" className="summer">
            SUMMER 
          </Link>
          <div className="clear" />
        </div>
        <div className="grid_4">
          <Link to="/autumn/food" className="gall_item">
            <img className='seasonImg' src="images/SEASONS/autumn.jpg" alt="" />
          </Link>
          <Link to="/autumn/food" className="autumn">
            AUTUMN
          </Link>
          <div className="clear" />
        </div>
        <div className="grid_4">
          <Link to="/winter/food" className="gall_item">
            <img className='seasonImg' src="images/SEASONS/winter.jpg" alt="" />
          </Link>
          <Link to="/winter/food" className="winter">
            WINTER
          </Link>
          <div className="clear" />
        </div>
      </div>

    </>
  )
}