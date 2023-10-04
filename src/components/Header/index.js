import {IoMoonSharp} from 'react-icons/io5'

import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'

import {FaSun} from 'react-icons/fa'

import CustomButton from './styledComponent'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Header = props => (
  <ThemeContext.Consumer>
    {value => {
      const {darkTheme, onClickTheme} = value
      const toggleTheme = () => {
        onClickTheme()
      }

      const onLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const imageUrl = darkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
      return (
        <nav className="nav-container">
          <img src={imageUrl} alt="website logo" className="header-logo" />
          <div className="header-right-container">
            <button
              type="button"
              className="header-theme-button"
              onClick={toggleTheme}
              data-testid="theme"
            >
              {!darkTheme && <IoMoonSharp className="header-theme-icon" />}
              {darkTheme && (
                <FaSun className="header-theme-icon header-sun-icon" />
              )}
            </button>

            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
              className="header-profile-icon"
            />
            <CustomButton type="button" onClick={onLogout}>
              Logout
            </CustomButton>
          </div>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Header)
