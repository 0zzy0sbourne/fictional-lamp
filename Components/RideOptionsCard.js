import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { selectDestination } from '../slices/navSlice'
import tw from "tailwind-react-native-classnames"; 
const RideOptionsCard = () => {
    return (
        <SafeAreaView style = {tw`bg-white h-full`}>
            <Text style = {tw`text-center text-xl py-5`}>
                Choose the services
            </Text>
        </SafeAreaView>
    )
}

export default RideOptionsCard

const styles = StyleSheet.create({})
