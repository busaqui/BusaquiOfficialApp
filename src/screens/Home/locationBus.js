import React, {useEffect, useRef, useState}from 'react';
import { StatusBar, Image, Text, TouchableHighlight, Button, TouchableWithoutFeedback, View } from 'react-native';
import Geocoder from 'react-native-geocoding';
import Geolocation from '@react-native-community/geolocation';
import { MapsAPI } from '../../services/config.js';
import MapView, {Marker} from 'react-native-maps';
import styled from 'styled-components';
import color from '../../assets/color';
import {getMyPositionBus, busLoc}  from './servicesBus.js';


const Locations = (props) =>{

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


    getMyPositionBus();

    useEffect(()=>{
        Geocoder.init(MapsAPI, {language:'pt-br'});
        getMyPositionBus();
    });



    {getMyPositionBus}


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