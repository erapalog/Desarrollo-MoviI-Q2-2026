import { createContext } from "react";
import { Alumno } from "../modelos/Alumno";

export const contextAlumno = createContext({
  listaAlumnos: [] as Alumno[],
  agregarAlumno: (alumno: Alumno) => {}

})