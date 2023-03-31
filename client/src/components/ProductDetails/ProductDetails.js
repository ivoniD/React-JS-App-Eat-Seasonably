import { Link } from "react-router-dom"
import './ProductDetails.css'
import { useParams } from "react-router-dom"

export const ProductDetails = () => {
  const {prodId, season} = useParams()

  console.log(prodId);
  console.log(season);
  return (
    <>

        <div className="info-section">
            <div className="game-header">
                <img className="game-img" src='https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg' />
                <h2>FOOD NAME</h2>
                {/* <span className="levels">MaxLevel: {}</span> */}
                <p className="type">FOOOOD</p>
                <h2>Country</h2>
            <p className="type">BULGARIA</p>
            </div>
            <p className="text">
            Environment Earth Day In the hands of trees growing seedlings. 
            Bokeh green Background Female hand holding tree on nature field grass Forest conservation concept
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