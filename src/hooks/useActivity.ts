import { useContext } from "react";
import { Activitycontex } from "../context/ActivityContex";


export const useActivity = () =>{
    const context = useContext(Activitycontex)
    if(!context) {
        throw new Error('El hook useActivity debe ser utilizado en un activityProvider')
    }

    return context
}