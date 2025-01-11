import { calculoSaqueAniversario } from './calculo';
import { RequestSaqueAniversario } from './types';

export async function POST(request: Request) {
  const body = (await request.json()) as RequestSaqueAniversario;
  const calculo = calculoSaqueAniversario(body);
  return Response.json(calculo, {
    status: 200,
  });
}
