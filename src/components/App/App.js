import { useState } from 'react';
import Form from '../Form/Form';
import CurrentMeteo from '../CurrentMeteo/CurrentMeteo';
import './App.css';

function App() {
  //Création du state global
  const [city, setCity] = useState('Paris');
  const [zipCode, setZipCode] = useState('75000');
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="App">
      <Form
        city={city}
        setCity={setCity}
        zipCode={zipCode}
        setZipCode={setZipCode}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <CurrentMeteo city={city} zipCode={zipCode} />
    </div>
  );
}

export default App;
