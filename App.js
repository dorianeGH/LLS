import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BookPage from './screens/BookPage'
import BookDetails from './screens/BookDetails'
import BookContextProvider from "./contexts/bookContext";

const Stack = createNativeStackNavigator();

const App = () => (
    <BookContextProvider>
    <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="BookPage" component={BookPage}/>
                <Stack.Screen name="BookDetails" component={BookDetails}/>
            </Stack.Navigator>
    </NavigationContainer>
    </BookContextProvider>

);

export default App;