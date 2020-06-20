import {StackActions} from '@react-navigation/native';

import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ActivityScreen} from '../screens/ActivityScreen';

const Stack = createStackNavigator();

export const ActivityStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Activity" component={ActivityScreen} />
  </Stack.Navigator>
);
