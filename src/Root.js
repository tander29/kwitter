import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import App from './App'
import Main from './Components/Main'
import Home from './Components/Home'

// <<<<<<< semantic-homepage
// =======

// >>>>>>> dev
const Root = ({ store }) => (

  <div>
    <Home />
  </div>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root