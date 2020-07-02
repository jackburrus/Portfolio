import "../styles/styles.css"

import React from "react"

import Tilt from "react-tilt"
import Underline from "../../assets/headerUnderline.svg"

// icons
import Github from "../../assets/github.svg"
import LinkedIn from "../../assets/linkedin.svg"
import AWS from "../../assets/icons/amazonaws.svg"
import Python from "../../assets/icons/python.svg"
import Serverless from "../../assets/icons/serverless.svg"
import JavaScript from "../../assets/icons/javascript.svg"
import BackgroundMountains from "../../assets/backgroundmtns.svg"
import ReactIcon from "../../assets/icons/react.svg"
import Expo from "../../assets/icons/Expo.svg"
import WorksRow from "../components/WorksRow"
import MobileWorks from "../components/MobileWorks"

import useViewport from "../../static/hooks/useViewport.js"
import Sana from "../../assets/SanaSmall.svg"
import Me from "../../assets/MeAsWellAlso.svg"

const App = () => {
  const { width } = useViewport()
  const breakpoint = 620
  return (
    <div className="container">
      <Me />
      <div className="projectContainer">
        <Tilt
          className="Tilt"
          options={{ max: 25 }}
          style={{
            height: 300,
            width: 300,
            margin: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Sana />
        </Tilt>
        <Tilt
          className="Tilt"
          options={{ max: 25 }}
          style={{
            height: 300,
            width: 300,
            margin: 20,

            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Sana />
        </Tilt>
        <Tilt
          className="Tilt"
          options={{ max: 25 }}
          style={{
            height: 300,
            width: 300,
            margin: 20,

            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Sana />
        </Tilt>
        <Tilt
          className="Tilt"
          options={{ max: 25 }}
          style={{
            height: 300,
            width: 300,

            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Sana />
        </Tilt>
        <Tilt
          className="Tilt"
          options={{ max: 25 }}
          style={{
            height: 300,
            width: 300,

            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Sana />
        </Tilt>
      </div>
    </div>
  )
}

export default App
