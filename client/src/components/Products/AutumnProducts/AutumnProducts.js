import './AutumnProducts.css'
import { useParams } from 'react-router-dom';

import { SingleProduct } from '../SingleProduct/SingleProduct';

export const AutumnProducts = (props) => {
  props.data.map(x => console.log(x))
  return(
<div className="products">
<div className="seasonName autumnFood">Autumn seasonall food</div>
      {props.data.map(x => <SingleProduct {...x} />)} 
        
      </div>
  )
}