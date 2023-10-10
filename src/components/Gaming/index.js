import {SiYoutubegaming} from 'react-icons/si'

import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import './index.css'

import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import LeftNav from '../LeftNav'
import GamingCard from '../GamingCard'

import {
  GamingContainer,
  GamingStickyContainer,
  GamingHeader,
  GamingIconContainer,
  GamingHeading,
  FailureHeading,
} from './styledComponent'

const apiStatusConstraints = {
  initial: 'Initial',
  loading: 'Loading',
  success: 'Success',
  failure: 'Failure',
}

class Gaming extends Component {
  state = {gamingVideoData: [], apiStatus: apiStatusConstraints.initial}

  componentDidMount() {
    this.getGamingApi()
  }

  onClickRetryBtn = () => {
    this.getGamingApi()
  }

  getGamingApi = async () => {
    this.setState({apiStatus: apiStatusConstraints.loading})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const {videos} = data
      const updatedData = videos.map(eachItem => ({
        id: eachItem.id,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))
      this.setState({
        gamingVideoData: updatedData,
        apiStatus: apiStatusConstraints.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstraints.failure})
    }
  }

  gamingLoadingView = () => (
    <div
      className="loader-container gaming-loader-container"
      data-testid="loader"
    >
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderGamingSuccessView = darkTheme => {
    const {gamingVideoData} = this.state

    return (
      <>
        <GamingHeader darkTheme={darkTheme}>
          <div className="gaming-header-inner-container">
            <GamingIconContainer darkTheme={darkTheme}>
              <SiYoutubegaming className="gaming-game-icon" />
            </GamingIconContainer>
            <GamingHeading darkTheme={darkTheme}>Gaming</GamingHeading>
          </div>
        </GamingHeader>
        <ul className="gaming-card-ul-container">
          {gamingVideoData.map(eachItem => (
            <GamingCard
              darkTheme={darkTheme}
              key={eachItem.id}
              gamingVideoData={eachItem}
            />
          ))}
        </ul>
      </>
    )
  }

  renderGamingFailureView = darkTheme => {
    const failureImgUrl = darkTheme
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

    return (
      <div className="gaming-failure-view-container">
        <img
          src={failureImgUrl}
          alt="failure view"
          className="gaming-failure-img"
        />
        <FailureHeading darkTheme={darkTheme}>
          Oops! Something Went Wrong
        </FailureHeading>
        <p className="gaming-failure-description">
          We are having some trouble to complete your request.
          <br />
          Please Try Again.
        </p>
        <button
          type="button"
          className="gaming-retry-btn"
          onClick={this.onClickRetryBtn}
        >
          Retry
        </button>
      </div>
    )
  }

  renderGamingFinalView = darkTheme => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstraints.loading:
        return this.gamingLoadingView()
      case apiStatusConstraints.success:
        return this.renderGamingSuccessView(darkTheme)
      case apiStatusConstraints.failure:
        return this.renderGamingFailureView(darkTheme)
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkTheme} = value

          return (
            <GamingContainer darkTheme={darkTheme} data-testid="gaming">
              <Header />
              <div className="gaming-bg-container">
                <GamingStickyContainer>
                  <LeftNav />
                </GamingStickyContainer>

                <div className="gaming-right-container">
                  {this.renderGamingFinalView(darkTheme)}
                </div>
              </div>
            </GamingContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Gaming
