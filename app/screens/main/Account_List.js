import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
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

const Account_List = () => {
  const navigation = useNavigation();
  const [account, setFood] = useState([
    {
      name: 'Tài khoản tài sản',
      amount: 33
    },
    {
      name: 'Tài khoản nợ phải trả',
      amount: 15
    },
    {
      name: 'Tài khoản vốn chủ sở hữu',
      amount: 11
    },
    {
      name: 'Tài khoản doanh thu',
      amount: 3
    },
    {
      name: 'Tài khoản CP sản xuất, kinh doanh',
      amount: 10
    },
    {
      name: 'Tài khoản thu nhập khác',
      amount: 1
    },
    {
      name: 'Tài khoản chi phí khác',
      amount: 2
    },
    {
      name: 'Tài khoản XĐ kết quả kinh doanh',
      amount: 100
    },
    {
      name: 'a',
      amount: 100
    },
    {
      name: 'b',
      amount: 100
    },
    {
      name: 'c',
      amount: 100
    },
    {
      name: 'Tài khoản XĐB kết quả kinh doanh',
      amount: 100
    },
  ]);

  return (
      <View style={{flex: 1}}>
        {/* header */}
        <View style={{height: 60, backgroundColor: '#2EAA8A'}}>
          <View
            style={{
              flexDirection: 'row',
              // marginHorizontal: 10,
              // marginVertical: 16,
              justifyContent: 'center',
              margin: 10,
              marginTop: 15
            }}>
            {/* Taskbars */}
            <View style={{flex: 1}}>
              <TouchableOpacity
                onPress={() => {
                  navigation.openDrawer();
                }}
                style={{marginLeft: 15}}>
                <FontAwesome name={'bars'} color="#FFF" size={20} />
              </TouchableOpacity>
            </View>
            {/*  */}

            <View style={{flex: 6, marginLeft: 30}}>
              <Text style={{color: colors.white, fontSize: 20}}>
                Hệ thống tài khoản kế toán
              </Text>
            </View>

            {/* Search */}
            <View style={{flex: 0.6, marginLeft: 5}}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Search');
                }}>
                <FontAwesome name={'search'} color="#FFF" size={22} />
              </TouchableOpacity>
            </View>
            {/*  */}
          </View>
        </View>

        <View style={{flex: 1}}>
          {/* <View> */}
            <FlatList
              data={account}
              renderItem={({item}) => (
                <AccountItem account={item} key={item.name} />
              )}
              keyExtractor={item => item.name}
            />
          {/* </View> */}
          
        </View>
      </View>
  );
};

export default Account_List;
const styles = StyleSheet.create({});
