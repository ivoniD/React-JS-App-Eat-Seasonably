export const Food = (props) => {
  console.log(`x ${props}`);
return(
  <div className="grid_4 prod">
 
            <img className='prodImg' src={props.imageUrl} alt="" />
          <div className="details" >
          {props.name} 
          </div>
        </div>
)
}