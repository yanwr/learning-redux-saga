import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ToDoWithDuck from './pages/ToDoWithDuck';
import ToDo from './pages/ToDo';
import './App.css';
import SearchPage from './pages/Search';

function App() {
  return (
    <Provider store={store}>
      <div style={{ display: "flex" }}>
        <ToDo />
        <ToDoWithDuck />
      </div>
      <div>
        <SearchPage />
      </div>
    </Provider>
  );
}

export default App;
