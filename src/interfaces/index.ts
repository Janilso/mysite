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

export interface IRepositoryBackend {
  repository: {
    name: string;
    technologies: {
      nodes: Array<{
        topic: {
          name: string;
        };
      }>;
    };
  };
}
