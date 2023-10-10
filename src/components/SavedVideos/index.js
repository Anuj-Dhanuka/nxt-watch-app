import {Component} from 'react'

import {FaFire} from 'react-icons/fa'
import Cookies from 'js-cookie'

import './index.css'

import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import LeftNav from '../LeftNav'
import TrendingCard from '../TrendingCard'

import {
  SavedVideosContainer,
  SavedVideosStickyContainer,
  SavedVideosHeader,
  SavedVideosIconContainer,
  SavedVideosHeading,
  NoSavedHeading,
} from './styledComponent'

class SavedVideos extends Component {
  state = {videoListData: []}

  componentDidMount() {
    this.getTrendingVideosApi()
  }

  getTrendingVideosApi = async () => {
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
      })
    }
  }

  renderNonEmptyView = (darkTheme, savedVideoList) => (
    <>
      <SavedVideosHeader darkTheme={darkTheme}>
        <div className="trending-header-inner-container">
          <SavedVideosIconContainer darkTheme={darkTheme}>
            <FaFire className="trending-fire-icon" />
          </SavedVideosIconContainer>
          <SavedVideosHeading darkTheme={darkTheme}>
            Saved Videos
          </SavedVideosHeading>
        </div>
      </SavedVideosHeader>
      <ul className="saved-videos-ul-container">
        {savedVideoList.map(eachItem => (
          <TrendingCard
            darkTheme={darkTheme}
            key={eachItem.id}
            videoListData={eachItem}
          />
        ))}
      </ul>
    </>
  )

  renderEmptyView = darkTheme => (
    <div className="no-saved-videos-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
        alt="no saved videos"
        className="no-saved-videos-img"
      />
      <NoSavedHeading darkTheme={darkTheme}>
        No saved videos found
      </NoSavedHeading>
      <p className="no-saved-videos-description">
        You can save your videos while watching them
      </p>
    </div>
  )

  render() {
    const {videoListData} = this.state
    const isEmpty = videoListData.length === 0
    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkTheme, savedVideoList} = value

          return (
            <SavedVideosContainer
              darkTheme={darkTheme}
              data-testid="savedVideos"
            >
              <Header />
              <div className="saved-videos-bg-container">
                <SavedVideosStickyContainer>
                  <LeftNav />
                </SavedVideosStickyContainer>

                <div className="saved-videos-right-container">
                  {isEmpty && this.renderEmptyView(darkTheme)}
                  {!isEmpty &&
                    this.renderNonEmptyView(darkTheme, savedVideoList)}
                </div>
              </div>
            </SavedVideosContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default SavedVideos
