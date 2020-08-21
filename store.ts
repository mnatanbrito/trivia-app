import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import reducers, { RootState } from './reducers';

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// if (isDevelopment() && module.hot) {
//   module.hot.accept('./reducers', () => {
//     const newRootReducer = require('./reducers').default;
//     store.replaceReducer(newRootReducer);
//   });
// }

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export default store;
