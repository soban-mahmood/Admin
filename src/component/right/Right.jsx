import React from 'react'
import './Right.css'

import Uptodate from '../uptodate/Uptodate'
import Coustomer from '../coustmer/coustomer'
const Right = () => {

  
  return (
    <div className='RightSide'>
     <div>
        <h1>update</h1>
        <Uptodate/>
     </div>
     <div>
     <Coustomer/>    
     </div>
    </div>
  )
}

export default Right
