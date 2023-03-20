const faturamentoMensal = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
  };
  
  const totalMensal = Object.values(faturamentoMensal).reduce((total, valor) => total + valor, 0);
  
  const representacaoPorEstado = {};
  for (let estado in faturamentoMensal) {
    representacaoPorEstado[estado] = ((faturamentoMensal[estado] / totalMensal) * 100).toFixed(2) + "%";
  }
  
  console.log(representacaoPorEstado);
  