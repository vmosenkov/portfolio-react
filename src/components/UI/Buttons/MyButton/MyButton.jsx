import React from 'react';
import cl from './MyButton.module.css';

const MyButton = ( {children, link, ...props} ) => {
	
	return (
    	<button {...props} className={cl.myBtn}>
			<a href={ link } className={cl.btn_outline} rel="noreferrer" target="_blank">
				{children}
			</a>
		</button>
  	)
}

export default MyButton;