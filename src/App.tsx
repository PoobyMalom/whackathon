import React from 'react';
import './App.css';
import Home from './Home'; // Import the Home component
import DropdownMenu from "./Components/DropdownMenu";

function App() {
  return (
      <div className="App">
          <header className="App-header">
              <Home />
          </header>
      </div>
  );
}

export default App;