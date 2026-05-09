import { createContext } from "react";
import { Persona } from "../modelos/Persona";

export const contextPersona= createContext({
    listaPersona: [] as Persona[],
    agregarPersona: (persona: Persona) => {}
})