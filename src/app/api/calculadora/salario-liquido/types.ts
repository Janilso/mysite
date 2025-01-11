export interface RequestSalarioLiquido {
  salarioBruto: number;
  dependentes: number;
  pensaoAlimenticia: number;
  outrosDescontos: number;
  beneficios: number;
}

export interface ResponseSalarioLiquido {
  salarioLiquido: number;
  inss: number;
  irrf: number;
  outrosDescontos: number;
}

export type DataCalculoIrrf = {
  salario: number;
  inss: number;
  dependentes: number;
  pensaoAlimenticia: number;
};
