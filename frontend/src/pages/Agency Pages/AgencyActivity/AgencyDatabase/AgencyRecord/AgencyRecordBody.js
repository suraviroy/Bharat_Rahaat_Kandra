import React from 'react'
import './AgencyRecordBody.css'


import Agencytop from '../../../TopSection/agencytop'


import AgencyRecord from './agencyrecord'

const AgencyRecordBody = () => {
    return (
        <div className='mainContent02'>
             <Agencytop/>
            
        <div className='bottom02 flex'>
          <AgencyRecord/>
        </div>
        </div>
       
        
    )
}
export default AgencyRecordBody;