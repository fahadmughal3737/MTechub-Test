
import React, { useEffect, useState,createContext, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import {createStackNavigator} from 'react-navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Cart } from './src/screens/cart';
const Stack = createNativeStackNavigator();
import { store } from './src/state/store';
import Provider from 'redux'
import { Operation } from './src/screens/operation';
export const UserContext = createContext({});

const App = () => {
  const [quantity, setQuantity] = useState(0)
  return (
    <UserContext.Provider  value = {{quantity, setQuantity}} >
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name='Cart' component={Cart} options={{ headerShown: false }} />
          <Stack.Screen name='Operation' component={Operation} options={{ headerShown: false }} />


        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>

  )
}
export default App;