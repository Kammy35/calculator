import React from 'react';
//import logo from './logo.svg';//
import './App.css';

class App extends React.Component {
    render() {
      return (
        <div className="app">
          <div className="calc-wrapper">
            <div className="row">
              <input></input>
            </div>
            <div className="row">
              <clearButton>Clear</clearButton>
              <button>/</button>
            </div>
            <div className="row">
              <button>7</button>
              <button>8</button>
              <button>9</button>
              <button>-</button>
              </div>
            <div className="row">
              <button>4</button>
              <button>5</button>
              <button>6</button>
              <button>+</button>
            </div>
            <div className="row">
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>=</button>
            </div>

          </div>

        </div>

    );
  }
  
}




export default App;
