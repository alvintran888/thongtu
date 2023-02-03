import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import {View,Text, TouchableOpacity, StyleSheet, Flatlist } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5Pro';
import {colors} from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';

const AccountDetailScreen = ({})=> {
const navigation = useNavigation();
const [service] = useState([
    {
        type: 'Tiền mặt',
        sohieu: 111
    },
    {
        type: 'Tiền gửi ngân hàng',
        sohieu: 112
    },
    {
        type: 'Tiền đang chuyển',
        sohieu: 113
    },
    {
        type: 'Chứng khoán kinh doanh',
        sohieu: 121
    },
    {
        type: 'Đầu tư nắm giữ đến ngày đáo hạn',
        sohieu: 128
    },
    {
        type: 'Phải thu khách hàng',
        sohieu: 131
    },
    {
        type: 'Thuế GTGT được khấu trừ',
        sohieu: 133
    },
    {
        type: 'Phải thu nội bộ',
        sohieu: 136
    },
    {
        type: 'Phải thu khác',
        sohieu: 138
    },
    {
        type: 'Đầu tư chứng khoán',
        sohieu: 123
    },
]);

return (
    <View style = {{ flex:1}}>
        {/* header */}
        <View style ={{height: "9%", backgroundColor: '#2EAA8A'}}>
            <View style ={{ flexDirection: 'row', padding : 10, marginTop:10  }}>

                {/* mui ten */}
                <View style={{ flex:1 }}>
                    <TouchableOpacity  
                    onPress={() => {
                        navigation.goBack('AccountListScreen');
                        }}>
                       <FontAwesome name={'arrow-left'} color={'white'} size={28}/>
                    </TouchableOpacity>
                </View>

                {/* ten */}
                <View style={{ flex: 6 , alignItems: 'center'}}>
                    <Text style={{color: 'white', fontSize: 23, }}>
                        Tài khoản tài sản
                    </Text>
                </View>

                {/* tim kiem */}
                <View style={{ flex: 1, alignItems:'center', justifyContent:'center' }}>
                    <TouchableOpacity
                        onPress={() => {
                            
                        }}>
                        <FontAwesome name={'search'} color="white" size={23} />
                    </TouchableOpacity>
                </View>

            </View>
        </View>

        
        
    </View>
    
)
}
export default AccountDetailScreen;