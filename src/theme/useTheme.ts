import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";
import {useContext} from 'react'


interface UseThemeResult {
  ToggleTheme: ()=>void;
  theme: Theme;
}

export function useTheme(): UseThemeResult{

  const {theme, setTheme} = useContext(ThemeContext)

  const ToggleTheme = () => {

    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }
  return {
    theme, ToggleTheme
  }
}