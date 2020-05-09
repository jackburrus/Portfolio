import React from 'react'
import PropTypes from 'prop-types'
import useHover from '../../static/hooks/useHover'
import './WorksRow.css'

function WorksRow(props) {
  const [hoverRef, isHovered] = useHover()
  return (
    // <div
    //   ref={hoverRef}
    //   style={{
    //     color: 'white',
    //     padding: '8rem',
    //     width: '12rem',
    //     textAlign: 'center',
    //     fontSize: '5rem',
    //     backgroundColor: isHovered ? '#00e3e3' : '#ccc',
    //   }}
    // >
    //   {isHovered ? '😁' : '☹️'}
    // </div>
    <div className="rowContainer">
      <div ref={hoverRef} className={props.rowStyles}>
        <div className="projectName">{props.name}</div>
        <div className="description">{props.description}</div>
      </div>
      <div>
        {isHovered ? (
          <div className="usageIconsContainer">{props.icons}</div>
        ) : null}
      </div>
    </div>

    //   <div>{props.name}</div>
  )
}

WorksRow.propTypes = {}

export default WorksRow
