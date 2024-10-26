import React from "react";
import { createContext } from "react";
const contex = createContext('hhhh')

const Provider = ({children, projects}) => {
    return (
        <contex.Provider value={projects}>
            {children}
        </contex.Provider>
    )
}

export {contex, Provider}