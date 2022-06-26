import React from 'react';
import card from "../assets/card.svg";

const RoundedIcon = (props) => {
  const icon = props.icon ? props.icon : card;
  
  return (
    <div className={`${props.className} flex items-center mr-3`} onClick={props.onClick}>
      <div className='bg-white md:bg-paleGrey hover:bg-cloudyBlue rounded-full justify-center flex items-center'>
        <img src={icon} alt="alt" className='w-full m-3 md:mx-4' />
      </div>
      <p className="text-cloudyBlue ml-5 md:ml-3">{props.title}</p>
    </div>
  )
}
 
export default RoundedIcon;