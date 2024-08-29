//Función regular y de flecha para saber si un número es par o impar

function regular(x) {
    if (x % 2 === 0) {
      console.log(x + " es par");
    } else {
      console.log(x + " es impar");
    }
  }
  
regular(4);
regular(5);

const flecha = (x) => {
    if (x % 2 === 0) {
      console.log(x + " es par");
    } else {
      console.log(x + " es impar");
    }
  };
  
flecha(4);
flecha(5);
  