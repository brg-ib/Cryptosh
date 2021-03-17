// Import React and Component
import React, { Component } from 'react'
// Import CSS from App.css
//import './App.css'
// Import des données d'aujoudhui
import Now from './components/Now'
// Import de l'historique des données
//
import Time from './components/Time'
import Header from './components/Header'
//import Search from './components/Search'

class App extends Component {
  render() {
    return (
      <div className=''>
        <div className='topheader'>
          <Header />
        </div>
        <section className='results--section'>
          <div className='container'>
            <h1>Cours des crypto-monnaies</h1>
            <Time />
          </div>
          <div className='results--section__inner'>
            <Now />
          </div>
        </section>
      </div>
    )
  }
}

export default App
