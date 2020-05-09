import React from 'react'
import PropTypes from 'prop-types'
import useHover from '../../static/hooks/useHover'
import './WorksRow.css'

function WorksRow(props) {
  const [hoverRef, isHovered] = useHover()

  function Icons(props) {
    const listIcons = props.icons.map(i => <div>{i}</div>)
    return <ul>{listIcons}</ul>
  }
  return (
    <div className="rowContainer">
      <div ref={hoverRef} className={props.rowStyles}>
        <div className="projectName">{props.name}</div>
        <div className="description">{props.description}</div>
      </div>
      <div className="usageIconsContainer">
        {isHovered ? <div className="ic">{props.icons}</div> : null}
      </div>
    </div>

    //   <div>{props.name}</div>
  )
}

WorksRow.propTypes = {}

export default WorksRow
