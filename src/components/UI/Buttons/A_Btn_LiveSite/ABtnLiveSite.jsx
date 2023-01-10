import React from 'react';

// styles
import './ABtnLiveSite.css';

// icons
import { CgWebsite } from 'react-icons/cg';

const ABtnLiveSite = ( { link } ) => {
   return (
      <a 
         href={ link }
         rel="noreferrer"
         target="_blank"
         className="btn-outline"
      >
         <CgWebsite className='btn-outline_icon ' />
         Live site
      </a>
   )
}

export default ABtnLiveSite