import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Vitrines from './src/screens/Vitrines';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <Vitrines />
    </SafeAreaView>
  );
};

export default App;
