import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from "tailwind-react-native-classnames";
const NavigateCard = () => {
    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <Text style={tw`text-center py-5 text-xl `}>
               Good Morning 
            </Text>
            <View style={tw`border-t border-gray-200 flex-shrink`}>

                <View>
                    <GooglePlacesAutocomplete
                        placeholer="where to?"
                        nearbyPlacesAPI = "GooglePlacesSearch"
                        debounce =  {400}
                    />
                </View>
            </View>


        </SafeAreaView>    
    )
}

export default NavigateCard

const styles = StyleSheet.create({})
