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
              <a href="https://github.com/jackburrus">
                <Github />
              </a>
              <a href="https://www.linkedin.com/in/jamesburrus/">
                <LinkedIn />
              </a>
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
