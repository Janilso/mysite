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

export interface IRequestSalarioLiquido {
  salarioBruto: number;
  dependentes: number;
  pensaoAlimenticia: number;
  outrosDescontos: number;
  beneficios: number;
}

export interface IResponseSalarioLiquido {
  salarioLiquido: number;
  inss: number;
  irrf: number;
  outrosDescontos: number;
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

export type ParametersType = {
  aliquota?: number;
  deducao?: number;
};
export interface IBaseParameters {
  irrf: Record<string, ParametersType>;
  inss: Record<string, ParametersType>;
  salarioMinimo: number;
  dependentesIrrf: number;
}

export type DataCalculoIrrfType = {
  salario: number;
  inss: number;
  dependentes: number;
  pensaoAlimenticia: number;
};
