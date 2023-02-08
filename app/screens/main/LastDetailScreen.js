import React, {useState, useEffect} from 'react'
import {View, Text, FlatList, TouchableOpacity,ScrollView} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome5Pro';
import { useNavigation, useRoute } from '@react-navigation/native'
// import DL133 from '../../data/tkkt-133.json'

const LastDetailScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const data = route.params
    return(
        <ScrollView stle={{flex:1 }} >
            <View style={{height:75, backgroundColor: '#2EAA8A', flexDirection: 'row',}} >

                <TouchableOpacity style={{
                flex:1, 
                padding:10 ,justifyContent: 'center', 
                alignItems: 'center' }} 
                    onPress = {() => {
                        navigation.navigate('AccountDetailScreen');
                    }}>
                    <FontAwesome name={'arrow-left'} size={28} color={'white'} />
                </TouchableOpacity>

                <View style={{flex:5, padding:10, justifyContent: 'center', 
                alignItems: 'center' }}>
                    <Text style={{color:'white', fontSize:25}}>
                        Tài khoản tài sản
                    </Text>
                </View>

                <TouchableOpacity style={{flex:1, padding:10, justifyContent: 'center', 
                alignItems: 'center' }}>
                    <FontAwesome name={"search"} size={28} color={"white"}/>
                </TouchableOpacity>

            </View>

            <View style={{height: 55, paddingLeft:15}}>

                    <View >
                        <Text style={{fontSize: 20, fontWeight: '500'}}>
                            - Số hiệu : 
                        </Text>
                    </View>
                    
                    <View >
                        <Text style={{fontSize: 20, fontWeight: '500'}}>
                            - Tên : 
                        </Text>
                    </View>

            </View>

            <View style={{height: 50, backgroundColor:'#2EAA8A', justifyContent:'center'}}>
                <Text style={{color:'white', fontSize:20, alignSelf:'center'}}>
                    Nguyên tắc kế toán
                </Text>
            </View>

            <View style={{flex:1, paddingHorizontal:10}}>
                    <Text style={{fontSize:18, fontWeight: '400', color:'#5C5C5C'}}>
                        {ntdl.item}
                    </Text>
            </View>

        </ScrollView>
    )


}
export default LastDetailScreen;


