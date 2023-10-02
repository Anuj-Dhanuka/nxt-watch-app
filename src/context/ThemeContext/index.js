import React from 'react'

const ThemeContext = React.createContext({
  darkTheme: false,
  onClickTheme: () => {},
})

export default ThemeContext
