import React from 'react';
import Dashboard from './views/Dashboard/Dashboard';
import {Provider} from 'react-redux';
import configureStore from './components/redux/store';
import './App.css';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
     <Dashboard />
     </Provider>
  );
}

export default App;
