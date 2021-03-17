import React from 'react'
import logo from '../../logo-cryptosh.svg'
import PropTypes from 'prop-types'

const Header = props => {
  const { label, buttonFunc } = props
  return (
    <div className='topheader'>
      <header className='container'>
        <nav className='navbar'>
          <div className='navbar-brand'>
            <img src={logo} alt='Cryptosh' />
          </div>
          <div className='navbar-end'>
            <a className='navbar-item' href='/login' rel='noopener noreferrer'>
              Connexion
            </a>
          </div>
        </nav>
      </header>
    </div>
  )
}

Header.propTypes = {
  label: PropTypes.string,
  buttonFunc: PropTypes.func.isRequired
}

export default Header
