import type { NextApiRequest, NextApiResponse } from 'next';
import { calculoSaqueAniversario } from '../../../src/api/calculoSaqueAniversario';
import {
  IErrorBodyData,
  IRequestCalcSaque,
  IResponseCalcSaque,
} from '../../../src/interfaces';

interface ExtendedNextApiRequest extends NextApiRequest {
  body: IRequestCalcSaque;
}

const calculadoraFgts = (
  request: ExtendedNextApiRequest,
  response: NextApiResponse<IResponseCalcSaque | IErrorBodyData>
) => {
  if (request.method === 'POST') {
    const calculo = calculoSaqueAniversario(request.body);
    response.status(200).json(calculo);
  } else {
    response.status(405).json({ mensage: 'Method not allowed.' });
  }
};

export default calculadoraFgts;
