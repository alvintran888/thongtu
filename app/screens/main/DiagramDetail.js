import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import FontAwesome from 'react-native-vector-icons/FontAwesome5Pro';

import listsd from '../../data/map.json'

const DiagramDetail =  props => {
    const navigation = useNavigation();
    const route = useRoute();
    const data = route.params
    const [anh, setAnh] = useState([]);
    useEffect(() => {
        setAnh(listsd.item);
        console.log(data);
    })

    return(
        <View style={{flex:1, }}>
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
                    {data.tensodo}
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
            <View style={{flex: 1, padding: 10, alignItems: 'center'}}>
                <Image source={{uri: data.url}} style={{height: 600, width: '100%'}} resizeMode='contain' />
            </View>
        </View>
    )

} 
export default DiagramDetail;