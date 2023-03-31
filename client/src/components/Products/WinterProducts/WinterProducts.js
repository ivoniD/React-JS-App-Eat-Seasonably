import './WinterProducts.css'


import { SingleProduct } from '../SingleProduct/SingleProduct';

export const WinterProducts = (props) => {

  props.data.map(x => console.log(x))
  return(
<div className="products">
<div className="seasonName winterFood">Winter seasonall food</div>
      {props.data.map(x => <SingleProduct {...x} />)} 
        
      </div>
  )
}