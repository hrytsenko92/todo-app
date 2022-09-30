import React from 'react';
import ReactDOM from 'react-dom/client';
import Input from './components/Input.jsx';
import { store } from './store/store';
import { Provider } from 'react-redux';
import View from './components/View.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Input />
    <View/>
    </Provider>
  </React.StrictMode>
);
