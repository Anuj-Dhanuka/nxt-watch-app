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

const navItemsData = [
  {id: 1, itemName: 'Home', icon: AiFillHome, route: '/'},
  {id: 2, itemName: 'Trending', icon: FaFire, route: '/trending'},
  {id: 3, itemName: 'Gaming', icon: SiYoutubegaming, route: '/gaming'},
  {
    id: 4,
    itemName: 'Saved videos',
    icon: MdPlaylistAdd,
    route: '/saved-videos',
  },
]

const LeftNav = () => (
  <ThemeContext.Consumer>
    {value => {
      const {darkTheme, activeId, onChangeNavActiveId} = value
      return (
        <LeftNavContainer darkTheme={darkTheme}>
          <ul className="ln-ul-container">
            {navItemsData.map(eachItem => {
              const isActive = activeId === eachItem.id
              const onClickNavItem = () => {
                onChangeNavActiveId(eachItem.id)
              }
              const activeIconStyle = isActive ? 'ln-active-icon-fill' : ''
              return (
                <li key={eachItem.id}>
                  <Link to={eachItem.route} className="ln-top-icon-container">
                    <button
                      type="button"
                      className="ln-icon-btn"
                      onClick={onClickNavItem}
                    >
                      <eachItem.icon
                        className={`${activeIconStyle} left-nav-top-icon`}
                      />
                      <IconTitle darkTheme={darkTheme} isActive={isActive}>
                        {eachItem.itemName}
                      </IconTitle>
                    </button>
                  </Link>
                </li>
              )
            })}
          </ul>
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
