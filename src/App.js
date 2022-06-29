import React from "react";
import Drawer from "./containers/drawer";
import FixedDisplay from "./containers/fixed_display";
import FormContainer from "./containers/form_container";
import ExtensionToggleContextProvider from "./context/toggle_extension_context";

function App() {
  return (
    <main className="bg-charcoalGrey md:flex md:justify-center md:p-[1rem] h-screen w-screen">
      <ExtensionToggleContextProvider>
        <FixedDisplay />
        <Drawer />
        <FormContainer />
      </ExtensionToggleContextProvider>
    </main>
  );
}

export default App;
