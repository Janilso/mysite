import { BaseParameters } from '@/app/utils/types';
import { getValueByFaixas } from '../../utils/getValueByFaixas';

export const getSaqueAniversario = (
  parameters: BaseParameters,
  saldo: number
) => {
  const { saqueAniversario } = parameters;
  const [faixa1, faixa2, faixa3, faixa4, faixa5, faixa6] = Object.keys(
    saqueAniversario.data
  ).map((i) => Number.parseFloat(i));
  const [vFaixa1, vFaixa2, vFaixa3, vFaixa4, vFaixa5, vFaixa6, vFaixa7] =
    Object.values(saqueAniversario.data);

  if (saldo <= faixa1) {
    return getValueByFaixas(vFaixa1, saldo, true);
  } else if (saldo > faixa1 && saldo <= faixa2) {
    return getValueByFaixas(vFaixa2, saldo, true);
  } else if (saldo > faixa2 && saldo <= faixa3) {
    return getValueByFaixas(vFaixa3, saldo, true);
  } else if (saldo > faixa3 && saldo <= faixa4) {
    return getValueByFaixas(vFaixa4, saldo, true);
  } else if (saldo > faixa4 && saldo <= faixa5) {
    return getValueByFaixas(vFaixa5, saldo, true);
  } else if (saldo > faixa5 && saldo <= faixa6) {
    return getValueByFaixas(vFaixa6, saldo, true);
  } else if (saldo >= faixa6) {
    return getValueByFaixas(vFaixa7, saldo, true);
  }

  return getValueByFaixas(vFaixa1, saldo, true);
};
