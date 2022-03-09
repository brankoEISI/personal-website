import React, { useState } from 'react';
import './App.css';
import background from './assets/neon-city.jpg';
import './Clouds.css';

function App() {
  const MAIN_MENU = 0;
  const PROJECTS = 1;
  const CONTACT = 2;
  const [optionSelected, setOptionSelected] = useState(MAIN_MENU);
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <div className="Clouds-Section">

        {/* Shadowed Cloud */}
        <div className="shadowed-cloud-container">
          <div className="shadowed-cloud-sprite"/>
        </div>

        {/* Regular Cloud */}
        <div className="cloud-container">
          <div className="cloud-sprite"/>
        </div>

        {/* Small Cloud */}
        <div className="small-cloud-container">
          <div className="small-cloud-sprite"/>
        </div>
      </div>
      <div className="Header">
        Branko Bajic
        <br/>
        Full Stack Software Developer
      </div>
      <div className="Body">

        {/* Main Menu */}
        {optionSelected === MAIN_MENU &&
          <React.Fragment>
            <div className="selectable-option" onMouseUp={() => setOptionSelected(PROJECTS)}>
              {"> Projects <"}
            </div>
            <br/>
            <div className="selectable-option" onMouseUp={() => setOptionSelected(CONTACT)}>
              {"> Contact <"}
            </div>
          </React.Fragment>
          }

        {/* Projects */}
        {optionSelected === PROJECTS &&
          <React.Fragment>
            <div className="selectable-option" onMouseUp={() => "location.href='newurl.html';"}>
              <a>{"> OSRS Castaway <" }</a>
            </div>
            <br/>
            <br/>
            <div className="selectable-option" onMouseUp={() => setOptionSelected(MAIN_MENU)}>
              {"> Main Menu <"}
            </div>
          </React.Fragment>
        }

        {/* Contact */}
        {optionSelected === CONTACT &&
          <React.Fragment>
            <div className="selectable-option">
              <a href="https://github.com/branko-bajic" target="_blank">
                {"> GitHub <"}
              </a>
            </div>
            <br/>
            <div className="selectable-option">
              <a href="https://www.linkedin.com/in/branko-bajic/" target="_blank">
                {"> LinkedIn <"}
              </a>
            </div>
            <br/>
            <br/>
            <div className="selectable-option" onMouseUp={() => setOptionSelected(MAIN_MENU)}>
              {"> Main Menu <"}
            </div>
          </React.Fragment>
        }
      </div>
      <div className="Footer" />
    </div>
  );
}

export default App;
