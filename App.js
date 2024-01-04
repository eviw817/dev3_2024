import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/homepage';
//import InformationScreen from './screens/information';
import FavouritesScreen from './screens/favourites';
import ShoppingbasketScreen from './screens/shoppingbasket';

const Stack = createStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Favourites" component={FavouritesScreen} />
          <Stack.Screen name="Shoppingbasket" component={ShoppingbasketScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;