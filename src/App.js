import { Box, Container } from '@mui/material';
import './App.css';
import { useState } from 'react';

function App() {

  const [num, setNum] = useState(0)

  function numClicado(e){
    if(num === 0){
      setNum(e.target.value)
    }else{
    setNum(num + e.target.value)
    }

  }

  function limpar(e){
    setNum(0)
  }

  function porcentagem(e){
    setNum(num / 100)
  }

  function mudar(e){
    if(num > 0){
      setNum( -num )
    }else{
      setNum(Math.abs(num))
    }
  }

  function calculo(){
    try{
      setNum(eval(num).toString())
    } catch(error){
      setNum("Error")
    }
    
  }


  return (

    <Box m={5}>

    <Container maxWidth="xs">

      <div className="calc-wrapper">

        <h1 className="visor">{num}</h1>

        <button onClick={limpar} className="botao">AC</button>
        <button onClick={mudar} className="botao">+/-</button>
        <button onClick={porcentagem} className="botao">%</button>
        <button onClick={numClicado} value="/" className="botao">/</button>

        <button onClick={numClicado} value={7} className="botao">7</button>
        <button onClick={numClicado} value={8} className="botao">8</button>
        <button onClick={numClicado} value={9} className="botao">9</button>
        <button onClick={numClicado} value="*" className="botao">x</button>

        <button onClick={numClicado} value={4} className="botao">4</button>
        <button onClick={numClicado} value={5} className="botao">5</button>
        <button onClick={numClicado} value={6} className="botao">6</button>
        <button onClick={numClicado} value="-" className="botao">-</button>

        <button onClick={numClicado} value={1} className="botao">1</button>
        <button onClick={numClicado} value={2} className="botao">2</button>
        <button onClick={numClicado} value={3} className="botao">3</button>
        <button onClick={numClicado} value="+" className="botao">+</button>
        
        <button onClick={numClicado} value={0} className="botao">0</button>
        <button onClick={numClicado} value={"."} className="botao">,</button>
        <button onClick={calculo} className="igual">=</button>

      </div>

    </Container>

    </Box>
  );
}

export default App;
