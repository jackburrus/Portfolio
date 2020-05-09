import React from 'react'
import './MobileWorksRow.css'
import MobileWorksRow from './MobileWorksRow'
import AWS from '../../assets/icons/amazonaws.svg'
import Python from '../../assets/icons/python.svg'
import Serverless from '../../assets/icons/serverless.svg'
import JavaScript from '../../assets/icons/javascript.svg'

import ReactIcon from '../../assets/icons/react.svg'
import Expo from '../../assets/icons/Expo.svg'
import WorksRow from './WorksRow'

export default function MobileWorks() {
  return (
    <div className="MobileWorksContainer">
      <MobileWorksRow
        name="OSINT Project"
        description="Chrome extension for OSINT analysts"
        icons={[<AWS />, <JavaScript />, <Python />, <Serverless />]}
      />
      <MobileWorksRow
        name="OSINT Project"
        description="Chrome extension for OSINT analysts"
        icons={[<JavaScript />, <Expo />]}
      />
      <MobileWorksRow
        name="OSINT Project"
        description="Chrome extension for OSINT analysts"
        icons={[<JavaScript />, <Expo />]}
      />
    </div>
  )
}
