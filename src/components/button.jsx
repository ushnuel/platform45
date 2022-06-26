import React from 'react';

const Button = (props) => {
  return ( 
    <button 
      className={`${props.className} mt-5 py-5 text-lg md:py-2 lg:py-3 px-10 md:px-5 rounded-md md:text-sm`} 
      onClick={props.onClick}>
        {props.children}
    </button>
  );
}
 
export default Button;