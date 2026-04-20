import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { store } from './src/store';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import AddNoteScreen from './src/screens/AddNoteScreen';

/* 
 * EXPERIMENT 8: Multi-screen navigation (Home, Add Note, Info).
 * EXPERIMENT 10: Production-ready clean app structure.
 */

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // EXPERIMENT 7: Redux state provider.
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Home"
          screenOptions={{
            headerStyle: { backgroundColor: '#2196F3' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        >
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ title: 'Premium Notes' }} 
          />
          <Stack.Screen 
            name="AddNote" 
            component={AddNoteScreen} 
            options={{ title: 'Create Note' }} 
          />
          <Stack.Screen 
            name="Details" 
            component={DetailsScreen} 
            options={{ title: 'Experiment Logs' }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
