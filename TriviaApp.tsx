import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import defaultStyles from './defaultStyles';
import Routes from './components/shared/Routes';
import store from './store';
import ErrorBoundary from './components/shared/ErrorBoundary';

export default function TriviaApp() {
  return (
    <ErrorBoundary>
      <View style={defaultStyles.container}>
      <SafeAreaView style={defaultStyles.container}>
        <Provider store={store}>
          <Routes />
        </Provider>
      </SafeAreaView>
    </View>
    </ErrorBoundary>
    
  );
}
