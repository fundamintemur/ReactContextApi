import {createContext,useState,useEffect} from "react";
const ThemeContext=createContext();
export const ThemeProvider=({children})=>{
const[theme,setTheme]=useState("dark");
const values={
    theme,setTheme,
};
useEffect(()=>{
localStorage.setItem("theme",theme);
},[theme]);
return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
};
export default ThemeContext;