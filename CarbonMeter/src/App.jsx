import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CO2Table from './CO2Table';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main className="content">
        <div className="centered">
          <h1>Welcome to CarbonMeter</h1>
          <p>Make Luxembourg pay for its enormous per head emissions</p>
          <CO2Table /> {/* insert the data table here */}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
