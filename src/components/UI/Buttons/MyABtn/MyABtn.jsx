import React from 'react';

import cl from './MyABtn.module.scss';

const MyABtn = ( { children, link, ...props } ) => {
   return (
      <a href={ link } {...props} className={cl.btn_outline} rel="noreferrer" target="_blank">
         {children}
      </a>
   )
}

export default MyABtn