import {Component} from 'react'

import './index.css'

import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import LeftNav from '../LeftNav'

import {
  NotFoundContainer,
  NotFoundStickyContainer,
  Heading,
} from './styledComponent'

class NotFound extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkTheme} = value
          const imageUrl = darkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

          return (
            <NotFoundContainer darkTheme={darkTheme} data-testid="home">
              <Header />
              <div className="not-found-bg-container">
                <NotFoundStickyContainer>
                  <LeftNav />
                </NotFoundStickyContainer>

                <div className="not-found-right-container">
                  <img
                    src={imageUrl}
                    alt="not found"
                    className="not-found-img"
                  />
                  <Heading darkTheme={darkTheme}>Page Not Found</Heading>
                  <p className="not-found-description">
                    We are sorry, the page you requested could not be found.
                  </p>
                </div>
              </div>
            </NotFoundContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default NotFound
