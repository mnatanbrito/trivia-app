import Constants from 'expo-constants';

export function isDevelopment() {
  return process.env.NODE_ENV === 'development';
}

export function getTriviaApiUrl() {
  return Constants.manifest.extra.triviaApiUrl;
}
