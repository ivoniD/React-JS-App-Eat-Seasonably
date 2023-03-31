import './SeasonallProducts.css'
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { SingleProduct } from '../SingleProduct/SingleProduct';
import { ProductsContext } from '../../../contexts/ProductsContext';
// import { SingleProduct } from '../SingleProduct/SingleProduct';

export const SeasonallProducts = () => {
  const {season} = useParams()

  const data = useContext(ProductsContext)


  return(
<div className="products">

  {season === 'spring' && <div className="seasonName springFood">  Spring seasonall food</div>}
  {season === 'summer' && <div className="seasonName summerFood">  Summer seasonall food</div>}
  {season === 'autumn' && <div className="seasonName autumnFood">  Autumn seasonall food</div>}
  {season === 'winter' && <div className="seasonName winterFood">  Winter seasonall food</div>}


      {data.filter(x => x.season === season).map(x => <SingleProduct {...x} />)} 
        
      </div>
  )
}