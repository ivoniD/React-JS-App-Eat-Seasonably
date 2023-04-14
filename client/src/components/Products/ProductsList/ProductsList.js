import './ProductsList.css'
import { Link, Outlet, useParams } from 'react-router-dom';
import { useContext, useState, useEffect, Suspense } from 'react';
import { SingleProduct } from '../SingleProduct/SingleProduct';
import { ProductsContext } from '../../../contexts/ProductsContext';
import { AuthContext } from '../../../contexts/AuthContext';

export const ProductsList = () => {
  const {season} = useParams()
  const { seasonProducts, isPending } = useContext(ProductsContext);
  const { user } = useContext(AuthContext)
  let productName = 'cherry'
  let product = 'cherry'
  
console.log(`seasonProducts.season.length ${seasonProducts.season}`);

  return(
    <div className='home-cont'>
{season === 'spring' && <div className="seasonName spring-food se-n">  Spring is good to eat...</div>}
{season === 'summer' && <div className="seasonName summer-food se-n">  Summer is good to eat...</div>}
{season === 'autumn' && <div className="seasonName autumn-food se-n">  Autumn is good to eat...</div>}
{season === 'winter' && <div className="seasonName winter-food se-n">  Winter is good to eat...</div>}

<div className='catalog-container'>
      {seasonProducts.length && seasonProducts.filter(x => x.season === (season)).map(x => <SingleProduct key={x._id} {...x} />)}

      {!(seasonProducts.some(x => x.season === (season))) &&  <div className="seasonName summer-food se-n no-pr-yet" style={{ fontSize: "35px", color: "white", "margin-left": '300px' }}>
          No added propducts yet... </div>}
</div>
</div>

  )
}