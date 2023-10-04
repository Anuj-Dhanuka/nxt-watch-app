import {AiOutlineSearch} from 'react-icons/ai'

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import Cookies from 'js-cookie'

import ThemeContext from '../../context/ThemeContext'

import {
  HomeContainer,
  HomeStickyContainer,
  SearchContainer,
  NoJobHeading,
} from './styledComponents'

import './index.css'

import Header from '../Header'
import LeftNav from '../LeftNav'
import Banner from '../Banner'
import HomeCard from '../HomeCard'

const apiConstraints = {
  initial: 'initial',
  success: 'success',
  loading: 'loading',
  failure: 'failure',
}

class Home extends Component {
  state = {
    videosListData: [],
    showBanner: true,
    searchedText: '',
    apiStatus: apiConstraints.initial,
  }

  componentDidMount() {
    this.getVideosApi()
  }

  onClosingBanner = () => {
    this.setState({showBanner: false})
  }

  onChangeSearchText = event => {
    this.setState({searchedText: event.target.value})
    console.log(event.target.value)
  }

  onSearch = () => {
    this.getVideosApi()
  }

  onClickRetryBtn = () => {
    this.getVideosApi()
  }

  getVideosApi = async () => {
    this.setState({apiStatus: apiConstraints.loading})
    const {searchedText} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchedText}`
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
        channel: {
          name: eachItem.channel.name,
          profileImageUrl: eachItem.channel.profile_image_url,
        },
        id: eachItem.id,
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))
      this.setState({
        videosListData: updatedData,
        apiStatus: apiConstraints.success,
      })
    } else {
      this.setState({apiStatus: apiConstraints.failure})
    }
  }

  homeLoadingView = () => (
    <div
      className="loader-container home-loader-container"
      data-testid="loader"
    >
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderHomeSuccessView = darkTheme => {
    const {videosListData} = this.state
    const isEmpty = videosListData.length === 0
    return (
      <>
        {isEmpty && (
          <div className="home-no-videos-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png "
              alt="no videos"
              className="home-no-videos-img"
            />
            <NoJobHeading darkTheme={darkTheme}>
              No Search results found
            </NoJobHeading>
            <p className="home-no-video-description">
              Try different words or remove search filter
            </p>
            <button
              type="button"
              className="home-retry-btn"
              onClick={this.onClickRetryBtn}
            >
              Retry
            </button>
          </div>
        )}
        {!isEmpty && (
          <ul className="home-card-ul-container">
            {videosListData.map(eachItem => (
              <HomeCard
                darkTheme={darkTheme}
                videosListData={eachItem}
                key={eachItem.id}
              />
            ))}
          </ul>
        )}
      </>
    )
  }

  renderFailureView = darkTheme => (
    <div className="home-no-videos-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="no videos"
        className="home-no-videos-img"
      />
      <NoJobHeading darkTheme={darkTheme}>
        Oops! Something Went Wrong
      </NoJobHeading>
      <p className="home-no-video-description">
        We are having some trouble to complete your request.
        <br />
        Please Try Again.
      </p>
      <button
        type="button"
        className="home-retry-btn"
        onClick={this.onClickRetryBtn}
      >
        Retry
      </button>
    </div>
  )

  renderHomeCard = darkTheme => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstraints.loading:
        return this.homeLoadingView(darkTheme)
      case apiConstraints.success:
        return this.renderHomeSuccessView(darkTheme)
      case apiConstraints.failure:
        return this.renderFailureView(darkTheme)

      default:
        return null
    }
  }

  render() {
    const {showBanner, searchedText} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkTheme} = value

          return (
            <HomeContainer darkTheme={darkTheme} data-testid="home">
              <Header />
              <div className="home-bg-container">
                <HomeStickyContainer>
                  <LeftNav />
                </HomeStickyContainer>

                <div className="banner-container-style">
                  {showBanner && (
                    <Banner onClosingBanner={this.onClosingBanner} />
                  )}
                  <div className="home-right-container">
                    <div className="home-search-input-main-container">
                      <input
                        type="search"
                        className="home-search-input"
                        placeholder="Search"
                        value={searchedText}
                        onChange={this.onChangeSearchText}
                      />
                      <button
                        type="button"
                        className="home-custom-search-btn"
                        onClick={this.onSearch}
                        data-testid="searchButton"
                      >
                        <SearchContainer darkTheme={darkTheme}>
                          <AiOutlineSearch />
                        </SearchContainer>
                      </button>
                    </div>
                    <div>{this.renderHomeCard(darkTheme)}</div>
                  </div>
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
