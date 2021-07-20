import React from 'react';
import './App.css';
import MenuItems from './utils/menu.json'// we can as well call data from an API
import Menu from './components/Menu';


function App() {
  return (
    <div className="App">
     <Menu menuItems={MenuItems} />
     
    </div>
  );
}

export default App;
