import { SingleProduct } from '../SingleProduct/SingleProduct';
import './SummerProducts.css'



export const SummerProducts = (props) => {
  console.log(`${props.data} - pr data`);
  props.data.map(x => console.log(x))
  return(
<div className="products">
<div className="seasonName">Summer seasonall food</div>
      {props.data.map(x => <SingleProduct {...x} />)} 
        
      </div>
  )
}