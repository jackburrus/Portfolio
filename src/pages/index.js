import React, { Component } from "react"
import Lottie from "react-lottie"
// import Turtle from "../../assets/Turtle_Clay.svg"
import Turtle from "../../assets/data.json"

class App extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: Turtle,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    }
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#92CCDD",
          flexDirection: "column",
          borderStyle: "dotted",
        }}
      >
        <div
          style={{
            // borderStyle: "dotted",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <a href="https://github.com/jackburrus"> Github!!</a>
          <Lottie options={defaultOptions} height={100} width={100} />
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
