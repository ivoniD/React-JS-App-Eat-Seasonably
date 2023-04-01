import { Link } from "react-router-dom";
import './SingleProduct.css'



export const SingleProduct = (props) => {
  console.log(`x ${props}`);
return(
  <div className="grid_4 prod">
 
            <img className='prodImg' src={props.imageUrl} alt="" />
          <div className="details" >
          {props.name} 
          <br/>
          <Link to={`/catalog/${props.season}/${props._id}`} className="dtl">
                    MORE
                </Link>
          </div>
       
        </div>
)
}