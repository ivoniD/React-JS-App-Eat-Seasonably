import './Products.css'

import { Food } from './Food/Product';

export const Products = (props) => {
  console.log(`${props.data} - pr data`);
  props.data.map(x => console.log(x))
  return(
<div className="products">
<div className="seasonName">Summer food</div>
      {props.data.map(x => <Food {...x} />)} 
        
      </div>
  )
}