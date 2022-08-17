import type { NextApiRequest, NextApiResponse } from 'next';
import NextCors from 'nextjs-cors';
import { calculoSaqueAniversario } from '../../../src/api/calculoSaqueAniversario';
import {
  IErrorBodyData,
  IRequestCalcSaque,
  IResponseCalcSaque,
} from '../../../src/interfaces';

interface ExtendedNextApiRequest extends NextApiRequest {
  body: IRequestCalcSaque;
}

async function calculadoraFgts(
  request: ExtendedNextApiRequest,
  response: NextApiResponse<IResponseCalcSaque | IErrorBodyData>
) {
  const origin = process.env.CORS_ORIGIN?.split(',') ?? null;

  console.log('CORS_ORIGIN', process.env.CORS_ORIGIN);
  console.log('CORS_ORIGIN Split', process.env.CORS_ORIGIN?.split(','));
  console.log('origin', origin);
  console.log('origin', origin);

  await NextCors(request, response, {
    methods: ['POST'],
    origin,
    optionsSuccessStatus: 200,
  });

  if (request.method === 'POST') {
    const calculo = calculoSaqueAniversario(request.body);
    response.status(200).json(calculo);
  } else {
    response.status(405).json({ mensage: 'Method not allowed.' });
  }
}

export default calculadoraFgts;
