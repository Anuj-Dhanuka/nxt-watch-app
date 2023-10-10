import {AiOutlineClose} from 'react-icons/ai'
import {Link} from 'react-router-dom'

import './index.css'
import Container from './styledComponent'

const Banner = props => {
  const {onClosingBanner} = props
  const onClickClose = () => {
    onClosingBanner()
  }

  return (
    <Container data-testid="banner">
      <div className="banner-logo-close-btn-container">
        <Link to="/" className="banner-link-style">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="nxt watch logo"
            className="banner-logo-image"
          />
        </Link>

        <button
          type="button"
          className="banner-close-btn"
          onClick={onClickClose}
          data-testid="close"
        >
          <AiOutlineClose className="banner-close-icon" />
        </button>
      </div>

      <p className="banner-description">
        Buy Nxt Watch Premium prepaid plans with UPI
      </p>
      <button type="button" className="get-it-now-btn">
        GET IT NOW
      </button>
    </Container>
  )
}

export default Banner
