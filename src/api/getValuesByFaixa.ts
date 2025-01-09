import { ParametersType } from '../interfaces';

export const getValueByFaixas = (faixa: ParametersType, value: number) => {
  const aliquota = faixa?.aliquota ?? 0;
  const deducao = faixa?.deducao ?? 0;
  return value * (aliquota / 100) - deducao;
};
