import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScroolView,
  TouchableOpacity,
  FlatList,
} from 'react-native';


function AccountItem(props) {
    let {name} = props.account
  return (
    <View
      style={{
        height: 65,
      }}>
      <Text
        style={{
          color: 'black',
          fontSize: 20,
          padding: 17,
        }}>
        {name}
      </Text>
      <View style={{height: 2, backgroundColor: '#CFCFCF'}}></View>
    </View>
  );
}
export default AccountItem;
