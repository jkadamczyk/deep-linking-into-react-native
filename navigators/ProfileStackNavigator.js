import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ProfileScreen} from '../screens/ProfileScreen';
import {PostScreen} from '../screens/PostScreen';

const Stack = createStackNavigator();

export const ProfileStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Profile" component={ProfileScreen} />
    <Stack.Screen name="ProfilePost" component={PostScreen} />
  </Stack.Navigator>
);
