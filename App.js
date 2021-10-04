import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home'
import BookDetails from './screens/BookDetails'
import BookContextProvider from "./contexts/bookContext";

const Stack = createNativeStackNavigator();

const App = () => (
    <BookContextProvider>
    <NavigationContainer>
            <Stack.Navigator
            /*screenOptions={{headerShown: false
            }}
            initialRouteName={'Home'}>*/>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="BookDetails" component={BookDetails}/>
            </Stack.Navigator>
    </NavigationContainer>
    </BookContextProvider>

);

export default App;