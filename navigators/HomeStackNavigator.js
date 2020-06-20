import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {HomeScreen} from '../screens/HomeScreen';
import {PostScreen} from '../screens/PostScreen';

const Stack = createStackNavigator();

export const HomeStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Post" component={PostScreen} />
  </Stack.Navigator>
);
