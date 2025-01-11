import { calculoSalarioLiquido } from './calculo';
import { RequestSalarioLiquido } from './types';

export async function POST(request: Request) {
  const body = (await request.json()) as RequestSalarioLiquido;
  const calculo = calculoSalarioLiquido(body);
  return Response.json(calculo, {
    status: 200,
  });
}
