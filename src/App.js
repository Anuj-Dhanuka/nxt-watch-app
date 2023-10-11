import './App.css'

import {Component} from 'react'

import {Route, Switch, Redirect} from 'react-router-dom'

import ThemeContext from './context/ThemeContext'
import ProtectedRoute from './components/ProtectedRoute'

import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'

// Replace your code here
class App extends Component {
  state = {darkTheme: false, savedVideoList: [], activeId: 1}

  onClickTheme = () => {
    this.setState(prevState => ({darkTheme: !prevState.darkTheme}))
  }

  onChangeNavActiveId = id => {
    this.setState({activeId: id})
  }

  onClickSaveItem = (isSaved, videoItemsData) => {
    console.log('Hi')
    if (isSaved === true) {
      this.setState(prevState => ({
        savedVideoList: [...prevState.savedVideoList, videoItemsData],
      }))
    } else {
      const {id} = videoItemsData
      const {savedVideoList} = this.state
      const updatedVideoList = savedVideoList.filter(
        eachItem => eachItem.id !== id,
      )
      this.setState({savedVideoList: updatedVideoList})
    }
  }

  render() {
    const {darkTheme, savedVideoList, activeId} = this.state
    console.log(savedVideoList)

    return (
      <ThemeContext.Provider
        value={{
          darkTheme,
          onClickTheme: this.onClickTheme,
          savedVideoList,
          onClickSaveItem: this.onClickSaveItem,
          activeId,
          onChangeNavActiveId: this.onChangeNavActiveId,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
