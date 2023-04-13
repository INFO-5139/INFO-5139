import { BrowserRouter } from 'react-router-dom';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import BackgroundProvider from './components/background-provider/background-provider.component';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BackgroundProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </BackgroundProvider>
    </Provider>
  </React.StrictMode>
);
