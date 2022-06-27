import React, { useContext } from 'react';
import { ExtensionToggleContext } from '../context/toggle_extension_context';

const Drawer = () => {
  const { isOpen } = useContext(ExtensionToggleContext);

  return ( 
    <main className={
      " md:fixed overflow-hidden z-10 transform ease-in-out " +
      (isOpen
        ? " transition-all transition-opacity opacity-100 md:translate-x-0 duration-700 md:top-10 md:bottom-10 xl:left-[39%] md:left-[35%] md:w-full lg:w-full xl:w-[79%] lg:left-[36%] "
        : " transition-all duration-500 opacity-0 md:-translate-x-full hidden sm:block")
    }>
      <article className='pt-14 bg-tangerine pb-32 h-full p-3 md:p-10 md:w-3/5 w-full md:rounded-r-3xl'>
        <h1 className='text-2xl font-bold mb-5'>My world today</h1>
        <p>Integer sagittis dignissim dapibus. In luctus libero ullamcorper purus sagittis, 
          quis lobortis neque tincidunt. Donec tincidunt sapien eget lectus ornare, 
          <span className='font-bold underline'> View all days </span>
          at condimentum turpis tincidunt. Nam consectetur enim maximus lectus euismod venenatis. 
          Nunc rutrum congue odio, ac lobortis tortor venenatis sed. In pulvinar nisi at consequat placerat. 
          In non pharetra tellus. Morbi cursus at velit vel ultricies. Nam volutpat porttitor finibus. 
          Sed sed nulla vel arcu egestas egestas.</p>
      </article>
    </main>
   );
}
 
export default Drawer;