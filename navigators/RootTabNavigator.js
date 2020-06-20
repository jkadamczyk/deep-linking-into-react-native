import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {ActivityStackNavigator} from './ActivityStackNavigator';
import {HomeStackNavigator} from './HomeStackNavigator';
import {ProfileStackNavigator} from './ProfileStackNavigator';

const Tab = createBottomTabNavigator();

export const RootTabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeStackNavigator} />
    <Tab.Screen name="Activity" component={ActivityStackNavigator} />
    <Tab.Screen name="Profile" component={ProfileStackNavigator} />
  </Tab.Navigator>
);
