export type FonteType = {
  titulo?: string;
  link?: string;
};

export type TabelValuesType = {
  aliquota?: number;
  deducao?: number;
  adicional?: number;
};

type TabelData = {
  data: Record<string, TabelValuesType>;
  fontes: FonteType[];
  outros?: Record<string, number>;
};

export type BaseParameters = {
  irrf: TabelData;
  inss: TabelData;
  saqueAniversario: TabelData;
};

export type CorsOriginType = string[];
