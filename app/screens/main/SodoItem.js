import React, { useState, useEffect } from "react";
import {View, Text, TouchableOpacity, FlatList, ScrollView} from 'react-native' 
import { useNavigation, useRoute } from "@react-navigation/native";
import FontAwesome from 'react-native-vector-icons/FontAwesome5Pro';

const SodoItem = props => {
    const navigation = useNavigation()
    let {name, url} = props.sodo
    return (
        <TouchableOpacity onPress = {() => {
            navigation.navigate('DiagramDetail', {tensodo: name, url: url});
        }} >
            <View style={{padding:20,  paddingLeft: 10}}>
            <Text style={{fontSize: 20, color:'#44474C'}}>
                {name}
            </Text>
        </View>
        <View style={{height:2, backgroundColor:'#CFCFCF'}}/>
        </TouchableOpacity>
    )
}
export default SodoItem;