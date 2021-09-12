import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapView from "react-native-maps"; 
import tw from "tailwind-react-native-classnames"; 
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';
import { Marker } from 'react-native-maps';
const Map = () => {
    // this hook takes a selector function as an argument
    const origin = useSelector(selectOrigin); // it is an object (returns null and it causes to error rn )
    return (
          <MapView
                style = {tw`flex-1`}
                mapType = "mutedStandart"
                initialRegion={{ // info about the location we chose
                latitude: origin.location.lat,
                longitude: origin.location.lng,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
                }}
                
        >
            {origin?.location && (
                <Marker
                    coordinate = {{
                            latitude: origin.location.lat,
                            longitude: origin.location.lng,  
                    }}
                    title= "Origin"
                    description={origin.description}
                    identifier="origin"

                />  
            )}  
                

             </MapView>


    )
}

export default Map

const styles = StyleSheet.create({})
