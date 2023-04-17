import { Link } from "react-router-dom";
import './ProductCard.css'
import { useState, useEffect } from "react";



export const ProductCard = (props) => {
  const [picture, setPicture] = useState(null);

  useEffect(() => {
    fetch(`https://api.unsplash.com/search/photos?query=${props.name}&per_page=1&client_id=lAiKcO1Fgtuf5I63kns_SKP2VOl2FWF5RxGluAI47tE`)
    .then(response => response.json())
    .then(data => {
      let url = Object.entries(data)[2][1][0].urls.small
      setPicture(url)
    })
  }, [])


return(
    <div className=" prod row-items">
      <div className="it">
      <img className='single-item' src={picture} alt="" />
      <div className="details" >
        {props.name}
        <br />
        <Link to={`/catalog/${props.season}/${props._id}`} className="dtl">
          READ MORE
        </Link>
      </div>
      </div>
    </div>
  )
}