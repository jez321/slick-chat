import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { firebaseReducerProps } from './redux/store';
import './styles/Global.styles.ts';
import { store } from './redux/store';
import App from './App';
import { GlobalStyle } from './styles/Global.styles';
import 'moment/locale/ja';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...firebaseReducerProps}>
        <GlobalStyle />
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
