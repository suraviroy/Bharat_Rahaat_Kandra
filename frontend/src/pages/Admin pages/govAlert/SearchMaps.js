import React,{useEffect} from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import './SearchMaps.css';
import "leaflet/dist/leaflet.css"
import L from 'leaflet';
const icon = L.icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/2776/2776067.png",
    iconSize: [38, 38]
});

const position = [22.5726, 88.3639];
function ResetCenterView(props) {
  const { selectPosition} = props;
  const map = useMap();
  useEffect(() => {
    if( selectPosition){
      map.setView(
        L.latLng(selectPosition?.lat, selectPosition?.lon),
        map.getZoom(),
        {
          animate: true
        }
      )
    }
  },[selectPosition]);
  
  return null;
}
export default function SearchMaps(props){
  const { selectPosition } = props;
  const locationSelection = [selectPosition?.lat, selectPosition?.lon];
return(
  <MapContainer className= 'srmap01' center={position} zoom={15} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?key=9WFebKyo4SzKyo4SzKO0H6sXG3"
    />
    {selectPosition && (
    <Marker position={locationSelection} icon={icon}>
      <Popup>
        Your searched location. <br /> 
      </Popup>
    </Marker>
    )}
    <ResetCenterView selectPosition = {selectPosition}/> 
  </MapContainer>
) }


