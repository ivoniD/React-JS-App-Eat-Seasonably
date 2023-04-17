import './ProductsList.css'
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { ProductCard } from '../ProductCard/ProductCard';
import { ProductsContext } from '../../../contexts/ProductsContext';


export const ProductsList = () => {
  const { season } = useParams()
  const { seasonProducts } = useContext(ProductsContext);
  console.log(`season prod: ${seasonProducts.map(x=> console.log(x))}`);

  
console.log(`seasonProducts.season.length ${seasonProducts.season}`);

  return(
    <div className='home-cont'>
{season === 'spring' && <div className="seasonName spring-food se-n">  Spring is good to eat...</div>}
{season === 'summer' && <div className="seasonName summer-food se-n">  Summer is good to eat...</div>}
{season === 'autumn' && <div className="seasonName autumn-food se-n">  Autumn is good to eat...</div>}
{season === 'winter' && <div className="seasonName winter-food se-n">  Winter is good to eat...</div>}

<div className='catalog-container'>
      {seasonProducts.length && seasonProducts.filter(x => x.season === (season)).map(x => <ProductCard key={x._id} {...x} />)}

      {!(seasonProducts.some(x => x.season === (season))) &&  <div className="seasonName summer-food se-n no-pr-yet" style={{ fontSize: "35px", color: "white", "marginLeft": '300px' }}>
          No added propducts yet... </div>}
</div>
</div>

  )
}