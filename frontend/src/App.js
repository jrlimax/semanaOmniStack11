import React from 'react';
import Routes from './routes';
import './global.css'
// JSX (JavaScript XML)

function App() {
  return(
    <Routes />
  );

  /* código usando para gerar um contador no frontend.
--------------------------------------------------------
  const [counter, setCounter] = useState(0);

  "useState" = array [valor, função de atualização]
  function increment(){
    setCounter(counter + 1);
  }
  
  return (
    <div>
      <header>Contador: {counter}
      <button onClick={increment}>Incrementar</button>
      </header>
    </div>
*/

}

export default App;
