import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screen/LoginScreen';
import AdminPanelScreen from '../screen/AdminPanelScreen';
import EmpleadoPanelScreen from '../screen/EmpleadoPanelScreen';
import ForgotPasswordScreen from '../screen/ForgotPasswordScreen';
import RegisterScreen from '../screen/RegisterScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="AdminPanel" component={AdminPanelScreen} />
        <Stack.Screen name="EmpleadoPanel" component={EmpleadoPanelScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}