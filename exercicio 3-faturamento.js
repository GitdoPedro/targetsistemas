const fs = require('fs');

const faturamentoJson = fs.readFileSync('faturamento.json', 'utf-8');

const faturamentoMensal = JSON.parse(faturamentoJson);


function calcularMenorFaturamento(faturamento) {
  let menor = faturamento[0];
  for (let i = 1; i < faturamento.length; i++) {
    if (faturamento[i] < menor) {
      menor = faturamento[i];
    }
  }
  return menor;
}

function calcularMaiorFaturamento(faturamento) {
  let maior = faturamento[0];
  for (let i = 1; i < faturamento.length; i++) {
    if (faturamento[i] > maior) {
      maior = faturamento[i];
    }
  }
  return maior;
}

function calcularMediaFaturamento(faturamento) {
  let soma = 0;
  let dias = 0;
  for (let i = 0; i < faturamento.length; i++) {
    if (faturamento[i] > 0) {
      soma += faturamento[i];
      dias++;
    }
  }
  return soma / dias;
}


function calcularDiasAcimaDaMedia(faturamento) {
  const media = calcularMediaFaturamento(faturamento);
  let diasAcima = 0;
  for (let i = 0; i < faturamento.length; i++) {
    if (faturamento[i] > media) {
      diasAcima++;
    }
  }
  return diasAcima;
}

console.log("Menor faturamento diário: " + calcularMenorFaturamento(faturamentoMensal));
console.log("Maior faturamento diário: " + calcularMaiorFaturamento(faturamentoMensal));
console.log("Número de dias com faturamento acima da média mensal: " + calcularDiasAcimaDaMedia(faturamentoMensal));
