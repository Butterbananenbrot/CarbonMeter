import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <h1>Welcome to CarbonMeter</h1>
        <p>Make Luxembourg pay for its enourmous per head emissions!</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;