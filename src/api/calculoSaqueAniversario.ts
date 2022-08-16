import { IRequestCalcSaque, IResponseCalcSaque } from '../interfaces';

const getValueTable = (balance: number, isAliquota: boolean) => {
  if (balance <= 500) {
    return isAliquota ? 0.5 : 0;
  } else if (balance > 500 && balance <= 1000) {
    return isAliquota ? 0.4 : 50;
  } else if (balance > 1000 && balance <= 5000) {
    return isAliquota ? 0.3 : 150;
  } else if (balance > 5000 && balance <= 10000) {
    return isAliquota ? 0.2 : 650;
  } else if (balance > 10000 && balance <= 15000) {
    return isAliquota ? 0.15 : 1150;
  } else if (balance > 15000 && balance <= 20000) {
    return isAliquota ? 0.1 : 1900;
  }
  return isAliquota ? 0.05 : 2900;
};

const valueSaque = (balance: number) => {
  const aliquota = getValueTable(balance, true);
  const parcelaAdicional = getValueTable(balance, false);
  return balance * aliquota + parcelaAdicional;
};

export function calculoSaqueAniversario(
  data: IRequestCalcSaque
): IResponseCalcSaque {
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
  const forecast = valueSaque(sumTotalFutureFgts);

  return {
    saldoFgts: balanceFgts,
    somaLancamentos: totalNextsFgts,
    saldoFuturoTotal: sumTotalFutureFgts,
    previsaoSaque: forecast,
  };
}
