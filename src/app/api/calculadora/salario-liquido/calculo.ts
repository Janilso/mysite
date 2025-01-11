import { BASE_PARAMETERS } from '@/app/utils/variables';
import { RequestSalarioLiquido, ResponseSalarioLiquido } from './types';
import { getInss } from './getInss';
import { getIrrf } from './getIrrf';

export function calculoSalarioLiquido(
  data: RequestSalarioLiquido
): ResponseSalarioLiquido {
  const {
    salarioBruto: salario,
    pensaoAlimenticia,
    dependentes,
    beneficios,
    outrosDescontos,
  } = data;
  const inss = getInss(BASE_PARAMETERS, salario);
  const irrfSimplificado = getIrrf(
    { salario, inss, dependentes, pensaoAlimenticia },
    BASE_PARAMETERS,
    true
  );
  const irrfInss = getIrrf(
    { salario, inss, dependentes, pensaoAlimenticia },
    BASE_PARAMETERS
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
