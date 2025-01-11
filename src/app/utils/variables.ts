import { BaseParameters, CorsOriginType } from './types';

const BASE_PARAMETERS: BaseParameters = JSON.parse(
  process.env.BASE_PARAMETERS ?? ''
);
const CORS_ORIGIN: CorsOriginType = process.env.CORS_ORIGIN?.split(',') ?? [];
const PUBLIC_GOOGLE_ANALYTICS: string =
  process.env.PUBLIC_GOOGLE_ANALYTICS ?? '';
const PUBLIC_GOOGLE_ADSENSE: string = process.env.PUBLIC_GOOGLE_ADSENSE ?? '';
const GITHUB_PERSONAL_ACCESS_TOKEN: string =
  process.env.GITHUB_PERSONAL_ACCESS_TOKEN ?? '';
const NEXT_PUBLIC_IMAGE_CARDAPIO: string =
  process.env.NEXT_PUBLIC_IMAGE_CARDAPIO ?? '';

export {
  BASE_PARAMETERS,
  CORS_ORIGIN,
  PUBLIC_GOOGLE_ANALYTICS,
  PUBLIC_GOOGLE_ADSENSE,
  GITHUB_PERSONAL_ACCESS_TOKEN,
  NEXT_PUBLIC_IMAGE_CARDAPIO,
};
