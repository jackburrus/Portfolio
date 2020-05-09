import React, { Component } from 'react'

import Underline from '../../assets/headerUnderline.svg'

// icons
import Github from '../../assets/github.svg'
import LinkedIn from '../../assets/LinkedIn.svg'
import AWS from '../../assets/icons/amazonaws.svg'
import Python from '../../assets/icons/python.svg'
import Serverless from '../../assets/icons/serverless.svg'
import JavaScript from '../../assets/icons/javascript.svg'
import BackgroundMountains from '../../assets/backgroundmtns.svg'
import WorksRow from '../components/WorksRow'

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
          <div className="column">
            <WorksRow
              name="OSINT Gadget"
              description="Chrome extension for OSINT analysts"
              rowStyles="rowStyles"
              icons={[<AWS />, <JavaScript />, <Python />, <Serverless />]}
            />
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
