export interface ResponseSaqueAniversario {
  saldoFgts: number;
  somaLancamentos: number;
  saldoFuturoTotal: number;
  previsaoSaque: number;
}

export interface RequestSaqueAniversario {
  saldoFgts: number;
  salario: number;
  mesNascimento: number;
}
