import React from 'react'
import NavBar from './Components/NavBar/NavBar';
import Projects from './Components/Projects/Projects';
import './App.css'
import MainScreen from './Components/MainScreen/MainScreen';
import SideBar from './Components/SideBar/SideBar';

function App() {
  return (
    <main className='App'>
      <NavBar />
      <SideBar />
      <MainScreen />
      <Projects />
    </main>
  );
}

export default App