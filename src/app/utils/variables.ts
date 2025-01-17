import { ProjectProps } from '../components/Project/types';
import { BaseParameters, CorsOriginType } from './types';

const BASE_PARAMETERS: BaseParameters = JSON.parse(
  process.env?.BASE_PARAMETERS ?? '{}'
);
const CORS_ORIGIN: CorsOriginType = process.env.CORS_ORIGIN?.split(',') ?? [];

const GOOGLE_ANALYTICS: string = process.env.PUBLIC_GOOGLE_ANALYTICS ?? '';

const GOOGLE_ADSENSE: string = process.env.PUBLIC_GOOGLE_ADSENSE ?? '';

const GITHUB_PERSONAL_ACCESS_TOKEN: string =
  process.env.GITHUB_PERSONAL_ACCESS_TOKEN ?? '';

const NEXT_PUBLIC_IMAGE_CARDAPIO: string =
  process.env.NEXT_PUBLIC_IMAGE_CARDAPIO ?? '';

const ALLOWED_METHODS: string = process.env.ALLOWED_METHODS ?? '';

const ALLOWED_HEADERS: string = process.env.ALLOWED_HEADERS ?? '';

const PROJECTS: ProjectProps[] = JSON.parse(
  process.env.NEXT_PUBLIC_PROJECTS ?? ''
);

export {
  BASE_PARAMETERS,
  CORS_ORIGIN,
  GOOGLE_ANALYTICS,
  GOOGLE_ADSENSE,
  GITHUB_PERSONAL_ACCESS_TOKEN,
  NEXT_PUBLIC_IMAGE_CARDAPIO,
  ALLOWED_METHODS,
  ALLOWED_HEADERS,
  PROJECTS,
};
