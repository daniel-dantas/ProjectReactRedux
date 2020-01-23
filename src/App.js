import React, { Component } from 'react'

import { Provider } from 'react-redux'

import store from './store'

import SideBar from './components/SideBar'
import Video from './components/Video'

export default class App extends Component {
  render() {
    return (
      <div id="app">
        <Provider store={store}>
          <SideBar />
          <Video />
        </Provider>
      </div>
    )
  }
}
