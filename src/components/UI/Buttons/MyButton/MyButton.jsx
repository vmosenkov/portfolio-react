import React from 'react';
import cl from'./myButton.module.scss';

const MyButton = ( {children, link, className, ...props} ) => {
	
	return (
    	<button {...props} className={ `${cl.btn__main} ${className}` }>
			{children}
		</button>
  	)
}

export default MyButton;