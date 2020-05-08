import React from 'react';
import { StatusBar } from 'react-native';

import Dashboard from './src/pages/Dashboard';

const App = () => {
  return (
    <>
      <StatusBar
      barStyle="light-content"
      translucent={true}
      backgroundColor="transparent"
      />
      <Dashboard />
    </>
  );
};

export default App;
