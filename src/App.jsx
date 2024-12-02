import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Home from './pages/Home';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import AvailableDogs from './pages/AvailableDogs';
import Volunteers from './pages/Volunteers';
import Forms from './pages/Forms';
import Donate from './pages/Donate';
import DogBios from './pages/DogBios';

import './components/Nav.css'
import './components/Footer.css'

function App() {
  // State to store the fetched dogs
  const [dogs, setDogs] = useState([]);
  const [adoptApp, setAdoptApp] = useState([]);
  const [totalFee, setTotalFee] = useState(0);
  const [heartPosition, setHeartPosition] = useState(null)

  function addToAdoptApp(dog) {
    setAdoptApp([...adoptApp, dog])
  }

  function removeToAdoptApp(dog) {
    setAdoptApp((oldAdoptApp) =>
      oldAdoptApp.filter((adoptItem) => adoptItem.id !== dog.id)
    );
  }

  // Automatically calculate the total fee when `adoptApp` is updated
  useEffect(() => {
    let initialFee = 0;
    adoptApp.forEach((doggie) => {
      initialFee += parseFloat(doggie.attributes.adoptionFeeString);
    });
    setTotalFee(initialFee);
  }, [adoptApp]);

  function numberOfApp() {
    let counter = 0;
    adoptApp.forEach(() => {
      counter += 1;
    });
    return counter;
  }

  const setHeartPositionHandle = (position) => {
    setHeartPosition(position);
  }

  return (
    <div>
      <Nav numberOfApp={numberOfApp()} />
      <Routes>
        <Route path="/" element={<Home dogs={dogs} setDogs={setDogs} />} />
        <Route path="/AvailableDogs/" exact element={<AvailableDogs dogs={dogs} setDogs={setDogs} />} />
        <Route path="/AvailableDogs/:id" element={<DogBios dogs={dogs} addToAdoptApp={addToAdoptApp} adoptApp={adoptApp} setHeartPosition={setHeartPositionHandle} />} />
        <Route path="/Volunteers" element={<Volunteers />} />
        <Route path="/Forms" element={<Forms adoptApp={adoptApp} removeToAdoptApp={removeToAdoptApp} totalFee={totalFee} />} />
        <Route path="/Donate" element={<Donate />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;