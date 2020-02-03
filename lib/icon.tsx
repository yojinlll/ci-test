import React from 'react'
import './importIcons'
import './icons.scss'

interface IconProps {
  name: string;
  onClick?: React.MouseEventHandler<SVGElement>
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
    <svg className='miro-icons' onClick={props.onClick}>
      <use xlinkHref={`#${props.name}`}></use>
    </svg>
  )
}

export default Icon