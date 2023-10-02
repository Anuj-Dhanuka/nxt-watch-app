import './index.css'

const Header = () => {
  console.log('Hi')
  const darkTheme = false
  const imageUrl = darkTheme
    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
  return (
    <nav className="nav-container">
      <img src={imageUrl} alt="website logo" className="header-logo" />
      <div>
        <img src="" alt="" />
      </div>
    </nav>
  )
}

export default Header
