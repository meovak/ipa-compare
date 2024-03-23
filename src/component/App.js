import './App.css';
import LangForm from './LangForm';
import IpaTable from './IpaTable';
import { useState } from 'react';
import Contact from './Contact';

function App() {
  const [languages, setLanguages] = useState([]);
  return (
    <div>
      <h1>International Phonetic Alphabet Compare Table</h1>
      <LangForm handleChange={setLanguages} />
      <IpaTable languages={languages} />
      <Contact />
    </div>
  );
}

export default App;
