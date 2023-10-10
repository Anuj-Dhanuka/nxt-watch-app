import {FaFire} from 'react-icons/fa'

import {Component} from 'react'

import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import './index.css'

import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import LeftNav from '../LeftNav'
import TrendingCard from '../TrendingCard'

import {
  TrendingContainer,
  TrendingStickyContainer,
  TrendingHeader,
  TrendingIconContainer,
  TrendingHeading,
  FailureHeading,
} from './styledComponent'

const apiStatusConstraint = {
  initial: 'Initial',
  loading: 'Loading',
  success: 'Success',
  failure: 'Failure',
}

class Trending extends Component {
  state = {videoListData: [], apiStatus: apiStatusConstraint.initial}

  componentDidMount() {
    this.getTrendingVideosApi()
  }

  onClickRetryBtn = () => {
    this.getTrendingVideosApi()
  }

  getTrendingVideosApi = async () => {
    this.setState({apiStatus: apiStatusConstraint.loading})
    const url = 'https://apis.ccbp.in/videos/trending'
    const jwtToken = Cookies.get('jwt_token')
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
        channel: eachItem.channel,
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))
      this.setState({
        videoListData: updatedData,
        apiStatus: apiStatusConstraint.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstraint.failure})
    }
  }

  renderTrendingSuccessView = darkTheme => {
    const {videoListData} = this.state
    return (
      <>
        <TrendingHeader darkTheme={darkTheme}>
          <div className="trending-header-inner-container">
            <TrendingIconContainer darkTheme={darkTheme}>
              <FaFire className="trending-fire-icon" />
            </TrendingIconContainer>
            <TrendingHeading darkTheme={darkTheme}>Trending</TrendingHeading>
          </div>
        </TrendingHeader>
        <ul className="trending-route-ul-container">
          {videoListData.map(eachItem => (
            <TrendingCard
              darkTheme={darkTheme}
              key={eachItem.id}
              videoListData={eachItem}
            />
          ))}
        </ul>
      </>
    )
  }

  renderTrendingFailureView = darkTheme => {
    const isDark = darkTheme
    console.log(isDark)
    const failureImgUrl = isDark
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

    return (
      <div className="trending-failure-view-container">
        <img
          src={failureImgUrl}
          alt="failure view"
          className="trending-failure-img"
        />
        <FailureHeading darkTheme={darkTheme}>
          Oops! Something Went Wrong
        </FailureHeading>
        <p className="trending-failure-description">
          We are having some trouble to complete your request.
          <br />
          Please Try Again.
        </p>
        <button
          type="button"
          className="trending-retry-btn"
          onClick={this.onClickRetryBtn}
        >
          Retry
        </button>
      </div>
    )
  }

  trendingLoadingView = () => (
    <div
      className="loader-container trending-loader-container"
      data-testid="loader"
    >
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderTrendingFinalView = darkTheme => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstraint.loading:
        return this.trendingLoadingView()
      case apiStatusConstraint.success:
        return this.renderTrendingSuccessView(darkTheme)
      case apiStatusConstraint.failure:
        return this.renderTrendingFailureView(darkTheme)

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
            <TrendingContainer darkTheme={darkTheme} data-testid="trending">
              <Header />
              <div className="trending-bg-container">
                <TrendingStickyContainer>
                  <LeftNav />
                </TrendingStickyContainer>
                <div className="trending-right-container">
                  {this.renderTrendingFinalView(darkTheme)}
                </div>
              </div>
            </TrendingContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
