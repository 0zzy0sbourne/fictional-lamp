import React from 'react'
import { FlatList, Image,  Text, TouchableOpacity, View } from 'react-native'
import tw from "tailwind-react-native-classnames"; 
import {Icon} from "react-native-elements"; 
import { useSelector } from 'react-redux';
import { useNavigation, useNavigationContainerRef } from '@react-navigation/native';
import { selectOrigin } from '../slices/navSlice';
const data = [
    {
        id: "123" , 
        image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_537/v1568070443/assets/82/6bf372-6016-492d-b20d-d81878a14752/original/Black.png",
        title: "Get a ride", 
        screen: "MapScreen", 

    },
    {
        id: "456",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW_37iDn4yzqMAkGanFscb3_ICygg4wolbOfSQ1TBUE0bjbHNS43CalNChbjsRpAblTOw&usqp=CAU",
        title: "Order Food", 
        screen: "EatsScreen", 
    },


]; 
const NavOptions = () => {
    const origin = useSelector(selectOrigin); 
    const navigation = useNavigation(); 
    return (
        <FlatList
            data = {data}
            horizontal
            keyExtractor = {(item) =>  item.id} 
            renderItem = { ({ item }) => (
                <TouchableOpacity 
                onPress = {() => navigation.navigate(item.screen)}
                style = {tw`p-2 `}
                disabled = {!origin}
                >
                    
                    <View style={tw`${!origin && "opacity-20" }`}>
                        <Image
                            style = {{width: 100, height:100, resizeMode: "contain"}} 
                            // resizeMode keeps the aspect ratio
                            source = {{ uri: item.image}}
                        />
                        <Text style = {tw`mt-2 font-bold`}>
                            {item.title}
                        </Text>
                        <Icon
                            style = {tw`p-2 bg-black rounded-full w-10 mt-4`}
                            name = "arrowright" 
                            color = "white"
                            type ="antdesign"
                        />
                    </View>
                </TouchableOpacity>
            )}
        />
    ); 
}; 

export default NavOptions; 

