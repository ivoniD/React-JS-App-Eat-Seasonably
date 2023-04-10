import { Link } from 'react-router-dom'
import './FactCard.css'

export const FactCard = () => {
  return(
    <div className="grid_4 factRow">
    <div className="block1 bl">
      {/* <div className="count product-name num"></div> */}
      <div className='fact-name'> SPINACH</div>
      <div className='fact-name fact-title'> High water content</div>
      <Link to="#" className="btn btnMore"> more </Link>
    </div>
  </div>

  )
}