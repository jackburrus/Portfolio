import React, { Component } from 'react'

import Underline from '../../assets/headerUnderline.svg'
import Github from '../../assets/github.svg'
import LinkedIn from '../../assets/LinkedIn.svg'
import BackgroundMountains from '../../assets/backgroundmtns.svg'
import WorksRow from '../components/WorksRow'

class App extends Component {
  render() {
    return (
      <div className="container">
        <button className="hover-button">
          <span className="hover-button--off">Default</span>
          <span className="hover-button--on">Hover!</span>
        </button>
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
          <div className="column">
            <WorksRow name="Work 1" rowStyles="rowStyles" icons="icons" />
            <WorksRow name="Work 1" rowStyles="rowStyles" icons="icons" />
            <WorksRow name="Work 1" rowStyles="rowStyles" icons="icons" />
          </div>
          <div className="column">
            <WorksRow name="Work 1" rowStyles="rowStyles" icons="icons" />
            <WorksRow name="Work 1" rowStyles="rowStyles" icons="icons" />
            <WorksRow name="Work 1" rowStyles="rowStyles" icons="icons" />
          </div>
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
