import React from 'react';
import Main from './components/MainComponent/Main.js'
import Footer from './components/FooterComponent/Footer.js'
import * as Icon from 'react-bootstrap-icons';
import './App.css';


function App() {

  return (
    
    <div className="App">
      
      <header className="App-header">
        <div class="logo">
          <span>The charger</span>
          <Icon.BatteryCharging></Icon.BatteryCharging>
        </div>
        <div class="date">
          <span>{new Date().toDateString()}</span>
        </div>
      </header>

      <div className="App-body">
        <Main></Main>
      </div>
      
      <footer className='App-footer'>
        <Footer></Footer>
      </footer>
      
    </div>
  );
}

export default App;
