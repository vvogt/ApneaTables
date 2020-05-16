import React from 'react';
import Main from './src/pages/Main';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
        />
        <Stack.Screen
          name="Timer"
          component={Timer}
        />
      </Stack.Navigator>
    </NavigationContainer>
    <Main/>
  )
}


