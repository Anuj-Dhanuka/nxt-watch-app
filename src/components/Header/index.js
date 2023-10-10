import {IoMoonSharp} from 'react-icons/io5'

import Cookies from 'js-cookie'
import {withRouter, Link} from 'react-router-dom'
import Popup from 'reactjs-popup'

import {FaSun} from 'react-icons/fa'

import {
  CustomButton,
  PopupContainer,
  PopupPara,
  PopupBtn,
} from './styledComponent'

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
        <nav>
          <ul className="nav-container">
            <Link to="/">
              <img src={imageUrl} alt="website logo" className="header-logo" />
            </Link>

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

              <Popup
                modal
                trigger={<CustomButton type="button">Logout</CustomButton>}
                className="popup-content"
              >
                {close => (
                  <PopupContainer darkTheme={darkTheme}>
                    <PopupPara darkTheme={darkTheme}>
                      Are you sure, you want to logout?
                    </PopupPara>
                    <div className="header-popup-btn-container">
                      <PopupBtn cancel type="button" onClick={close}>
                        Cancel
                      </PopupBtn>
                      <PopupBtn type="button" onClick={onLogout}>
                        Confirm
                      </PopupBtn>
                    </div>
                  </PopupContainer>
                )}
              </Popup>
            </div>
          </ul>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Header)
