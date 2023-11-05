import React from 'react';
import './App.css';
import Home from './Home'; // Import the Home component
import { useEffect, useState } from 'react';
import Axios from 'axios';

interface Shoe {
    id: number;
    name: string;
}

function App() {

    const [list, setList] = useState<Shoe[]>([]);

    useEffect(() => {
        // Here, we get the data by requesting data from this link
        // to our Node.js server
        Axios.get<Shoe[]>('http://localhost:4000/api/European')
            .then((res) => setList(res.data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    // Creating a list of shoes
    const val = list.map((item) => (
        <li key={item.id}>{item.name}</li>
    ));
  return (
      <div className="App">
          <header className="App-header">
              <Home />
              <ol>{val}</ol>
          </header>
      </div>
  );
}

export default App;