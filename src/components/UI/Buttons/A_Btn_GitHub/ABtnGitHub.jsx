import React from 'react';

import cl from './ABtnGitHub.module.css';

import imgGitHub from './icons/gitHub-black.svg'

const ABtnGitHub = ( { link } ) => {
   return (
      <a 
         href={ link }
         rel="noreferrer"
         target="_blank"
         className={cl.btn_outline}
      >
         <img src={ imgGitHub } alt="" />
         GitHub repo
      </a>
   )
}

export default ABtnGitHub