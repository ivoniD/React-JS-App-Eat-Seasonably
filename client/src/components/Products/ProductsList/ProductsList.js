import './ProductsList.css'
import { Link, useParams } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { SingleProduct } from '../SingleProduct/SingleProduct';
import { ProductsContext } from '../../../contexts/ProductsContext';


export const ProductsList = () => {
  const {season} = useParams()
  const { seasonProducts, isPending } = useContext(ProductsContext);

  const [picture, setPicture] = useState(null);
  let productName = 'cherry'
  let product = 'cherry'
  
  useEffect(() => {
    fetch(`https://api.unsplash.com/search/photos?query=${product}&per_page=1&client_id=lAiKcO1Fgtuf5I63kns_SKP2VOl2FWF5RxGluAI47tE`)
    .then(response => response.json())
    .then(data => {
      let url = Object.entries(data)[2][1][0].urls.small
      setPicture(url)
    })
  }, [])


  return(
    <div className='home-cont'>
      {season === 'spring' && <div className="seasonName spring-food se-n">  Spring is good to eat...</div>}
{season === 'summer' && <div className="seasonName summer-food se-n">  Summer is good to eat...</div>}
{season === 'autumn' && <div className="seasonName autumn-food se-n">  Autumn is good to eat...</div>}
{season === 'winter' && <div className="seasonName winter-food se-n">  Winter is good to eat...</div>}

<div className='catalog-container'>


  {isPending 
    ? <div className='loading'>Loading...</div>
    : seasonProducts && seasonProducts.filter(x => x.season === (season)).map(x => <SingleProduct key={x._id} {...x} />)
  }

</div>
</div>

  )
}