import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScroolView,
  TouchableOpacity,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5Pro';

const MAIN_HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: '#2EAA8A'}}>
        <View style={{flexDirection: 'row', marginHorizontal: 10, marginVertical: 16}}>

          <View style={{flex: 1}}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Option');
              }}
              style={{marginLeft: 15}}>
              <FontAwesome name={'bars'} color="#FFF" size={20} />
            </TouchableOpacity>
          </View>   

          <View style={{flex: 6, marginLeft: 30}}>
            <Text style={{color: '#FFFF', fontSize: 20}}>
              Hệ thống tài khoản kế toán
            </Text>
          </View>

          <View style={{flex: 0.6, marginLeft: 5}}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Search');
              }}
              >
              <FontAwesome name={'search'} color="#FFF" size={22} />
            </TouchableOpacity>
          </View>

        </View>
      </View>
      <View style={{flex: 12}}></View>
    </View>
  );
};

export default MAIN_HomeScreen;
const styles = StyleSheet.create({});
