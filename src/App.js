import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Route from './components/Route'; 
import GlobalStyle from './styles/GlobalStyle';
import './App.css';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Route />
      </BrowserRouter>
    </>
  );
}

export default App;