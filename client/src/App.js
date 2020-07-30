import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Counter } from './components/counter/Counter';
import { Home } from './pages/home/Home';
import { AddBox } from './pages/box/AddBox';
import { ListDispatches } from './pages/dispatch/ListDispatches';

import './style/main.css';
//import './style/App.css';

function App() {
  return (
    <Router>
        <div className="App">
          <Header />
          <Counter />
          <div className='container'>
                <Switch>
                    <Route exact path='/' component={ Home } />
                    <Route exact path='/addbox' component = { AddBox } />
                    <Route exact path='/listboxes' component = { ListDispatches } />
                </Switch>
         </div>
        </div>
    </Router>
  );
}

export default App;
