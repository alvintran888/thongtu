import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5Pro';
import {colors} from 'react-native-elements';
import {useRoute} from '@react-navigation/native';
import DL133 from '../../data/tkkt-133.json';
import AccountDetailItem from './AccountDetailItem';

const AccountDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const data = route.params;

  const [service, setService] = useState([]);

  useEffect(() => {
    setService(DL133.item);
  });

  return (
    <View style={{flex: 1}}>
      {/* header */}
      <View style={{height:83, backgroundColor: '#006E6D', flexDirection: 'row',}}>
        
          {/* mui ten */}
          <View style={{flex: 1}}>
            <TouchableOpacity style={{flex:1, 
                padding:10 ,justifyContent: 'center', 
                alignItems: 'center'}}
              onPress={() => {
                navigation.goBack('AccountListScreen');
              }}>
              <FontAwesome name={'arrow-left'} color={'white'} size={28} />
            </TouchableOpacity>
          </View>

          {/* ten */}
          <View style={{flex:5, padding:10, justifyContent: 'center', 
                alignItems: 'center' }}>
            <Text style={{color: 'white', fontSize: 23}}>
              {data.dataChiTiet}
            </Text>
          </View>

          {/* tim kiem */}
          <View
            style={{flex:1, padding:10, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate();
              }}>
              <FontAwesome name={'search'} color="white" size={23} />
            </TouchableOpacity>
          </View>
        {/* </View> */}
      </View>

      <View style={{flex: 1}}>
        <FlatList
          data={service}
          renderItem={({item}) => (
            <AccountDetailItem service={item} key={item.name} />
          )}
          keyExtractor={item => item.name}
        />
      </View>
    </View>
  );
};
export default AccountDetailScreen;
