import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Index from './pages/index';
import './App.scss';

function App() {
  return (
    <Router>
      <Route path="/" component={Index} />
    </Router>
  );
}

export default App;
