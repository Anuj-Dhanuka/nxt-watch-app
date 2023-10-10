import {formatDistanceToNow} from 'date-fns'

import {Link} from 'react-router-dom'

import './index.css'

import Heading from './styledComponent'

const TrendingCard = props => {
  const {darkTheme, videoListData} = props
  const {
    id,
    title,
    viewCount,
    publishedAt,
    thumbnailUrl,
    channel,
  } = videoListData
  const {name} = channel
  const publishedAgo = formatDistanceToNow(new Date(publishedAt), {
    addSuffix: true,
  })
  return (
    <Link to={`/videos/${id}`} className="trending-card-link-style">
      <li className="trending-card-bg-container">
        <img
          src={thumbnailUrl}
          alt="video thumbnail"
          className="trending-card-image"
        />
        <div>
          <Heading darkTheme={darkTheme}>{title}</Heading>
          <p className="trending-card-description">{name}</p>
          <div className="trending-card-views-years-container">
            <p className="trending-card-description">{viewCount} views</p>
            <ul className="trending-card-years-ul-container">
              <li className="trending-card-description">
                <p className="trending-card-description">{publishedAgo}</p>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default TrendingCard
