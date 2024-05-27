import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main className="content">
        <div className="centered">
          <h1>Welcome to CarbonMeter</h1>
          <p>Make Luxembourg pay for its enormous per head emissions!</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
