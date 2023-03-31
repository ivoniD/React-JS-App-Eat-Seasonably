import './SpringProducts.css'


import { SingleProduct } from '../SingleProduct/SingleProduct';

export const SpringProducts = (props) => {

  props.data.map(x => console.log(x))
  return(
<div className="products">
<div className="seasonName springFood">Spring seasonall food</div>
      {props.data.map(x => <SingleProduct {...x} />)} 
        
      </div>
  )
}