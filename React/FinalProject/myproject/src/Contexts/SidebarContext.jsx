import React, { createContext, useState } from "react";

export const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
const [isOpen,setIsOpen]=useState(false);

const handleClose=()=>{
  setIsOpen(!isOpen)
}

  return <SidebarContext.Provider value={{isOpen,setIsOpen,handleClose}}>{children}</SidebarContext.Provider>;
};

export default SidebarProvider;
