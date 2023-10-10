import {AiFillHome} from 'react-icons/ai'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import {Link} from 'react-router-dom'

import {
  LeftNavContainer,
  IconTitle,
  ContactUs,
  Description,
} from './styledComponent'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const LeftNav = () => (
  <ThemeContext.Consumer>
    {value => {
      const {darkTheme} = value
      return (
        <LeftNavContainer darkTheme={darkTheme}>
          <div>
            <div>
              <Link to="/" className="ln-top-icon-container">
                <AiFillHome className="left-nav-top-icon" />
                <IconTitle isActive>Home</IconTitle>
              </Link>
            </div>

            <div>
              <Link to="/trending" className="ln-top-icon-container">
                <FaFire className="left-nav-top-icon" />
                <IconTitle>Trending</IconTitle>
              </Link>
            </div>

            <div>
              <Link to="/gaming" className="ln-top-icon-container">
                <SiYoutubegaming className="left-nav-top-icon" />
                <IconTitle>Gaming</IconTitle>
              </Link>
            </div>

            <div>
              <Link to="/saved-videos" className="ln-top-icon-container">
                <MdPlaylistAdd className="left-nav-top-icon" />
                <IconTitle>Saved videos</IconTitle>
              </Link>
            </div>
          </div>
          <div>
            <ContactUs darkTheme={darkTheme}>CONTACT US</ContactUs>
            <div className="contact-us-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
                className="social-media-icon"
              />

              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
                className="social-media-icon"
              />

              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
                className="social-media-icon"
              />
            </div>
            <Description darkTheme={darkTheme}>
              Enjoy! Now to see your channels and recommendations!
            </Description>
          </div>
        </LeftNavContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default LeftNav
