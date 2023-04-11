import { Link } from "react-router-dom";
import './SingleProduct.css'
import { useState, useEffect } from "react";



export const SingleProduct = (props) => {
  const [picture, setPicture] = useState(null);

  let productName = (props.name).toLowerCase()
  let product = props.name
  useEffect(() => {
    fetch(`https://api.unsplash.com/search/photos?query=${product}&per_page=1&client_id=lAiKcO1Fgtuf5I63kns_SKP2VOl2FWF5RxGluAI47tE`)
    .then(response => response.json())
    .then(data => {
      let url = Object.entries(data)[2][1][0].urls.small
      setPicture(url)
    })
  }, [])
return(
    <div className="grid_4 prod row-items">
      <div className="single-item">
      <img className='prodImg' src={picture} alt="" />
      <div className="details" >
        {productName}
        <br />
        <Link to={`/catalog/${props.season}/${props._id}`} className="dtl">
          READ MORE
        </Link>
      </div>
      </div>
    </div>
  )
}