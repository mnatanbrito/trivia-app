import { StatusBar } from 'expo-status-bar';
import React from 'react';

import TriviaApp from './TriviaApp';

export default function App() {
  return (
    <>
      <TriviaApp />
      <StatusBar style="auto" />
    </>
  );
}
