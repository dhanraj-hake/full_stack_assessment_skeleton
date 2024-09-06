import React from 'react';
import Home from './components/Home';
import 'react-loading-skeleton/dist/skeleton.css'

const App = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <Home />
    </div>
  );
};

export default App;
