//taxa de cambio
const taxa_cambio = 65.6;

//capatcao de dados
const inputMzn = document.getElementById('mzn');
const inputUsd = document.getElementById('usd');

//Quando digitar no campo de Metical
inputMzn.addEventListener('input', () => {
  const valorMzn = parseFloat(inputMzn.value);

  //verificar se tem algo escrito?
  if (isNaN(valorMzn)) {
    inputUsd.value = ' ';
    return;
  }
  const conversaoUsd = valorMzn / taxa_cambio;
  inputUsd.value = conversaoUsd.toFixed(2);
});

//Quando digitar no campo de Dollar
inputUsd.addEventListener('input', () => {
  const valorUsd = parseFloat(inputUsd.value);

  //verificar se tem algo escrito?
  if (isNaN(valorUsd)) {
    inputMzn.value = ' ';
    return;
  }
  const conversaoMzn = valorUsd * taxa_cambio;
  inputMzn.value = conversaoMzn.toFixed(2);
});
