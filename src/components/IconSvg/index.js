import React from 'react'

const IconSvg = ({ type, fill, className = '', ...restProps }) => {
  return (
    <svg className={`${className}`} {...restProps}>
      <use xlinkHref={`#${type}`} fill={fill} />
    </svg>
  )
}

export default IconSvg