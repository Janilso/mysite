import type { NextApiRequest, NextApiResponse } from 'next';
import NextCors from 'nextjs-cors';
import { calculoSalarioLiquido } from '../../../src/api/calculoSalarioLiquido';
import {
  IErrorBodyData,
  IRequestSalarioLiquido,
  IResponseSalarioLiquido,
} from '../../../src/interfaces';

interface ExtendedNextApiRequest extends NextApiRequest {
  body: IRequestSalarioLiquido;
}

async function calculadoraSalarioLiquido(
  request: ExtendedNextApiRequest,
  response: NextApiResponse<IResponseSalarioLiquido | IErrorBodyData>
) {
  const origin = process.env.CORS_ORIGIN?.split(',') ?? null;
  await NextCors(request, response, {
    methods: ['POST'],
    origin,
    optionsSuccessStatus: 200,
  });

  if (request.method === 'POST') {
    const calculo = calculoSalarioLiquido(request.body);
    response.status(200).json(calculo);
  } else {
    response.status(405).json({ mensage: 'Method not allowed.' });
  }
}

export default calculadoraSalarioLiquido;
