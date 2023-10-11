import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CadastroTecnico from './App1';
import Jogadores from './App2';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={CadastroTecnico} />
        <Stack.Screen name="Jogadores" component={Jogadores} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;