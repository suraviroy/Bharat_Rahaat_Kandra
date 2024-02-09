import React from 'react'
import '../AgencyBody/agencybody.css'


import Agencytop from '../TopSection/agencytop'

import AgencyMessage from './AgencyMessage'

const AgencyMessageBody = () => {
    return (
        <div className='mainContent02'>
             <Agencytop/>
            
        <div className='bottom02 flex'>
          <AgencyMessage/>
        </div>
        </div>
       
        
    )
}
export default AgencyMessageBody;