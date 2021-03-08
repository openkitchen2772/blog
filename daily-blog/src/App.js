import React, { useState, useEffect } from 'react';

import './App.css';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import { Route, Redirect, Switch } from 'react-router-dom';
import Blog from './containers/Blog/Blog';

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
        <Layout>
          <Switch>
            <Route path="/" exact component={Blog} />
            <Route path="/projects" render={() => <div>Projects Page</div>} />
            <Route path="/about" render={() => <div>About Page</div>} />
            <Redirect to="/" />
          </Switch>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
