import {useState} from 'react';
import './App.css'

const CalculadoraApp = () => {
  const [pantalla, setPantalla] = useState("0");
  const [memoria, setMemoria] = useState(0);
  const [operador, setOperador] = useState(null);
  const [valor, setValor] = useState(null);


  const handleClickValorPantalla = (valorPantalla) => {
    setPantalla(pantalla === "0" ? valorPantalla.toString() : pantalla + valorPantalla);
  };

  const handleClickOperador = (oper) => {
    setValor(parseFloat(pantalla));
    setOperador(oper);
    setPantalla("0");

  };

  //Botones de M+, M- y Mc
  const handleMemoriaSuma = () => setMemoria(memoria + parseFloat(pantalla));
  const handleMemoriaResta = () => setMemoria(memoria - parseFloat(pantalla));
  const handleMemoriaClear = () => setMemoria(0);


  const handleResultado = () => {
    let resultado;
    const valorPantalla = parseFloat(pantalla);

    switch (operador){
      case "+":
        resultado = valor +  valorPantalla;
        break;
      case "-":
        resultado = valor - valorPantalla;
        break;
      case "*" :
        resultado = valor * valorPantalla;
        break;
      case "/":
        resultado = valor / valorPantalla;
        break;
      default:
        return;
    }

    setPantalla(resultado.toString());
    setOperador(null);
    setValor(null);
  }

  const handleClear = () => setPantalla("0");

  const handleDecimal = () => {
    if(!pantalla.includes(".")){
      setPantalla(pantalla + ".");
    }
  }


  return (

    <div className='calculadora'>
      <div className='pantalla'>{pantalla}</div>
      <div className='botones'>
        <button onClick={handleMemoriaSuma}>M+</button>
        <button onClick={handleMemoriaResta}>M-</button>
        <button onClick={handleMemoriaClear}>Mc</button>
        <button onClick={() => handleClear('C')}> C </button>
      </div>

      <div className='botones'>
        {[7, 8, 9].map((num) => (
          <button key={num} onClick={() => handleClickValorPantalla(num.toString())}
          >{num}</button>
        ))}

        <button onClick={ () => handleClickOperador('/')}>/</button>


        {[4, 5, 6].map((num) => (
          <button key={num} onClick={() => handleClickValorPantalla(num.toString())}
          >{num}</button>
        ))}

        <button onClick={() => handleClickOperador('*')}> * </button>

        {[1, 2, 3].map((num) => (
          <button key={num} onClick={() => handleClickValorPantalla(num.toString())}
          >{num}</button>
        ))}

        <button onClick={() => handleClickOperador('-')}> - </button>

        <button onClick={() => handleClickValorPantalla('0')}> 0 </button>
        <button onClick={() => handleDecimal('.')}> . </button>
        
        <button onClick={handleResultado}> = </button>

        <button onClick={() => handleClickOperador('+')}> + </button>


      </div>
    
    </div>
  );


}

export default CalculadoraApp
