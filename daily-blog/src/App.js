import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import Layout from './hoc/Layout/Layout';

import './App.css';

function App() {
  // const [UIState, setUIState] = useState({
  //   title: ""
  // });

  // useEffect(() => {
  //   axios.get("/api/hello")
  //     .then(response => {
  //       setUIState({ title: response.data })
  //     });
  // }, []);

  const titleStyle = {
    display: "inline-block",
    width: "300px",
    padding: "10px",
    margin: "0px",
    borderBottom: "2px solid #bfbfbf",
    borderRadius: "8px"
  }

  const mainStyle = {
    padding: "5px",
    margin: "15px",
    textAlign: "text-center"
  }

  const iconStyle = {
    width: "200px",
    height: "200px"
  }
  
  return (
    <BrowserRouter>
      <div className="App">
        <Layout />
        {/* <div style={{textAlign: "center"}}>
          <h1 style={titleStyle}>Great Daily Blog</h1>
        </div>
        <div style={mainStyle}>
          <h2>{UIState.title}</h2>
          <h3>Coming soon ...</h3>
          <FontAwesomeIcon icon={faCoffee} style={iconStyle} />
        </div> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
