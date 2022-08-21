export interface IErrorBodyData {
  mensage: string;
}

export interface IRequestCalcSaque {
  saldoFgts: number;
  salario: number;
  mesNascimento: number;
}

export interface IResponseCalcSaque {
  saldoFgts: number;
  somaLancamentos: number;
  saldoFuturoTotal: number;
  previsaoSaque: number;
}

export enum ETypeTitle {
  main,
  default,
}
