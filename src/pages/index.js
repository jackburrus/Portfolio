import "../styles/styles.css"

import React from "react"

import Tilt from "react-tilt"

import useViewport from "../../static/hooks/useViewport.js"
import Sana from "../../assets/SanaSmall.svg"
import Me from "../../assets/Sana.svg"

const App = () => {
  const { width } = useViewport()
  const breakpoint = 620
  return (
    <div className="container">
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
          <Me className="item" />
        </Tilt>
      </div>
    </div>
  )
}

export default App
