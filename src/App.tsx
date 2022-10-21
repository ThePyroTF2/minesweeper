import React from 'react';
import './css/App.css';
import Field from './Components/field';

function App() {
  return (
    <div className="app">
      <Field mines={100}/>
    </div>
  );
}

export default App;
