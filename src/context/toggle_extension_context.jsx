import React, { Component, createContext } from "react";

export const ExtensionToggleContext = createContext();

class ExtensionToggleContextProvider extends Component {
  state = {
    isOpen: false
  }

  toggleExtension = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    return (
      <ExtensionToggleContext.Provider value={{ ...this.state, toggleExtension: this.toggleExtension }}>
        {this.props.children}
      </ExtensionToggleContext.Provider>
    )
  }
}

export default ExtensionToggleContextProvider;