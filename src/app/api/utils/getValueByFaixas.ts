import { TabelValuesType } from '@/app/utils/types';

export const getValueByFaixas = (
  faixa: TabelValuesType,
  value: number,
  adicao?: boolean
) => {
  const aliquota = faixa?.aliquota ?? 0;
  const deducao = faixa?.deducao ?? 0;
  const adicional = faixa?.adicional ?? 0;
  const calculo = value * (aliquota / 100);

  return adicao ? calculo + adicional : calculo - deducao;
};
