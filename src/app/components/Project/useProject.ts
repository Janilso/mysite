// import { Container } from './styles';

import { GetProjectName, ProjectTextType } from './types';

const useProject = () => {
  const projectsText: ProjectTextType = {
    calculo_saque_fgts: 'Cálculo Saque Aniversário FGTS',
    plans_gastos: 'Plans Gastos',
    'nlw_3-web': 'Happy - Frontend',
    'nlw_3-backend': 'Happy - Backend',
    janquiz: 'JanQuiz',
    calculadora_saque_aniversario: 'Calculadora Saque Aniversário',
  };
  const getProjectName: GetProjectName = (name: string = '') =>
    projectsText?.[name] ?? name;

  return { getProjectName };
};

export default useProject;
