import React from 'react';

import cl from './ABtn.module.css'

const ABtn = ({children, ...props}) => {
  return (
    <a {...props} className={cl.btn}>{children}</a>
  )
}

export default ABtn