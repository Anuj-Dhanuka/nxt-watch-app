import {formatDistanceToNow} from 'date-fns'

import {Link} from 'react-router-dom'

import './index.css'

import {Description} from './styledComponent'

const HomeCard = props => {
  const {darkTheme, videosListData} = props
  const {
    id,
    thumbnailUrl,
    title,
    viewCount,
    publishedAt,
    channel,
  } = videosListData
  const {name, profileImageUrl} = channel

  const publishedAgo = formatDistanceToNow(new Date(publishedAt), {
    addSuffix: true,
  })

  return (
    <Link className="home-card-link-item-style" to={`/videos/${id}`}>
      <li className="home-card-container">
        <img
          src={thumbnailUrl}
          alt="video thumbnail"
          className="home-card-main-image"
        />
        <div className="home-card-bottom-container">
          <img
            src={profileImageUrl}
            alt="channel logo"
            className="home-card-icon"
          />
          <div>
            <Description darkTheme={darkTheme}>{title}</Description>
            <p className="home-card-name">{name}</p>
            <div className="home-card-views-years-container">
              <p className="home-card-name">{viewCount} views</p>
              <ul>
                <li className="home-card-years">
                  <p>{publishedAgo}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default HomeCard
