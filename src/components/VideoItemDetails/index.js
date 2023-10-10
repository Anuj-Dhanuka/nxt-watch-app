import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'
import {formatDistanceToNow} from 'date-fns'

import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import ReactPlayer from 'react-player'

import './index.css'

import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import LeftNav from '../LeftNav'

import {
  VideoItemsDetailsContainer,
  VideoItemsDetailsStickyContainer,
  Heading,
  FailureHeading,
  IconBtn,
} from './styledComponent'

console.log(Cookies)
console.log(formatDistanceToNow)

const apiStatusConstraint = {
  initial: 'Initial',
  loading: 'Loading',
  success: 'Success',
  failure: 'Failure',
}

class VideoItemDetails extends Component {
  state = {
    videoItemsData: {},
    channelData: [],
    apiStatus: apiStatusConstraint.initial,
    isLiked: false,
    isDisliked: false,
    isSaved: false,
  }

  componentDidMount() {
    this.getVideoItemApi()
  }

  onClickLike = () => {
    this.setState(
      prevState => ({
        isLiked: !prevState.isLiked,
      }),
      this.onLike,
    )
  }

  onClickDislike = () => {
    this.setState(
      prevState => ({
        isDisliked: !prevState.isDisliked,
      }),
      this.onDislike,
    )
  }

  onClickSave = () => {
    this.setState(
      prevState => ({
        isSaved: !prevState.isSaved,
      }),
      this.onSave,
    )
  }

  onLike = () => {
    const {isLiked} = this.state
    if (isLiked === true) {
      this.setState({isDisliked: false})
    }
  }

  onDislike = () => {
    const {isDisliked} = this.state
    if (isDisliked === true) {
      this.setState({isLiked: false})
    }
  }

  onSave = () => {
    console.log('Hi')

    return (
      <ThemeContext.Consumer>
        {value => {
          const {onClickSaveItem} = value
          const {isSaved, videoItemsData} = this.state

          onClickSaveItem(isSaved, videoItemsData)
        }}
      </ThemeContext.Consumer>
    )
  }

  OnClickRetry = () => {
    this.getVideoItemApi()
  }

  getVideoItemApi = async () => {
    this.setState({apiStatus: apiStatusConstraint.loading})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/videos/${id}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const fetchedData = data.video_details
      const updatedData = {
        id: fetchedData.id,
        description: fetchedData.description,
        publishedAt: fetchedData.published_at,
        thumbnailUrl: fetchedData.thumbnail_url,
        title: fetchedData.title,
        videoUrl: fetchedData.video_url,
        viewCount: fetchedData.view_count,
        channel: {
          name: fetchedData.channel.name,
          profileImageUrl: fetchedData.channel.profile_image_url,
          subscriberCount: fetchedData.channel.subscriber_count,
        },
      }
      const channelData = {
        name: fetchedData.channel.name,
        profileImageUrl: fetchedData.channel.profile_image_url,
        subscriberCount: fetchedData.channel.subscriber_count,
      }
      this.setState({
        videoItemsData: updatedData,
        channelData,
        apiStatus: apiStatusConstraint.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstraint.failure})
    }
  }

  renderVideoItemLoadingView = () => (
    <div className="video-item-details-loading-container">
      <div className="loader-container" data-testid="loader">
        <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
      </div>
    </div>
  )

  renderVideoItemSuccessView = darkTheme => {
    const {
      videoItemsData,
      channelData,
      isLiked,
      isDisliked,
      isSaved,
    } = this.state
    const {
      title,
      description,
      publishedAt,
      videoUrl,
      viewCount,
    } = videoItemsData
    const {name, profileImageUrl, subscriberCount} = channelData
    const styledLikeClass = isLiked ? 'active-fill-class' : ''
    const styledDislikeClass = isDisliked ? 'active-fill-class' : ''
    return (
      <>
        <ReactPlayer url={videoUrl} width="100%" controls />
        <Heading darkTheme={darkTheme}>{title}</Heading>
        <div className="video-details-you-tube-description-container">
          <div className="video-items-views-times-container">
            <p className="video-item-views-text">{viewCount} views</p>
            <ul className="video-item-ul-container">
              <li className="video-item-views-text">
                <p>{publishedAt}</p>
              </li>
            </ul>
          </div>
          <div className="video-items-all-icons-container">
            <IconBtn type="button" onClick={this.onClickLike}>
              <div className="like-icon-container">
                <BiLike
                  className={`${styledLikeClass} video-items-like-icon`}
                />
                <p className={`${styledLikeClass} video-item-like-text`}>
                  Like
                </p>
              </div>
            </IconBtn>
            <IconBtn type="button" onClick={this.onClickDislike}>
              <div className="like-icon-container">
                <BiDislike
                  className={`${styledDislikeClass} video-items-like-icon`}
                />
                <p className={`${styledDislikeClass} video-item-like-text`}>
                  Dislike
                </p>
              </div>
            </IconBtn>
            {!isSaved && (
              <IconBtn type="button" onClick={this.onClickSave}>
                <div className="like-icon-container">
                  <MdPlaylistAdd className="video-items-like-icon" />
                  <p className="video-item-like-text">Save</p>
                </div>
              </IconBtn>
            )}
            {isSaved && (
              <IconBtn type="button" onClick={this.onClickSave}>
                <div className="like-icon-container">
                  <MdPlaylistAdd className="video-items-like-icon active-fill-class" />
                  <p className="video-item-like-text active-fill-class">
                    Saved
                  </p>
                </div>
              </IconBtn>
            )}
          </div>
        </div>
        <hr />
        <div className="video-item-details-description-container">
          <img
            src={profileImageUrl}
            alt="channel logo"
            className="video-item-profile-image"
          />
          <div>
            <Heading darkTheme={darkTheme} marginRemoval>
              {name}
            </Heading>
            <p className="video-item-views-text">
              {subscriberCount} subscribers
            </p>
            <p className="video-item-views-text video-items-adding-margin">
              {description}
            </p>
          </div>
        </div>
      </>
    )
  }

  renderVideoItemFailureView = darkTheme => (
    <div className="video-item-details-failure-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
        className="video-item-failure-image"
      />
      <FailureHeading darkTheme={darkTheme}>
        Oops! Something Went Wrong
      </FailureHeading>
      <p className="video-items-failure-description">
        We are having some trouble to complete your request. <br />
        Please try again.
      </p>
      <button
        className="video-item-details-retry-btn"
        type="button"
        onClick={this.OnClickRetry()}
      >
        Retry
      </button>
    </div>
  )

  renderFinalView = darkTheme => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstraint.loading:
        return this.renderVideoItemLoadingView()
      case apiStatusConstraint.success:
        return this.renderVideoItemSuccessView(darkTheme)
      case apiStatusConstraint.failure:
        return this.renderVideoItemFailureView(darkTheme)
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
            <VideoItemsDetailsContainer
              darkTheme={darkTheme}
              data-testid="videoItemDetails"
            >
              <Header />
              <div className="video-item-details-bg-container">
                <VideoItemsDetailsStickyContainer>
                  <LeftNav />
                </VideoItemsDetailsStickyContainer>

                <div className="video-item-details-right-container">
                  {this.renderFinalView(darkTheme)}
                </div>
              </div>
            </VideoItemsDetailsContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoItemDetails
