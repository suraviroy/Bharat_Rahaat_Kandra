import React from 'react'
import './AgencyInventoryBody.css'


import Agencytop from '../../TopSection/agencytop'
import AgencyInventory from '../AgencyInventory/AgencyInventory'

const AgencyInventoryBody = () => {
    return (
        <div className='mainContent02'>
             <Agencytop/>
            
        <div className='bottom02 flex'>
          <AgencyInventory/>
        </div>
        </div>
       
        
    )
}
export default AgencyInventoryBody;