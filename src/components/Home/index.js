import {Component} from 'react'

import ThemeContext from '../../context/ThemeContext'

import {HomeContainer} from './styledComponents'

import './index.css'

import Header from '../Header'

class Home extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkTheme} = value

          return (
            <HomeContainer darkTheme={darkTheme} data-testid="home">
              <Header />
              <div>
                <div>
                  <ul>
                    <li>Home</li>
                  </ul>
                </div>
              </div>
            </HomeContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
