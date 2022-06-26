import React, { useContext } from 'react';
import Form from '../components/form';
import { ExtensionToggleContext } from '../context/toggle_extension_context';

const FormContainer = () => {
  const { isOpen } = useContext(ExtensionToggleContext);

  return ( 
    <main className={"d:h-full px-3 pt-14 pb-2 md:p-10 lg:p-24 flex-col items-center bg-charcoalGrey md:rounded-r-3xl md:bg-white " + 
      (isOpen ? "hidden md:flex" : "block md:flex")
    }>
      <Form />
    </main>
   );
}
 
export default FormContainer;