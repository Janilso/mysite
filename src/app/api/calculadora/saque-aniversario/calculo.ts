import { BASE_PARAMETERS } from '@/app/utils/variables';
import { getSaqueAniversario } from './getSaqueAniversario';
import { RequestSaqueAniversario, ResponseSaqueAniversario } from './types';

export function calculoSaqueAniversario(
  data: RequestSaqueAniversario
): ResponseSaqueAniversario {
  const {
    saldoFgts: balanceFgts,
    salario: wage,
    mesNascimento: monthBirthday,
  } = data;

  const fgtsBase = wage * 0.08;
  const dateNow = new Date();
  const monthNow = dateNow.getMonth() + 1;

  const isNextYear = monthBirthday <= monthNow;

  const diffMonths =
    (isNextYear ? 12 - (monthNow - monthBirthday) : monthBirthday - monthNow) -
    1;

  const totalNextsFgts = fgtsBase * diffMonths;
  const sumTotalFutureFgts = balanceFgts + totalNextsFgts;
  const forecast = getSaqueAniversario(BASE_PARAMETERS, sumTotalFutureFgts);

  return {
    previsaoSaque: forecast,
    saldoFgts: balanceFgts,
    saldoFuturoTotal: sumTotalFutureFgts,
    somaLancamentos: totalNextsFgts,
  };
}
