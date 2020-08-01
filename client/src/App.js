import React from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Header } from './components/header/Header'
import { Home } from './views/home/Home'
import AddBox from './views/box/AddBox'
import ListDispatches from './views/dispatch/ListDispatches'

import './style/main.css'
// import './style/App.css';

function App () {
  return (
    <Router>
      <div className='App'>
        <Header />

        <div className='container'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/addbox' component={() => <AddBox />} />
            <Route exact path='/listboxes' component={() => <ListDispatches />} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
