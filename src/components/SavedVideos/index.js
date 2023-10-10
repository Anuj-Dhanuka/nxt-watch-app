import {Component} from 'react'

import {FaFire} from 'react-icons/fa'

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
    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkTheme, savedVideoList} = value
          const isEmpty = savedVideoList.length === 0

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
