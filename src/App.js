import './App.css';
import Pages from './pages/Index';
import data from './DB';
import { useState, useEffect } from 'react';


function App() {
  useEffect(() => {
    document.title = `ohi's super market`;
  });
  return (
    <div>
      <Pages  />
    </div>
  );
}
export default App;