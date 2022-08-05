import React from 'react'
import NavBar from './Components/NavBar/NavBar';
import Projects from './Components/Projects/Projects';
import './App.css'
import MainScreen from './Components/MainScreen/MainScreen';
import SideBar from './Components/SideBar/SideBar';
import AboutMe from './Components/AboutMe/AboutMe';
import ContactMe from './Components/ContactMe/ContactMe';


function App() {
  return (
    <main className='App'>
      <NavBar />
      <SideBar />
      <MainScreen />
      <Projects />
      <AboutMe />
      <ContactMe />
    </main>
  );
}

export default App