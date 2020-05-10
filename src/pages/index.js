import '../styles/styles.css'

import React from 'react'

import Underline from '../../assets/headerUnderline.svg'

// icons
import Github from '../../assets/github.svg'
import LinkedIn from '../../assets/linkedin.svg'
import AWS from '../../assets/icons/amazonaws.svg'
import Python from '../../assets/icons/python.svg'
import Serverless from '../../assets/icons/serverless.svg'
import JavaScript from '../../assets/icons/javascript.svg'
import BackgroundMountains from '../../assets/backgroundmtns.svg'
import ReactIcon from '../../assets/icons/react.svg'
import Expo from '../../assets/icons/Expo.svg'
import WorksRow from '../components/WorksRow'
import MobileWorks from '../components/MobileWorks'

import useViewport from '../../static/hooks/useViewport.js'

const App = () => {
  const { width } = useViewport()
  const breakpoint = 620
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
      {/* {width > breakpoint ? ( */}
      <div className="worksContainer">
        <div className="column">
          <WorksRow
            name="OSINT Gadget"
            description="Chrome extension for OSINT analysts"
            rowStyles="rowStyles"
            icons={[<AWS />, <JavaScript />, <Python />, <Serverless />]}
            link="https://www.github.com/jackburrus"
          />
          <WorksRow
            name="Dollop"
            description="Recipe app"
            rowStyles="rowStyles"
            icons={[<JavaScript />, <Expo />]}
            link="https://www.github.com/jackburrus"
          />
          <WorksRow
            name="Coinbase Clone"
            description="A Coinbase clone made entirely in React Native"
            rowStyles="rowStyles"
            icons={[<JavaScript />, <Expo />]}
            link="https://github.com/jackburrus/coinbaseClone"
          />
        </div>
      </div>
      {/* ) : ( */}
      {/* <MobileWorks />
      )} */}

      <div className="mountainsContainer">
        <BackgroundMountains className="backgroundMountains" />
      </div>
    </div>
  )
}

export default App
