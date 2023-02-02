import { useContext } from 'react'
import { ThemeContext } from "./ThemeContext"


export const useTheme = () => {

  const { theme, setTheme } = useContext(ThemeContext)

  function toggleTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  return { theme, toggleTheme }
}