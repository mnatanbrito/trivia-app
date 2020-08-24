import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  Welcome as WelcomeRoute,
  Game as GameRoute,
  Results as ResultsRoute,
} from '../../routeNames';
import Welcome from '../welcome/Welcome';
import Game from '../game/Game';
import Results from '../game/Results';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={WelcomeRoute}
          component={Welcome}

          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name={GameRoute}
          component={Game}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name={ResultsRoute}
          component={Results}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
