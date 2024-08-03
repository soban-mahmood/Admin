import React from 'react'
import './Right.css'

import Uptodate from '../uptodate/Uptodate'
import Coustomer from '../coustmer/coustomer'
const Right = () => {

  
  return (
    <div className='RightSide'>
     <div>
        <h1>Reacent Orders</h1>
        <Uptodate/>
     </div>
     <div>
     <h3>Coustomer Reveiws</h3>
     <Coustomer/>    
     </div>
    </div>
  )
}

export default Right
