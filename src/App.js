import React from 'react';
import { Route } from 'react-router-dom';
import Characters from './components/characters/Characters';
import NavBar from './components/common/NavBar';
import Episodes from './components/episodes/Episodes';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Route path="/characters" component={Characters} />
      <Route exact path="/episodes" component={Episodes} />
    </React.Fragment>
  );
}

export default App;
