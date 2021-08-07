import React, {useEffect, useRef, useState}from 'react';
import { StatusBar, Image, Text, TouchableHighlight, Button, TouchableWithoutFeedback, View } from 'react-native';
import Geocoder from 'react-native-geocoding';
import Geolocation from '@react-native-community/geolocation';
import { MapsAPI } from '../../services/config.js';
import MapView, {Marker} from 'react-native-maps';
import styled from 'styled-components';
import color from '../../assets/color';


 const Locations = (props) => {


    const map = useRef();

    const [maploc, setMapLoc] = useState({
        center:{
            latitude:57.78825,
            longitude:-122.4322,
        },
        zoom:18,
        pitch:0,
        altitude:0,
        heading:0
    });

    const [fromLocation, setFromLocation] = useState({});
    const [result,setResult] = useState([]);

    useEffect(()=>{
        Geocoder.init(MapsAPI, {language:'pt-br'});
        getMyPositionBus();
    });



    const getMyPositionBus = (props) =>{

        Geolocation.watchPosition(async(infoBus)=>{
            const geoBus = await Geocoder.from(infoBus.coords.latitude, infoBus.coords.longitude);
            if(geoBus.results.length > 0){
                const locFrom = {
                     name:geoBus.results[0].short_name,
                     center:{
                         latitude:infoBus.coords.latitude,
                         longitude:infoBus.coords.longitude,
                        // ltdBus = latitude,
                        // lngBus = longitude
                     },
                      
                     zoom:16,
                     pitch:0,
                     altitude:0,
                     heading:0
                }
    
                setMapLoc(locFrom);
                setFromLocation(locFrom);
                
                // LocBus = locFrom.center;




            }
            console.log(geoBus.results[0]); 
        
        }); 

    }
        // const handleFromClic = () => {
            // export let locBus = {locFrom};
        

    return(
        
 
        <View style={{backgroundColor:'#fff',flex:1}}>
            <StatusBar></StatusBar>
            <MapView
            ref={map}
            style={{flex:1}}
            provider={'google'}
            camera={maploc}
            >

               {fromLocation.center && 
               <MapView.Marker
                coordinate={fromLocation.center}
                pinColor='black'
                />
               }
                
            </MapView>
            
        </View>
      
      
      );
            }

export default Locations;