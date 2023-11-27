// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { createGlobalStyle } from 'styled-components';

import { Provider } from 'react-redux';
import store from './store/store';
import Dashboard from './components/Dashboard/Dashboard';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home'
import About from './pages/About/About'
const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'IBM Plex Sans Thai Looped', 'IBM Plex Sans Thai', 'Prompt', sans-serif;
   
  }
`;

const App = () => {
  return (
    <Provider store={store}>
      <>
        <CssBaseline />
        <GlobalStyle />
        <Router>
          <Navbar />
          <Routes>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/" element={<Dashboard />} />
            {/* Add more routes as needed */}
          </Routes>
        </Router>
      </>
    </Provider>
  );
};

export default App;
