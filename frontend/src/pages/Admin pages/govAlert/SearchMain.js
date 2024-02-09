import React, {useState} from 'react';
import SearchBox from './SearchBox';
import SearchMaps from './SearchMaps';
import './SearchMain.css';
import Header from '../Header';
import Navigation from '../Navigation';
import SidePanel from '../SidePanel';
function SearchMain(){
    const [selectPosition, setSelectPosition] = useState(null);
    
    return (
        <div >
            <Header />
            <Navigation />
            <div className='smbody67'>
            <div className='smbox67'>
                <SearchBox selectPosition = {selectPosition} setSelectPosition = {setSelectPosition}/>
            </div>
            <div className='smap67'>
            <SearchMaps selectPosition={selectPosition}/>
            </div>
            </div>
            <SidePanel />
        </div>
        
    );
}
export default SearchMain;