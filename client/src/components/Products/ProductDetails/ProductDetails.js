import { Link } from "react-router-dom"
import './ProductDetails.css'
import { useParams } from "react-router-dom"
import { useContext } from 'react';
import { ProductsContext } from "../../../contexts/ProductsContext";

export const ProductDetails = () => {
  const {prodId, season} = useParams()
  const data = useContext(ProductsContext);

  const product = data.filter(x => x._id === prodId)
console.log(product);

  return (
    <>

        <div className="info-section">
            <div className="game-header">
                <img className="game-img" src={product[0].imageUrl} />
                <h2>{product[0].name}</h2>
                {/* <span className="levels">MaxLevel: {}</span> */}
                <p className="type">{product[0].season}</p>
                <h2>Country</h2>
            <p className="type">BULGARIA</p>
            </div>
            <p className="text">
            {product[0].description}
            </p>
      

            {/* <div className="details-comments">
                <h2>Comments:</h2>
                <ul>
                    {/* {game.comments?.map(x => 
                        <li className="comment">
                            <p>{x}</p>
                        </li>
                    )} */}
                {/* </ul> */}

                {/* {!game.comments &&
                    <p className="no-comment">No comments.</p>
                } */}
            {/* </div> */} */

            <div className="buttons">
                <Link  className="button">
                    Edit
                </Link>
                <Link to="#" className="button">
                    Delete
                </Link>
            </div>
        </div>
    </>
       
        )
}