import {
  IBaseParameters,
  IRequestSalarioLiquido,
  IResponseSalarioLiquido,
  ParametersType,
} from '../interfaces';

const parameters: IBaseParameters = JSON.parse(
  process.env.BASE_PARAMETERS as string
);

const getValueInss = (faixa: ParametersType, salario: number) => {
  const aliquota = faixa?.aliquota ?? 0;
  const deducao = faixa?.deducao ?? 0;
  return salario * (aliquota / 100) - deducao;
};

const calculoInss = (salario: number): number => {
  const { inss } = parameters;
  const [faixa1, faixa2, faixa3, faixa4] = Object.keys(inss).map((i) =>
    Number.parseFloat(i)
  );
  const [vFaixa1, vFaixa2, vFaixa3, vFaixa4] = Object.values(inss);
  if (salario <= faixa1) {
    return getValueInss(vFaixa1, salario);
  } else if (salario > faixa1 && salario <= faixa2) {
    return getValueInss(vFaixa2, salario);
  } else if (salario > faixa2 && salario <= faixa3) {
    return getValueInss(vFaixa3, salario);
  } else if (salario > faixa3) {
    const teto = getValueInss(vFaixa4, faixa4);
    const inss = getValueInss(vFaixa4, salario);
    return inss > teto ? teto : inss;
  }
  return getValueInss(vFaixa1, salario);
};

export function calculoSalarioLiquido(
  data: IRequestSalarioLiquido
): IResponseSalarioLiquido {
  const { salarioBruto } = data;
  const inss = calculoInss(salarioBruto);
  return {
    inss,
    irff: 0,
    outrosDescontos: 0,
    salarioLiquido: 0,
  };
}
