import './styles/index.css'
import { useTheme } from './theme/useTheme';

const App = () => {

  const { theme, toggleTheme } = useTheme()

  return ( 
    <div className={`App ${theme}`}>
      Hello
      <button onClick={toggleTheme}>Theme</button>
    </div>
   );
}
 
export default App;