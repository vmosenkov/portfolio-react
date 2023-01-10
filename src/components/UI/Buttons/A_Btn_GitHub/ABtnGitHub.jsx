import React from 'react';

// styles
import './ABtnGitHub.css';

// icons
import { BsGithub } from 'react-icons/bs';

const ABtnGitHub = ( { link } ) => {
   return (
      <a 
         href={ link }
         rel="noreferrer"
         target="_blank"
         className="btn-outline"
      >
         <BsGithub className="btn-outline_icon" />
         GitHub repo
      </a>
   )
}

export default ABtnGitHub