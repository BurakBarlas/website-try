import React from 'react';

import './App.css';
import Components from './components/components';


function App() {
  // const title = "Burak Barlas";

  return (

    <div className="App">
      {/* <div>
        <h1>{title}</h1>
      </div> */}
      
        
      <div className="main-container">   
        <header className="App-header">
          <h1>About Me</h1>
          <p>I am Burak barlas. I'm studying at Bahcesehir University in Istanbul. Yet, I'm beginning of my career. 
            I am interested in learning new computer language, trying to improve myself by making new projects.</p>
        </header>
        <div className="ClickIcons" >
            <a
              className="Github"
              href="https://github.com/BurakBarlas"
              target="_blank"
              rel="noopener noreferrer"
            >
            <i class="fab fa-github-square"></i>
            </a>
              
            <a
              className="linkedin"
              href="https://www.linkedin.com/in/burak-barlas-337324184/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-linkedin"></i>
            </a>

            <a
              className="Mail"
              href="mailto:fpburak@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >  
            <i class="fas fa-envelope-square"></i>
            </a>

            {/* <a
             className="CV"
             href="mail"
             target="_blank"
             rel="noopener noreferrer"
            >
            <i class="fas fa-file"></i>  
            </a> */}
          </div>
      </div>
      
      <div className="backGroundLayer">

      </div>
        
    </div>
  );
}

export default App;
