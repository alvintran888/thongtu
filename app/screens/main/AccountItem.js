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

const AccountItem = (props) => {
  let {name, amount} = props.account;
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity>
        onPress = {() => {
          navigation.navigate('AccountDetailScreen')
        }}
      <View style={{flexDirection: 'row', flex: 1}}>
        <View style={{flex: 7, padding: 10}}>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              marginTop: 10
            }}>{name}</Text>
        </View>

        <View style={{flex: 3, justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>

          <View
            style={{
              height: 30,
              width: 50,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#44474C',
              borderRadius: 20
            }}>
            <Text style={{color: 'white',fontSize: 18}}>{amount}</Text>
          </View>

            {/* mui ten */}
          <View style={{ marginLeft: 20}}>
            <FontAwesome name={'chevron-right'} color="#A8A8A8" size={20}  />
          </View>
          
        </View>

      </View> 
      </TouchableOpacity>
      
      <View style={{height: 2, backgroundColor: '#CFCFCF'}}></View>
    </View>
  );
}
export default AccountItem;
