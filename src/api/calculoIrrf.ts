import { DataCalculoIrrfType, IBaseParameters } from '../interfaces';
import { getValueByFaixas } from './getValuesByFaixa';

export const calculoIrrf = (
  data: DataCalculoIrrfType,
  parameters: IBaseParameters,
  descontoSimplificado?: boolean
): number => {
  const { irrf, dependentesIrrf } = parameters;
  const { salario, inss, dependentes, pensaoAlimenticia } = data;
  const [faixa1, faixa2, faixa3, faixa4, faixa5] = Object.keys(irrf).map((i) =>
    Number.parseFloat(i)
  );
  const [vFaixa1, vFaixa2, vFaixa3, vFaixa4, vFaixa5] = Object.values(irrf);
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
