import React, { useState, useEffect } from "react";
import {View, Text, TouchableOpacity, FlatList, ScrollView} from 'react-native' 
import { useNavigation, useRoute } from "@react-navigation/native";
import FontAwesome from 'react-native-vector-icons/FontAwesome5Pro';
import SodoItem from "./SodoItem";
import DiagramDetail from "./DiagramDetail"

import listsd from '../../data/map.json'

const SodoScreen = () => {
const navigation = useNavigation();
const route = useRoute();
const sododl = route.params;
const [sodo, setSodo] = useState([]);

useEffect(() => {
    setSodo(listsd.map);
  }, [])

return (
    <View styke={{flex:1}}>

        <View style={{height: 70, backgroundColor:'#006E6D', flexDirection: 'row'}}>
            {/* muiten */}
            <TouchableOpacity 
            style={{flex:1, justifyContent: 'center', alignItems: 'center'}}
            onPress={() => {
                navigation.goBack();
            }}>
                <FontAwesome name={'arrow-left'} color={'#FFF'} size={25}/>
            </TouchableOpacity>

            {/* title */}
            <View style={{flex:5, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 23, color: "white"}}>
                    Sơ đồ tổng hợp
                </Text>
            </View>

            {/* search */}
            <TouchableOpacity style={{flex:1,  justifyContent: 'center', alignItems: 'center'}}
            onPress={() => {
                navigation.navigate();
            }}
            >
                <FontAwesome name={"search"} color={'#FFF'} size={25}/>
            </TouchableOpacity>

        </View>

        <View  >
            <FlatList
            data={sodo}
            renderItem={({item, index}) => (
                <SodoItem sodo={item} key={index}/>
            )}
            keyExtractor={item => item.mapcode}
            />
        </View>
        
    </View>
)
}
export default SodoScreen;