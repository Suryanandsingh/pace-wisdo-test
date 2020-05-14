import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../Components/Home';
import EmployeeProfile from '../Components/EmployeeProfile';
import { LIGHT_COLOR } from '../Utils/constant';
import AddEmployee from '../Components/AddEmployee';

const Stack = createStackNavigator();

export default App=({})=>{
    return (
        <NavigationContainer  >
            <Stack.Navigator initialRouteName="Home" >
                <Stack.Screen name="Home" component={Home}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen name="EmployeeProfile" component={EmployeeProfile}
                    options={{
                        headerTitle: null,
                        ...Platform.select({
                            android:{
                                headerTintColor: LIGHT_COLOR,
                            }
                        }),
                        headerStyle:{
                            shadowOpacity: 0, 
                            shadowRadius: 0,
                            shadowOffset: {height:0},
                            elevation: 0
                        }
                    }}
                />
                 <Stack.Screen name="AddEmployee" component={AddEmployee}
                    options={{
                        headerTitle: null,
                        ...Platform.select({
                            android:{
                                headerTintColor: LIGHT_COLOR,
                            }
                        }),
                        headerStyle:{
                            shadowOpacity: 0, 
                            shadowRadius: 0,
                            shadowOffset: {height:0},
                            elevation: 0
                        }
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}