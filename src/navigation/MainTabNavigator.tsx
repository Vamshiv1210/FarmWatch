/**
 * MainTabNavigator - FarmWatch Pro
 * Handles the 5-module bottom navigation flow
 */

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { theme } from '../constants/theme';

// Screens
import { DashboardScreen } from '../screens/dashboard/DashboardScreen';

// Placeholders for other modules
const Placeholder = ({ name }: { name: string }) => <></>;

const Tab = createBottomTabNavigator();

export const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.colors.surface,
          borderTopColor: theme.colors.card,
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarActiveTintColor: theme.colors.secondary,
        tabBarInactiveTintColor: theme.colors.textMuted,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = 'home';

          if (route.name === 'Dashboard') iconName = focused ? 'home' : 'home-outline';
          else if (route.name === 'Cameras') iconName = focused ? 'videocam' : 'videocam-outline';
          else if (route.name === 'Caretakers') iconName = focused ? 'people' : 'people-outline';
          else if (route.name === 'Reports') iconName = focused ? 'bar-chart' : 'bar-chart-outline';
          else if (route.name === 'Settings') iconName = focused ? 'settings' : 'settings-outline';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Cameras" component={() => <Placeholder name="Cameras" />} />
      <Tab.Screen name="Caretakers" component={() => <Placeholder name="Caretakers" />} />
      <Tab.Screen name="Reports" component={() => <Placeholder name="Reports" />} />
      <Tab.Screen name="Settings" component={() => <Placeholder name="Settings" />} />
    </Tab.Navigator>
  );
};
