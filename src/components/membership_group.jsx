import React from 'react';
import card from "../assets/card.svg";
import RoundedIcon from './rounded_icon';

const MembershipGroup = (props) => {
  return (
    <RoundedIcon icon={card} title={props.title} onClick={props.onClick} />
  )
}
 
export default MembershipGroup;