import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from './App'
import Home from './components/Home'
import Navbar from './components/Navbar'
import NoMatch from './components/NoMatch'
import SharedMarkdown from './components/SharedMarkdown'
import './index.css'
import * as serviceWorker from './serviceWorker'

const Root = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
      <Route path={`${process.env.PUBLIC_URL}/editor`} component={App} />
      <Route path={`${process.env.PUBLIC_URL}/markdown-shared/:file`} component={SharedMarkdown} />
      <Route component={NoMatch} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
