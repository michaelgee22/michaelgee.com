import React from 'react'
import { MemoryRouter as Router, Route } from 'react-router-dom'

import RouteViewer from './routes/RouteViewer'

import { useStyles } from './appStyles'

export const App = () => {
  const classes = useStyles()

  return (
    <div id="rs-app-container" className={classes.appContainer}>
      <h1 className={classes.appTitle}>React Sandbox</h1>

      <Router>
        <Route path="/" component={RouteViewer} />
      </Router>
    </div>
  )
}

export default App