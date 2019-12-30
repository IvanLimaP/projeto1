import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Hero from './components/hero'
import CaixaData from './components/caixa';

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  background: black;
`;



function App() {
  return (
    <div className="App">
        <CaixaData/>
        <Hero/>
    </div>
  );
}

export default App;
