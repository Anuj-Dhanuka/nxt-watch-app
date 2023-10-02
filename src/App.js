import './App.css'

import {Component} from 'react'

import {Route, Switch} from 'react-router-dom'

import ThemeContext from './context/ThemeContext'
import ProtectedRoute from './components/ProtectedRoute'

import Login from './components/Login'
import Home from './components/Home'

// Replace your code here
class App extends Component {
  state = {darkTheme: false}

  onClickTheme = () => {
    this.setState(prevState => ({darkTheme: !prevState.darkTheme}))
  }

  render() {
    const {darkTheme} = this.state
    return (
      <ThemeContext.Provider
        value={{darkTheme, onClickTheme: this.onClickTheme}}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
