import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import 'react-native-gesture-handler';
import {RootTabNavigator} from './navigators/RootTabNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <RootTabNavigator />
    </NavigationContainer>
  );
};

export default App;
