import React from 'react';
import card from "../assets/card.svg";

const RoundedIcon = (props) => {
  const IconObject = props.icon ? { icon: props.icon, inputType: "gender" } : { icon: card, inputType: "membership" };
  
  return (
    <div className={`${props.className} flex items-center mr-3 mt-3`} onClick={props.onClick}>
      <div className={'bg-white md:bg-paleGrey hover:bg-cloudyBlue rounded-full justify-center flex items-center '
       + (props.selected ? "bg-cloudyBlue md:bg-cloudyBlue" : "")}>
        <img src={IconObject.icon} alt="alt" className={'w-4/5 m-3 ' + (IconObject.inputType === "membership" ? "md:w-3/5 md:mx-4" : "md:mx-2 md:w-2/5")} />
      </div>
      <p className="text-cloudyBlue ml-5 md:ml-3">{props.title}</p>
    </div>
  )
}
 
export default RoundedIcon;