import React from 'react'
import './AgencyDatabaseBody.css'


import Agencytop from '../../../TopSection/agencytop'

import Agencydb from './agencydb'

const AgencyDatabaseBody = () => {
    return (
        <div className='mainContent02'>
             <Agencytop/>
            
        <div className='bottom02 flex'>
          <Agencydb/>
        </div>
        </div>
       
        
    )
}
export default AgencyDatabaseBody;