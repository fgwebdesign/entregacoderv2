import './App.css';
import NavBar from '../src/components/NavBar/NavBar';
import ItemListContainer from '../src/components/ItemListContainer/ItemListContainer';
import React, { useState, useEffect } from 'react';
import Preloader from '../src/components/PreLoader/PreLoader';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Albums from '../src/components/Albums/Albums';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdMusicNote } from 'react-icons/md';
import EventList from '../src/components/EventList/EventList'; 
import OriginalMerch from '../src/components/OriginalMerch/OriginalMerch';
import AboutDuketo from '../src/components/AboutDuketo/AboutDuketo';


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      toast(
        <div style={{ color: 'black', fontFamily: 'Agdasima', fontSize: '20px' }}>
          <MdMusicNote /> HAS ESCUCHADO REMEMBER ME?
          <a href="https://open.spotify.com/track/7LknbZPcWVDMb6VLDI01MY?si=c323b037aaa74af6" target="_blank" rel="noopener noreferrer">ESCÚCHALA AQUÍ</a>
        </div>
      );
      
    }, 2000);
    return () => clearTimeout(timer); 
  }, []);

  function HomePage() {
    return (
      <div> {/* Agrega un contenedor adicional */}
        <ItemListContainer greeting />
        <EventList />
        <OriginalMerch />
        <AboutDuketo />
        <Albums />
      </div>
    );
  }

  return (
    <div className="App" style={{ overflowX: 'hidden' }}> {}
      <ToastContainer
        closeButton={false}
        style={{
          width: '300px',
          fontFamily: 'Agdasima',
          fontSize: '16px',
          textAlign: 'center',
        }}
        position="bottom-right"
      />
      {isLoading ? (
        <Preloader />
      ) : (
        <BrowserRouter>
          <NavBar></NavBar>
          <div> {/* Agrega un contenedor adicional */}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/originalMerch" element={<OriginalMerch />} />
              <Route path="/aboutDuketo" element={<AboutDuketo />} />
              <Route path="/albums" element={<Albums />} />
            </Routes>
          </div>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
