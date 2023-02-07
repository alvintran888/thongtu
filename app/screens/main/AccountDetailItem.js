import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScroolView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5Pro';

const AccountDetailItem = props => {
  const navigation = useNavigation();
  let {name, code, nguyentac, childcount} = props.service;
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('LastDetailScreen', {
            tendl: name,
            codedl: code,
            ntdl: nguyentac,
            mount: childcount
          });
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 80,
            backgroundColor: '#FFF',
          }}>
          {/* bentrai */}
          <View
            style={{
              flex: 1,
              height: '100%',
              width: '40%',
              // backgroundColor: '#FFF',
              padding: 10,
            }}>
            <View style={{flex: 1, marginLeft: 10, padding: 5}}>
              <Text style={{color: '#44474C', fontSize: 18}}>{name}</Text>
            </View>

            <View
              style={{
                marginTop: 5,
                flex: 1,
                marginLeft: 10,
                // backgroundColor: 'black',
              }}>
              <Text style={{color: '#44474C', fontSize: 18, marginLeft: 5}}>
                Số hiệu: {code}
              </Text>
            </View>
          </View>

          {/* benphai */}
          <View style={{height: 60, width: '30%'}}>
            <View
              style={{
                flex: 3,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  height: 30,
                  width: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#44474C',
                  borderRadius: 20,
                }}>
                <Text style={{color: 'white', fontSize: 18}}>{childcount}</Text>
              </View>

              {/* mui ten */}
              <View style={{marginLeft: 20}}>
                <FontAwesome name={'chevron-right'} color="#A8A8A8" size={20} />
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <View style={{height: 2, backgroundColor: '#CFCFCF'}}></View>
    </View>
  );
};
export default AccountDetailItem;
