import {useState, useEffect} from 'react'
import axios from 'axios'
import Slider from './components/slider';
import Current from './components/current';
import Forecast from './components/forecast';

function App() {
  return (
    <div>
      <Current/>
      <Slider/>
      <Forecast/>
    </div>
  );
}

export default App;
