import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity, StyleSheet, Flatlist} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5Pro';
import {colors} from 'react-native-elements';
import {useRoute} from '@react-navigation/native';
import DATA from '../../data/tkkt-133.json';
import AccountDetailItem from './AccountDetailItem';

const AccountDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const data = route.params;

  const [service, setService] = useState([]);
  useEffect(() => {
    setService(DATA.item);
  });

  return (
    <View style={{flex: 1}}>
      {/* header */}
      <View style={{height: '10%', backgroundColor: '#2EAA8A'}}>
        <View style={{flexDirection: 'row', padding: 10, marginTop: 10}}>
          {/* mui ten */}
          <View style={{flex: 1}}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack('AccountListScreen');
              }}>
              <FontAwesome name={'arrow-left'} color={'white'} size={28} />
            </TouchableOpacity>
          </View>

          {/* ten */}
          <View style={{flex: 6, alignItems: 'center'}}>
            <Text style={{color: 'white', fontSize: 23}}>
              {data.dataChiTiet}
            </Text>
          </View>

          {/* tim kiem */}
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity onPress={() => {}}>
              <FontAwesome name={'search'} color="white" size={23} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
        <TouchableOpacity style={{flex:1, backgroundColor:'#F89'}}>
              <View style={{flexDirection:'row', justifyContent:'space-between', }}>
              {/* bentrai */}
              <View style={{height:'100%', width:'40%', backgroundColor:'#FFF', padding: 20}}>

              </View>

            {/* benphai */}
              <View style={{height:60, width:'30%', backgroundColor:'#FFF'}}>

              </View>

              </View>
        </TouchableOpacity>
    </View>
  );
};
export default AccountDetailScreen;
