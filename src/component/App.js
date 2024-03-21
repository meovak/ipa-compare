import './App.css';
import LangForm from './LangForm';
import IpaTable from './IpaTable';
import { useState } from 'react';

function App() {
  const [languages, setLanguages] = useState([]);
  return (
    <div>
      <h1>International Phonetic Alphabet Comparator</h1>
      <LangForm handleChange={setLanguages} />
      <IpaTable languages={languages} />
    </div>
  );
}

export default App;
