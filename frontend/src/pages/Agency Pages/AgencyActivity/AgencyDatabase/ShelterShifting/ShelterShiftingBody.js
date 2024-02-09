import React from 'react'
import './ShelterShiftingBody.css'


import Agencytop from '../../../TopSection/agencytop'


import ShelterShifting from './ShelterShifting'

const ShelterShiftingBody = () => {
    return (
        <div className='mainContent02'>
             <Agencytop/>
            
        <div className='bottom02 flex'>
          <ShelterShifting/>
        </div>
        </div>
       
        
    )
}
export default ShelterShiftingBody;