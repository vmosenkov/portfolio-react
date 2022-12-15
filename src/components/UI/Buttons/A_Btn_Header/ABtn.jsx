import React from 'react';

// styles
import './ABtn.css'

const ABtn = ({children, ...props}) => {
  return (
    <a {...props} className="btn">{children}</a>
  )
}

export default ABtn