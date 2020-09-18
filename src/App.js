import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './pages/Home/Home'
import Header from './components/Header/Header'
import About from './pages/About/About'
import Footer from './components/Footer/Footer'

import GlobalStyle from './globalStyles'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" component={About} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
