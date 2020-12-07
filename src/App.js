import React from 'react';

import './App.css';
import Components from './components/components';
import BackGroundImage from './Assets/BackGroundImage.jpeg';
import FunctionClick from './components/FunctionClick';

import ClassClick from './components/ClassClick';

function App() {
  // const title = "Burak Barlas";

  return (

    <div className="App">
        
      <div className="main-container"> 

        <header className="App-header">
          
          <div className="page">
            <h1>About Me</h1>
          </div>

          <div className="menu">
            <h2>about me</h2>
            <h2>projects</h2>
          </div>
          
          {/* <FunctionClick/>
          <ClassClick /> */}
          
        </header>

        <div className="container">
          
          <p>I am Burak barlas. I'm studying at Bahcesehir University in Istanbul. Yet, I'm beginning of my career. 
            I am interested in learning new computer language, trying to improve myself by making new projects.</p>

          <img className="background-image" src={BackGroundImage} alt="Bad Connection Huh!" />

        </div>

        <div className="ClickIcons" >

            <a
              className="Github"
              href="https://github.com/BurakBarlas"
              target="_blank"
              rel="noopener noreferrer"
            >
            <i className="fab fa-github-square"></i>
            </a>
              
            <a
              className="linkedin"
              href="https://www.linkedin.com/in/burak-barlas-337324184/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>

            <a
              className="Mail"
              href="mailto:fpburak@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >  
            <i className="fas fa-envelope-square"></i>
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
      
      <div className="backGroundLayer"></div>
        
    </div>
  );
}

export default App;
