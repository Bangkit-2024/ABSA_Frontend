import React from 'react';
import './assets/scss/themes.scss';
import RouteIndex from 'Routes/Index';

import fakeBackend from "./helpers/AuthType/fakeBackend";

// Activating fake backend
fakeBackend();

function App() {
  return (
    <RouteIndex />
  );
}

export default App;
