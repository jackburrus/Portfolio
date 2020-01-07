import React, { Component } from "react"
import Terminal from "terminal-in-react"

class App extends Component {
  showMsg = () => "Hello World"

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#C7EFCF",
          flexDirection: "column",
        }}
      >
        <div>
          <p>1 Project per week!</p>
          <p>0/52</p>
          <p>X - Chemex App</p>
          <p>X - Libra Wallet</p>
        </div>
        <Terminal
          color="green"
          backgroundColor="black"
          barColor="black"
          style={{
            fontWeight: "bold",
            fontSize: "1em",
            height: "100vh",
          }}
          commands={{
            "open-google": () =>
              window.open("https://www.google.com/", "_blank"),
            showmsg: this.showMsg,
            popup: () => alert("Terminal in React"),
          }}
          descriptions={{
            "open-google": "opens google.com",
            showmsg: "shows a message",
            alert: "alert",
            popup: "alert",
          }}
          msg="You can write anything here. Example - Hello! My name is Foo and I like Bar."
        />
      </div>
    )
  }
}
export default App
