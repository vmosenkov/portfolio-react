import React from 'react';
import cl from './myButton.module.scss';

const MyButton = ( {children, link, ...props} ) => {
	
	return (
    	<button {...props} className={cl.btn__outline}>
			{children}
		</button>
  	)
}

export default MyButton;