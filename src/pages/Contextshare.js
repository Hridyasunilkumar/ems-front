import React, { createContext, useState } from 'react'


export const registerContext=createContext()

function Contextshare({children}) {
     
    const[registerdata,setRegisterData]=useState("")
    
  return (
    <>
     <registerContext.Provider value={{registerdata,setRegisterData}}>
        {children}
     </registerContext.Provider>
    
    
    </>
  )
}

export default Contextshare
