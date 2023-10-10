
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';



function App() {

  return (
    <>
    <Navbar></Navbar>
    <main>
    <ItemListContainer/>
    </main>

    </>
  )
}

export default App
