import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App'
import Main from './Components/Main'
import Home from './Components/Home'
const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path="/Home" component={Home} />
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root