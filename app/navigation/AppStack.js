import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dimensions, Vibration, Alert } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { showMessage } from 'react-native-flash-message';
import { useNavigation } from '@react-navigation/native';
import { AccountListScreen, AccountDetailScreen, LastDetailScreen, SodoScreen} from '../screens/main';


const Stack = createNativeStackNavigator();

const App_ = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    return (
        <Stack.Navigator
            initialRouteName="AccountListScreen"
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="AccountListScreen" component={AccountListScreen} />
            <Stack.Screen name="AccountDetailScreen" component={AccountDetailScreen} />
            <Stack.Screen name="LastDetailScreen" component={LastDetailScreen} />
            <Stack.Screen name="SodoScreen" component={SodoScreen} />
        </Stack.Navigator>
    );
};

export default App_;
