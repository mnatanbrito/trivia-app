import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Container from './Container';
import colors from '../../colors';

const styles = StyleSheet.create({
  errorTitle: {
    fontSize: 32,
    color: colors.GRAY,
    fontWeight: '600',
    marginBottom: 30,
  },
  errorMessageWrapper: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  percentageWrapper: {
    width: '90%',
  },
  errorMessage: {
    fontSize: 42,
    color: colors.PRIMARY_GREEN,
    fontWeight: '800',
    textAlign: 'center',
  },
});

type ErrorBoundaryState = {
  hasError: boolean;
};

class ErrorBoundary extends Component<any, ErrorBoundaryState, any> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    /* update state so the next render will show the fallback UI. */
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {}

  render() {
    if (this.state.hasError) {
      return (
        <Container
          overrideStyle={{
            justifyContent: 'center',
          }}
        >
          <Text style={styles.errorTitle}>Ooops )= my bad!</Text>
          <View style={styles.errorMessageWrapper}>
            <View style={styles.percentageWrapper}>
              <Text style={styles.errorMessage}>
                I promise I'll keep it clean next time
              </Text>
            </View>
          </View>
        </Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
