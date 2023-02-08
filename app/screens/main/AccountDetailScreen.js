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
            <TouchableOpacity
              onPress={() => {
                navigation.navigate();
              }}>
              <FontAwesome name={'search'} color="white" size={23} />
            </TouchableOpacity>
          </View>
        </View>
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
