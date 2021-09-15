import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, FlatList , TouchableOpacity } from 'react-native'
import { selectDestination, selectServices } from '../slices/navSlice'
import tw from "tailwind-react-native-classnames";
import { useSelector } from 'react-redux'; 

const RideOptionsCard = () => {
    const services = useSelector(selectServices);  // returns an array of our services
    return (
        <SafeAreaView style = {tw`bg-white h-full`}>
           
            <View> 
                <Text style = {tw`text-center text-xl py-5`}>
                    Choose the services
                </Text>
            </View>
            
            <FlatList data = {services}
                renderItem = {({item: {name}, item}) => (
                    <TouchableOpacity>
                        <View>
                            <Text>{name}</Text>
                            <Text></Text>
                        </View>

                    </TouchableOpacity>
                )}
            />

            
        
        </SafeAreaView>
    )
}

export default RideOptionsCard

const styles = StyleSheet.create({})
