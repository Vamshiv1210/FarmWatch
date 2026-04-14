/**
 * FarmWatch Pro - Root Navigator
 * Handles Auth vs Main App switching
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { theme } from '../constants/theme';
import { LoginScreen } from '../screens/auth/LoginScreen';
import { SignupScreen } from '../screens/auth/SignupScreen';
import { OTPScreen } from '../screens/auth/OTPScreen';
import { MainTabNavigator } from './MainTabNavigator';
import { DashboardScreen } from '../screens/dashboard/DashboardScreen';

// Placeholder Screens (to be implemented)
const Placeholder = ({ name }: { name: string }) => <></>;

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  const isAuthenticated = false; // TODO: Connect to useAuthStore

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: theme.colors.background },
        }}
      >
        {isAuthenticated ? (
          <Stack.Screen name="Main" component={MainTabNavigator} />
        ) : (
          <Stack.Screen name="Auth" component={AuthNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="OTP" component={OTPScreen} />
    </Stack.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
    </Stack.Navigator>
  );
};
