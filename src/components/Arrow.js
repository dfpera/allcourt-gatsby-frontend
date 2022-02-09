import * as React from 'react'

const Arrow = ({direction, className}) => {
  var arrowChar = '»'
  var extraClasses = 'right-0'
  var thisClassName = className ?? ''

  switch (String(direction)) {
    case 'left':
      arrowChar = '«'
      extraClasses = 'left-0'
      break
    default:
  }

  return (
    <span className={`text-primary font-bold block absolute
                     ${extraClasses} ${thisClassName}`}>
      {arrowChar}
    </span>
  )
}

export default Arrow