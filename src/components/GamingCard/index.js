import './index.css'

import {Heading} from './styledComponents'

const GamingCard = props => {
  const {darkTheme, gamingVideoData} = props
  const {thumbnailUrl, title, viewCount} = gamingVideoData

  return (
    <li className="gaming-card-li-container">
      <img
        src={thumbnailUrl}
        alt="video thumbnail"
        className="gaming-card-image"
      />
      <Heading darkTheme={darkTheme}>{title}</Heading>
      <p className="gaming-card-description">{viewCount} Watching WorldWide</p>
    </li>
  )
}

export default GamingCard
