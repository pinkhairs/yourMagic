import { Text } from 'react-native';
import { useFonts } from 'expo-font';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from './app/views/Onboarding';
import Login from './app/views/Login';
import CreateAccount from './app/views/CreateAccount';
import Birthday from './app/views/Birthday';
import Password from './app/views/Password';
import Dashboard from './app/views/Dashboard';
import Settings from './app/views/Settings';
import theme from './assets/theme.json';
import { ThemeContext } from './app/contexts/ThemeContext';

const darkScreenOptions = {
  headerStyle: {
    backgroundColor: theme.surfaces.dark,
    borderBottomWidth: 0,
    shadowOpacity: 0,
  },
  headerTintColor: theme.surfaces.light,
  headerBackTitleVisible: false,
  headerBackButtonStyle: {
    color: theme.surfaces.light,
  },
  headerTitleContainerStyle: {
    display: 'none',
  },
};

const lightScreenOptions = {
  headerStyle: {
    backgroundColor: theme.surfaces.light,
    borderBottomWidth: 0,
    shadowOpacity: 0,
  },
  headerTintColor: theme.surfaces.dark,
  headerBackButtonStyle: {
    display: 'none',
  },
};

const Stack = createStackNavigator();

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState({
    background: theme.surfaces.dark,
  });

  const customFonts = {
    'Dela Gothic One': require('./assets/fonts/DelaGothicOne-Regular.ttf'),
    'Space Grotesk': require('./assets/fonts/SpaceGrotesk-Regular.ttf'),
  };

  const [isLoaded] = useFonts(customFonts);

  if (!isLoaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <ThemeContext.Provider value={{ backgroundColor, setBackgroundColor }}>
      <NavigationContainer
        theme={{
          colors: {
            background: theme.surfaces.dark,
          },
        }}
      >
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={darkScreenOptions}
        >
          <Stack.Screen
            name="Welcome"
            component={Onboarding}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
          />
          <Stack.Screen
            name="Create Account"
            component={CreateAccount}
          />
          <Stack.Screen
            options={lightScreenOptions}
            name="Dashboard"
            component={Settings}
          />
          <Stack.Screen name="Set Birthday" component={Birthday} />
          <Stack.Screen name="Reset Password" component={Password} />
          <Stack.Screen name="Hello" component={Dashboard} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeContext.Provider>
  );
}
