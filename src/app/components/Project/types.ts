export type ProjectProps = {
  name: string;
  image: string;
  description: string;
  live: string;
  url: string;
  technologies: string[];
};

export type ProjectTextType = Record<string, string>;

export type GetProjectName = (name?: string) => string;
