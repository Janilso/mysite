import { BaseParameters } from '@/app/utils/types';
import { getValueByFaixas } from '../../utils/getValueByFaixas';

export const getInss = (
  parameters: BaseParameters,
  salario: number
): number => {
  const { inss } = parameters;
  const [faixa1, faixa2, faixa3, faixa4] = Object.keys(inss.data).map((i) =>
    Number.parseFloat(i)
  );
  const [vFaixa1, vFaixa2, vFaixa3, vFaixa4] = Object.values(inss.data);

  if (salario <= faixa1) {
    return getValueByFaixas(vFaixa1, salario);
  } else if (salario > faixa1 && salario <= faixa2) {
    return getValueByFaixas(vFaixa2, salario);
  } else if (salario > faixa2 && salario <= faixa3) {
    return getValueByFaixas(vFaixa3, salario);
  } else if (salario > faixa3) {
    const teto = getValueByFaixas(vFaixa4, faixa4);
    const inss = getValueByFaixas(vFaixa4, salario);
    return inss > teto ? teto : inss;
  }
  return getValueByFaixas(vFaixa1, salario);
};
