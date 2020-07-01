import React from 'react'
import PropTypes from 'prop-types'
import useHover from '../../static/hooks/useHover'
// import './WorksRow.css'
import '../styles/styles.css'

function WorksRow(props) {
  const [hoverRef, isHovered] = useHover()
  let projectName = 'projectName'
  let descriptionName = 'description'
  if (isHovered) {
    projectName += ' projectName-active'
    descriptionName += ' description-active'
  }
  function Icons(props) {
    const listIcons = props.icons.map((i) => <div>{i}</div>)
    return <ul>{listIcons}</ul>
  }
  return (
    <div ref={hoverRef} className="rowContainer">
      <a href={props.link} className="rowStylesI">
        <div className={projectName}>{props.name}</div>
        <div className={descriptionName}>{props.description}</div>
        <div className="usageIconsContainer">
          {/* {isHovered ? <div className="ic">{props.icons}</div> : null} */}
          {isHovered
            ? props.icons.map((i) => <div className="ic">{i}</div>)
            : null}
        </div>
      </a>
    </div>

    //   <div>{props.name}</div>
  )
}

WorksRow.propTypes = {}

export default WorksRow
