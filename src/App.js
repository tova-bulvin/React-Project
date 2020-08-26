import React from 'react';
import Main from './components/MainComponent/Main.js'
import Footer from './components/FooterComponent/Footer.js'
import './App.css';


function App() {

  return (
    
    <div className="App">
      
      <header className="App-header">
        <h1>charge-project</h1>
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
