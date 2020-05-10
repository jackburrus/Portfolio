import React from 'react'
import PropTypes from 'prop-types'
import useHover from '../../static/hooks/useHover'
import '../styles/styles.css'

function WorksRow(props) {
  const [hoverRef, isHovered] = useHover()
  let projectName = 'mobile-projectName'
  let descriptionName = 'mobile-description'
  if (isHovered) {
    projectName += ' mobile-projectName-active'
    descriptionName += ' mobile-description-active'
  }
  function Icons(props) {
    const listIcons = props.icons.map((i) => <div>{i}</div>)
    return <ul>{listIcons}</ul>
  }
  return (
    <a href={props.link} ref={hoverRef} className="mobile-rowStyles">
      <div className={projectName}>{props.name}</div>
      <div className="mobile-usageIconsContainer">
        <div className={descriptionName}>{props.description}</div>
        <div className="mobile-iconContainer">
          {isHovered
            ? props.icons.map((i) => <div className="mobile-ic">{i}</div>)
            : null}
        </div>
      </div>
    </a>

    //   <div>{props.name}</div>
  )
}

WorksRow.propTypes = {}

export default WorksRow
