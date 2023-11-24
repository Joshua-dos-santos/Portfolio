// App.js
import React from 'react';
import Navbar from './components/Navbar'
import './App.css'
import Home from './components/Home';

function App() {
  return (
    <div className='bg-cyan-900 h-[calc(100vh)]'>
      <main>
        <div>
          <Home/>
        </div>
      </main>
    </div>
  );
}

export default App;
