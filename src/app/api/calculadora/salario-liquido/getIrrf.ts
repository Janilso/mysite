import { BaseParameters } from '@/app/utils/types';
import { DataCalculoIrrf } from './types';
import { getValueByFaixas } from '../../utils/getValueByFaixas';

export const getIrrf = (
  data: DataCalculoIrrf,
  parameters: BaseParameters,
  descontoSimplificado?: boolean
): number => {
  const { irrf } = parameters;
  const dependentesIrrf = irrf.outros?.dependentes ?? 0;
  const { salario, inss, dependentes, pensaoAlimenticia } = data;
  const [faixa1, faixa2, faixa3, faixa4, faixa5] = Object.keys(irrf.data).map(
    (i) => Number.parseFloat(i)
  );
  const [vFaixa1, vFaixa2, vFaixa3, vFaixa4, vFaixa5] = Object.values(
    irrf.data
  );
  const vDescontoSimplificado = 0.25 * faixa1;
  const vDescontoDependentes = dependentesIrrf * dependentes;

  const base =
    salario -
    (descontoSimplificado ? vDescontoSimplificado : inss) -
    vDescontoDependentes -
    pensaoAlimenticia;

  if (base <= faixa1) {
    return getValueByFaixas(vFaixa1, base);
  } else if (base > faixa1 && base <= faixa2) {
    return getValueByFaixas(vFaixa2, base);
  } else if (base > faixa2 && base <= faixa3) {
    return getValueByFaixas(vFaixa3, base);
  } else if (base > faixa3 && base <= faixa4) {
    return getValueByFaixas(vFaixa4, base);
  } else if (base >= faixa5) {
    return getValueByFaixas(vFaixa5, base);
  }

  return getValueByFaixas(vFaixa1, base);
};
