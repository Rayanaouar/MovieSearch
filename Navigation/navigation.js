import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Search from '../Components/Search';
import FilmDetail from '../Components/filmDetails'

const Stack = createStackNavigator()
function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name='Rechercher' component={Search} />
        <Stack.Screen name='Detail' component={FilmDetail} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default MainStackNavigator