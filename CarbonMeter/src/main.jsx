import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// this serves as the entry point for the app: index.html -> main.jsx -> App.jsx
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


// Set the lang attribute of the html element
// currently done directly in the App.jsx

/*
const getUserLanguage = () => {
  return navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.language;
};

const userLanguage = getUserLanguage();
document.documentElement.lang = userLanguage; 

*/

