import React from 'react'
import PropTypes from 'prop-types'
import useHover from '../../static/hooks/useHover'

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
    <div ref={hoverRef} className={props.rowStyles}>
      <div>{props.name}</div>
      {isHovered ? <div>{props.icons}</div> : null}
    </div>

    //   <div>{props.name}</div>
  )
}

WorksRow.propTypes = {}

export default WorksRow
