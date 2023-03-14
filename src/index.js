import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import store from "./store/store"
import {fetchProducts} from "./Features/productsSlice"
import {fetchCategories} from "./Features/categoriesSlice"

const root = ReactDOM.createRoot(document.getElementById('root'));

store.dispatch(fetchProducts())
store.dispatch(fetchCategories())


root.render(
  <Provider store={store}>
    <App />
  </Provider>
  
);

