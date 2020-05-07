import React, { Component } from 'react'

import Underline from '../../assets/headerUnderline.svg'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="headerStyles">
          <p className="name">Jack Burrus</p>

          <Underline className="headerUnderline" />
        </div>
        <div className="worksContainer">
          <p>Works</p>
        </div>
        <div className="mountainsContainer">
          <p>Mountains</p>
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
