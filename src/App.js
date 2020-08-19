import React from 'react';

import './App.css';

function App() {
  const title = "Burak Barlas";

  return (

    <div className="App">
      
    <h1>{title}</h1>
    
      <header className="App-header">
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

          
        
      </header>
      
    </div>
  );
}

export default App;
