import { FactContext } from '../../contexts/FactContext';
import { FactCard } from './FactCard/FactCard'
import './Facts.css'


import { useContext } from 'react';

export const Facts = () => {
  const { facts } = useContext(FactContext);
  return(

<div className='home-cont fact-cont'>
  <div className='all-facts'>

    {/* <FactCard /> */}
      {facts.map((x, index) => <FactCard i={index} key={x._id} {...x} />)}

</div>
    </div>
    
  )
}