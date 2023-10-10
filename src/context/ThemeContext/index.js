import React from 'react'

const ThemeContext = React.createContext({
  darkTheme: false,
  onClickTheme: () => {},
  savedVideoList: [],
  onClickSaveItem: () => {},
})

export default ThemeContext
