import {
  IBaseParameters,
  IRequestSalarioLiquido,
  IResponseSalarioLiquido,
} from '../interfaces';
import { calculoInss } from './calculoInss';
import { calculoIrrf } from './calculoIrrf';

const parameters: IBaseParameters = JSON.parse(
  process.env.BASE_PARAMETERS as string
);

export function calculoSalarioLiquido(
  data: IRequestSalarioLiquido
): IResponseSalarioLiquido {
  const {
    salarioBruto: salario,
    pensaoAlimenticia,
    dependentes,
    beneficios,
    outrosDescontos,
  } = data;
  const inss = calculoInss(parameters, salario);
  const irrfSimplificado = calculoIrrf(
    { salario, inss, dependentes, pensaoAlimenticia },
    parameters,
    true
  );
  const irrfInss = calculoIrrf(
    { salario, inss, dependentes, pensaoAlimenticia },
    parameters
  );
  const irrf = Math.min(irrfSimplificado, irrfInss);
  const salarioLiquido = salario - inss - irrf - outrosDescontos + beneficios;

  return {
    inss,
    irrf,
    outrosDescontos,
    salarioLiquido,
  };
}
