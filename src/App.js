import React, { Component } from 'react';
import './App.css';
import CreateItem from './CreateItem/createItem';
import ItemContainer from './ItemContainer/itemContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ItemContainer />
      </div>
    );
  }
}

export default App;
