import React from 'react';

// styles
import './ABtnGitHub.css';

// icons
import imgGitHubBlack from './icons/gitHub-black.svg'

const ABtnGitHub = ( { link } ) => {
   return (
      <a 
         href={ link }
         rel="noreferrer"
         target="_blank"
         className="btn-outline"
      >
         <img src={ imgGitHubBlack } alt="" />
         GitHub repo
      </a>
   )
}

export default ABtnGitHub