import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {colors} from 'react-native-elements';
import {color} from 'react-native-reanimated';
import FontAwesome from 'react-native-vector-icons/FontAwesome5Pro';
import AccountItem from './AccountItem';

const Account_List = () => {
  const navigation = useNavigation();

  function AccountList(props) {
    {
      /* list of account = state */
    }
    const [accounts, setAccount] = useState([
      {
        name: 'Tài khoản tài sản',
      },
      {
        name: 'Tài khoản nợ phải trả',
      },
      {
        name: 'Tài khoản vốn chủ sở hữu',
      },
      {
        name: 'Tài khoản doanh thu',
      },
      {
        name: 'Tài khoản CP sản xuất, kinh doanh',
      },
      {
        name: 'Tài khoản thu nhập khác',
      },
      {
        name: 'Tài khoản chi phí khác',
      },
      {
        name: 'Tài khoản XĐ kết quả kinh doanh',
      },
    ]);
  }
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: '#2EAA8A'}}>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 10,
            marginVertical: 16,
          }}>
          {/* Taskbars */}
          <View style={{flex: 1}}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Option');
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

      <View style={{flex: 12}}>
        <View>
          {/* <ScrollView>
            {accounts.map(eachaccount => <AccountItem account = {eachaccount} key={eachaccount.name}/>)}
          </ScrollView> */}

          <FlatList 
            data={foods}
            renderItem={({item}) => <AccountItem account = {item} key = {item.name}/>}
            keyExtractor={eachaccount => eachaccount.name}
            />
        </View>
      </View>
    </View>
  );
};

export default Account_List;
const styles = StyleSheet.create({});
