import './App.css';
import Intervalo from './Components/Intervalo';
import Media from './Components/Media';
import Soma from './Components/Soma';
import Sorteio from './Components/Sorteio';

function App() {

  return (
    <div className="App">
      <h1> Exercicio React & Redux </h1>
      <div className='linha'>
          <Intervalo/>
      </div>
      <div className='linha'>
          <Media/>
          <Soma />
          <Sorteio/>
      </div>
    </div>
  );
}

export default App;
