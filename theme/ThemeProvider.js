import { useState } from 'react'
import { ThemeContext } from "./ThemeContext";

const ThemeProvider = ({ children }) => {

  const [theme, setTheme] = useState('light')

  const defaultValue = { theme, setTheme }

  return ( 
    <ThemeContext.Provider value={defaultValue}>
      {children}
    </ThemeContext.Provider>
  );
}
 
export default ThemeProvider;