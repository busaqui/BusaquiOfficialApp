import Geocoder from 'react-native-geocoding';
import Geolocation from '@react-native-community/geolocation';
import { MapsAPI } from '../../services/config.js';
import MapView, {Marker} from 'react-native-maps';

// export const getMyPositionBus = {};
export  const getMyPositionBus = (props) =>{
    Geolocation.watchPosition(async(infoBus)=>{
        const geoBus = await Geocoder.from(infoBus.coords.latitude, infoBus.coords.longitude);
        if(geoBus.results.length > 0){
            const locFrom = {
                 name:geoBus.results[0].short_name,
                 center:{
                     latitude:infoBus.coords.latitude,
                     longitude:infoBus.coords.longitude
                 },
                 
                 zoom:16,
                 pitch:0,
                 altitude:0,
                 heading:0
            }

            setMapLoc(locFrom);
            setFromLocation(locFrom);
        }
        console.log(geoBus.results[0]); 
    
    }); 
    
}