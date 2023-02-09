import React, { useState, useEffect } from "react";
import {View, Text, TouchableOpacity, FlatList, ScrollView} from 'react-native' 
import { useNavigation, useRoute } from "@react-navigation/native";
import FontAwesome from 'react-native-vector-icons/FontAwesome5Pro';

const SodoItem = props => {
    const navigation = useNavigation();
    let {name} = props.sodo
    return (
        <TouchableOpacity>
            <View style={{padding:20,  paddingLeft: 10}}>
            <Text style={{fontSize: 16, color:'black'}}>
                {name}
            </Text>
        </View>
        <View style={{height:2, backgroundColor:'#CFCFCF'}}/>
        </TouchableOpacity>
    )
}
export default SodoItem;