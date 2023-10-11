import React from 'react'

const ThemeContext = React.createContext({
  darkTheme: false,
  onClickTheme: () => {},
  savedVideoList: [],
  onClickSaveItem: () => {},
  activeId: 1,
  onChangeNavActiveId: () => {},
})

export default ThemeContext
