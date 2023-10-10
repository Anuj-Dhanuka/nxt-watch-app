import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import ThemeContext from '../../context/ThemeContext'

import {
  LoginContainer,
  LoginCard,
  Label,
  Input,
  CheckboxLabel,
  LoginBtn,
} from './styledComponent'

import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    isErr: false,
    errMsg: '',
    isShown: false,
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onTogglePassword = () => {
    this.setState(prevState => ({
      isShown: !prevState.isShown,
    }))
  }

  onSubmitSuccess = jwtToken => {
    this.setState({isErr: false})
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errMsg => {
    this.setState({isErr: true, errMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {username, password, isShown, isErr, errMsg} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkTheme} = value
          const jwtToken = Cookies.get('jwt_token')
          console.log(jwtToken)
          if (jwtToken !== undefined) {
            return <Redirect to="/" />
          }
          const imageUrl = darkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <LoginContainer darkTheme={darkTheme}>
              <LoginCard darkTheme={darkTheme}>
                <img src={imageUrl} alt="website logo" className="login-logo" />
                <form className="form-container" onSubmit={this.submitForm}>
                  <Label htmlFor="username" darkTheme={darkTheme}>
                    USERNAME
                  </Label>
                  <Input
                    darkTheme={darkTheme}
                    id="username"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={this.onChangeUserName}
                  />

                  <Label htmlFor="password" darkTheme={darkTheme}>
                    PASSWORD
                  </Label>
                  <Input
                    darkTheme={darkTheme}
                    id="password"
                    type={isShown ? 'text' : 'password'}
                    className="margin-remover"
                    placeholder="Password"
                    value={password}
                    onChange={this.onChangePassword}
                  />
                  <div className="login-form-checkbox-container">
                    <input
                      type="checkbox"
                      id="showPass"
                      className="login-form-check-box"
                      onChange={this.onTogglePassword}
                    />
                    <CheckboxLabel htmlFor="showPass" darkTheme={darkTheme}>
                      Show Password
                    </CheckboxLabel>
                  </div>
                  <LoginBtn type="submit">Login</LoginBtn>
                  {isErr && <p className="login-err-msg">*{errMsg}</p>}
                </form>
              </LoginCard>
            </LoginContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
