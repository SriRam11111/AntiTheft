/* eslint-disable prettier/prettier */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homescreen from '../Homescreen';
import MenuScreen from '../screens/MenuScreen';
import RegistrationScreen from '../screens/Register';
import SecurityOptionsScreen from '../screens/Security';
import Location from '../screens/Location';

const Stack = createStackNavigator();
const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    component={Homescreen}
                    name="Homescreen"
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    component={MenuScreen}
                    name="MenuScreen"
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    component={RegistrationScreen}
                    name="RegistrationScreen"
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    component={SecurityOptionsScreen}
                    name="SecurityOptionsScreen"
                    options={{ headerShown: false }}
                />
                 <Stack.Screen
                    component={Location}
                    name="Location"
                    options={{ headerShown: false }}
                />
                {/*<Stack.Screen
                    component={RegistrationPage}
                    name="registrationPage"
                    options={{ headerShown: false }}
                /> */}

            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default AppNavigator;
