type Technology = {
  nodes: {
    topic: {
      name: string;
    };
  }[];
};
export interface RepositoryBackend {
  repository: {
    name: string;
    technologies: Technology;
  };
}

export type GetRepositoresType = {
  search?: {
    repositories?: RepositoryBackend[];
  };
};
