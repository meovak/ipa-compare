import './App.css';
import LangForm from './LangForm';
import IpaTable from './IpaTable';
import { useState } from 'react';
import Contact from './Contact';
import Page from './Page';

function App() {
  const [languages, setLanguages] = useState([]);
  return (
    <Page>
      <div className="container">
        <h1>International Phonetic Alphabet Compare Table</h1>
        <LangForm handleChange={setLanguages} />
        <IpaTable languages={languages} />
        <Contact />
      </div>
    </Page>
  );
}

export default App;
