// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Pizza from './Components/Pizza';

function App() {

  return (
    <>
      <div>
        Welcone to See
      </div>
      <h1>My Projects Portfolio</h1>
      <p className="read-the-docs">
        Select a Project to view
        <Pizza />
      </p>
    </>
  );
}

export default App
