import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FontAwesome from 'react-native-vector-icons/FontAwesome5Pro';
import Icon from 'react-native-vector-icons/FontAwesome5Pro'

import { AccountListScreen } from '../screens/main';

const Drawer = createDrawerNavigator();
const AppDrawer = () => {
  return (
    <Drawer.Navigator 
    screenOptions={{ headerShown: false,}}
    initialRouteName="AccountListScreen">
      <Drawer.Screen name="AccountListScreen" component={AccountListScreen}
                options={{
                    title: 'Trang chủ',
                    drawerIcon: ({ focused, size,}) => (
                        <Icon
                            name="home"
                            size={size}
                            color={focused ? '#7cc' : '#ccc'}
                        />
                    ),
                }}>
            </Drawer.Screen>

      

    </Drawer.Navigator>
  )
}
export default AppDrawer;

































































// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         onPress={() => navigation.navigate('Notifications')}
//         title="Go to notifications"
//       />
//     </View>
//   );
// }

// function NotificationsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button onPress={() => navigation.goBack()} title="Go back home" />
//     </View>
//   );
// }

// const Drawer = createDrawerNavigator();
// export default function AppDrawer() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="AccountListScreen">
//         <Drawer.Screen name="AccountListScreen" component={AccountListScreen} />
//         <Drawer.Screen name="Notifications" component={NotificationsScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }