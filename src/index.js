import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store/store'
import PreviewProvider from './Context/previewProvider';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <PreviewProvider>
        <App />
      </PreviewProvider>
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
);
