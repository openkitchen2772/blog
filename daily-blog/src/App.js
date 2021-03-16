import React, { useState, useEffect } from 'react';

import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import { Route, Redirect, Switch } from 'react-router-dom';
import Blog from './containers/Blog/Blog';
import FullPost from './containers/Blog/Post/FullPost/FullPost';
import About from './containers/About/About';
import Projects from './containers/Projects/Projects';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/" exact component={Blog} />
            <Route path="/post/:id" component={FullPost} />
            <Route path="/projects" component={Projects} />
            <Route path="/about" component={About} />
            <Redirect to="/" />
          </Switch>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
