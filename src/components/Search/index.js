import React, { useState, useRef, useEffect } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

import './index.css'

const Search = styled.input.attrs(props => ({
  type: 'text',
  size: props.size || '1em'
}))`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  /* here we use the dynamically computed prop */
  margin: ${props => props.size};
  padding: ${props => props.size};
`

render(){
  <div>
    <Input placeholder='A small text input' />
  </div>
}

export default Search