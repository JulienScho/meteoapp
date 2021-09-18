import { useState } from 'react';
import './App.css';
import Form from '../Form/Form';
import CurrentMeteo from '../CurrentMeteo/CurrentMeteo';
import PrevisionList from '../Prevision/PrevisionList';

const userCity = () => {
  if (localStorage.city) { return localStorage.city; }
  else return 'Paris';
}
const userZipCode = () => {
  if (localStorage.zipCode) { return localStorage.zipCode; }
  else return '75000';
}


function App() {
  //Création du state global
  const [city, setCity] = useState(userCity);
  const [zipCode, setZipCode] = useState(userZipCode);
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
      <PrevisionList zipCode={zipCode} />
    </div>
  );
}

export default App;
