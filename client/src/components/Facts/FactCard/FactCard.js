import { Link } from 'react-router-dom'
import './FactCard.css'

export const FactCard = (props) => {
  return(

    <div className="grid_4 factRow facts-all">
      {props.i % 2 === 0 ? (
        <div className="block1 bl even">
          <div className="fact-name">{props.product} </div>
          <div className="fact-name fact-title"> {props.name}</div>
          <Link to={`/facts/${props._id}`} className="btn btnMore">
            more
          </Link>
        </div>
      ) : (
        <div className="block1 bl odd">
          <div className="fact-name">{props.product} </div>
          <div className="fact-name fact-title"> {props.name}</div>
          <Link to={`/facts/${props._id}`} className="btn btnMore">
            more
          </Link>
        </div>
      )}
    </div>
  );
};
