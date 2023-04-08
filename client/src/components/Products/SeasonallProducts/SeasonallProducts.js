import './SeasonallProducts.css'
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { SingleProduct } from '../SingleProduct/SingleProduct';
import { ProductsContext } from '../../../contexts/ProductsContext';


export const SeasonallProducts = () => {
  const {season} = useParams()

  // const [data] = useContext(ProductsContext)
  const { seasonProducts, isPending } = useContext(ProductsContext);
console.log(isPending);
  return(
    <div className='catalog-cont'>
<div className="products">


{season === 'spring' && <div className="seasonName spring-food">  Spring seasonall food</div>}
{season === 'summer' && <div className="seasonName summer-food">  Summer seasonall food</div>}
{season === 'autumn' && <div className="seasonName autumn-food">  Autumn seasonall food</div>}
{season === 'winter' && <div className="seasonName winter-food">  Winter seasonall food</div>}

    {isPending 
      ? <div className='loading'>Loading...</div>
      : seasonProducts && seasonProducts.filter(x => x.season === (season)).map(x => <SingleProduct key={x._id} {...x} />)
    }
    
      
    </div>
    </div>

  )
}