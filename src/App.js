import { useState } from 'react';
import './App.css';
import Intervalo from './Components/Intervalo';
import Media from './Components/Media';
import Soma from './Components/Soma';
import Sorteio from './Components/Sorteio';

function App() {

  const [min, setMin] = useState(11)
  const [max, setMax] = useState(105)

  return (
    <div className="App">
      <h1> Exercicio React - Redux (Simples)</h1>
      <div className='linha'>
          <Intervalo min={min} max={max}
          onMinChanged={setMin} onMaxChanged={setMax}> </Intervalo>
      </div>
      <div className='linha'>
          <Media min={min} max={max}/>
          <Soma min={min} max={max}/>
          <Sorteio min={min} max={max}/>
      </div>
    </div>
  );
}

export default App;
