import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {colors} from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome5Pro';
import AccountItem from './AccountItem';

import DATA from '../../data/group.json';

  const AccountListScreen = () => {
  const navigation = useNavigation();
  const [accountNew, setAccountNew] = useState([]);

  useEffect(() => {
    setAccountNew(DATA.group);
  }, [])

  return (
    <View style={{flex: 1}}>
      {/* header */}
      <View style={{height: '9%', backgroundColor: '#006E6D'}}>
        <View
          style={styles.navtong}>
          {/* Taskbars */}
          <View style={{flex: 1}}>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SodoScreen');
              }}
              style={{marginLeft: 10, marginTop: 6}}>
              <FontAwesome name={'bars'} color="#FFF" size={25}/>
            </TouchableOpacity>
          </View>

          {/* Text */}
          <View style={{flex: 6, height: 45}}>
            <Text style={{color: colors.white, fontSize: 23, paddingStart: 10 }}>
              Hệ thống tài khoản kế toán
            </Text>
          </View>

          {/* Search */}
          <View style={{flex: 0.6, marginLeft: 5}}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Search');
              }}
              style={{marginTop: 6}}>
              <FontAwesome name={'search'} color="#FFF" size={22} />
            </TouchableOpacity>
          </View>
          
        </View>
      </View>

      <View style={{flex: 1}}>
        <FlatList
          data={accountNew}
          renderItem={({item, index}) => (
            <AccountItem accountNew={item} key={index} />
          )}
          keyExtractor={item => item.name}
        />
      </View>
    </View>
  );
};

export default AccountListScreen;
const styles = StyleSheet.create({
  navtong:
  {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    marginTop: 10,
    justifyContent: 'space-between'
  }
})
