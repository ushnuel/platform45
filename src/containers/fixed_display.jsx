import React from 'react';
import face from "../assets/face.svg";
import TextWriteUp from '../components/text_write_up';
import ToggleExtensionArrow from '../components/toggle_extension_arrow';

const FixedDisplay = () => {
  return ( 
    <main className='md:flex justify-center items-center'>
      <section className='flex flex-col items-center justify-center bg-yellow p-10 h-screen md:h-full md:rounded-l-3xl'>
        <img src={face} alt="face" className='w-3/5' />
        <TextWriteUp />
        <ToggleExtensionArrow />
      </section>
    </main>    
   );
}
 
export default FixedDisplay;