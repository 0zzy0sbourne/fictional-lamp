import React, {useState, useCallback} from 'react'
import { StyleSheet,TextInput, Text, View, Button, FlatList, TouchableOpacity } from 'react-native'; 
import tw from "tailwind-react-native-classnames"; 
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch, useSelector} from 'react-redux';
import { selectFavPlace, setFavPlace } from '../slices/favSlice';
import {GOOGLE_MAPS_APIKEY} from "@env"; 

const FavouritePlaces = () => {
    
    const dispatch = useDispatch(); 
    const fav = useSelector(selectFavPlace);

    const initialPlace = [];

    const [Places, setPlace] = useState(initialPlace);
    
    /* 
    useEffect(() => {
    // Should not ever set state during rendering, so do this in useEffect instead.
        if(Place.length >= 3) return;       
        Place = setPlace(Place.push());
    }, []);
    */ 
  
    return (
        
        <View style={{padding: 30, flex:1}}>
            <GooglePlacesAutocomplete 
                placeholder = "Choose your fav places"
                styles = {{
                    container : {
                        flex:0, 
                    }, 
                    textInput: {
                        fontSize:  20,
                    }
                }}
                onPress = {(data, details = null) => {
                    dispatch(setFavPlace({
                        location: details.geometry.location,
                        description: data.description
                    }))
                    console.log(details); 
                }}
                fetchDetails = {true}
                    returnKeyType = {"search"}
                    enablePoweredByContainer = {false}
                    minLength = {2}
                    query = {{
                        key: GOOGLE_MAPS_APIKEY, 
                        language: "en", 

                    }}
                    nearbyPlacesAPI = "GooglePlacesSearch"
                    debounce = {400}
            /> 
            <Button 
            title="Add"
            onPress = {(fav) => {
                setFavPlace(
                    Places.push(fav)
                )
            }}
            style={{height:40,backgroundColor:'white'}}
            />
            <FlatList 
            />
        </View>
    )
}

export default FavouritePlaces

const styles = StyleSheet.create({})
