import React, { Component } from 'react'
import './index.css'
import axios from 'axios'
import styled from 'styled-components'

class index extends Component {
  // Ajout des controleurs pour définir les valeurs
  constructor() {
    super()
    this.state = {
      btcprice: '',
      ethprice: ''
    }
  }
  // Fonction appelée et inséré dans le DOM
  componentWillMount() {
    axios
      .get(
        'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=EUR&API_KEY=044cb2841bce089bd3369aed3651bb5ead0c47199c21441d946bf64ebac3c38e'
      )
      .then(response => {
        // Récuperation des réponses Cryptocurrency.
        this.setState({ btcprice: response.data.BTC.EUR })
        this.setState({ ethprice: response.data.ETH.EUR })
      })
      // Catch les erreurs
      .catch(error => {
        console.log(error)
      })
  }
  // Rendu
  render() {
    return (
      <div className='today--section container'>
        <h2></h2>
        <div className='columns today--section__box'>
          <div className='column btc--section'>
            <h5>{this.state.btcprice} €</h5>
            <p>1 BTC</p>
          </div>
          <div className='column eth--section'>
            <h5>{this.state.ethprice} €</h5>
            <p>1 ETH</p>
          </div>
        </div>
      </div>
    )
  }
}

export default index
