import './Facts.css'
import { Link } from 'react-router-dom'

export const Facts = () => {
  return(

<div className='home-cont fact-cont'>
  <div className='all-facts'>

      <div className="grid_4 factRow">
      <div className="block1 bl">
        {/* <div className="count product-name num">WATERMELLON</div> */}
        <div className='fact-name'> High water content</div>
        <Link to="#" className="btn btnMore"> more </Link>
      </div>
    </div>

    
    

</div>
    </div>
    
  )
}