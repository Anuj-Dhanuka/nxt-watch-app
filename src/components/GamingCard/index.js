import './index.css'

import {Link} from 'react-router-dom'

import {Heading} from './styledComponents'

const GamingCard = props => {
  const {darkTheme, gamingVideoData} = props
  const {id, thumbnailUrl, title, viewCount} = gamingVideoData

  return (
    <Link to={`/videos/${id}`} className="gaming-card-link-style">
      <li className="gaming-card-li-container">
        <img
          src={thumbnailUrl}
          alt="video thumbnail"
          className="gaming-card-image"
        />
        <Heading darkTheme={darkTheme}>{title}</Heading>
        <p className="gaming-card-description">
          {viewCount} Watching WorldWide
        </p>
      </li>
    </Link>
  )
}

export default GamingCard
