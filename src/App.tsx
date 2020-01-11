import React from 'react';
import logo from './logo.svg';
import Header from './Components/Header'
import './App.css';
import Dashboard from './Components/Dashboard';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="">
        <Header/>
      </header>
        <Dashboard/>
    </div>
  );
}

export default App;
