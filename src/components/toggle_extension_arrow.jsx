import React, { useContext } from 'react';
import arrow from "../assets/arrow.svg";
import { ExtensionToggleContext } from "../context/toggle_extension_context";

const ToggleExtensionArrow = () => {
  const { toggleExtension, isOpen } = useContext(ExtensionToggleContext);

  const openClassName = isOpen ? "-rotate-90 md:rotate-180" : "rotate-90 md:rotate-0"

  return ( 
    <button onClick={toggleExtension} className='rounded-full flex justify-center items-center p-3 mt-14 bg-charcoalGrey'>
      <img src={arrow} alt="arrow" className={`w-3/5 ${openClassName} transition-all duration-500`} />
    </button>
   );
}
 
export default ToggleExtensionArrow;