import React, { Component } from 'react'

import Underline from '../../assets/headerUnderline.svg'
import Github from '../../assets/github.svg'
import LinkedIn from '../../assets/LinkedIn.svg'
import BackgroundMountains from '../../assets/backgroundmtns.svg'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="headerStyles">
          <div className="nameAndIconsContainer">
            <div className="nameAndTitle">
              <div className="name">Jack Burrus</div>
              <div className="title">Mobile and Web Developer</div>
            </div>
            <div className="iconContainer">
              <Github />
              <LinkedIn />
            </div>
          </div>

          <Underline className="headerUnderline" />
        </div>

        <div className="worksContainer">
          <p>Works</p>
        </div>
        <div className="mountainsContainer">
          <BackgroundMountains className="backgroundMountains" />
        </div>
      </div>
    )
  }
}

// const App = () => {
//   return (

//   )
// }

export default App
