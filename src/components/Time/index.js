import React from 'react'
import { useState, useEffect } from 'react'

class Time extends React.Component {
  state = {
    curTime: new Date().toLocaleString()
  }
  render() {
    return (
      <div className='Time'>
        <h3>Aujourd'hui</h3>
        <p>{this.state.curTime}</p>
      </div>
    )
  }
}

export default Time
