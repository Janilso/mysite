import { ProjectProps } from '@/app/components/Project/types';
import { loadMore } from '@/app/utils/functions';
import { useRef, useState } from 'react';

const QTD_RANGE = 3;

const useSectionProject = () => {
  const projects: ProjectProps[] = [
    // {
    //   name: 'Calculadora Saque Aniversário',
    //   description:
    //     'O Site calcular uma previsão do Saque Aniversário de sua conta do FGTS',
    //   image:
    //     'https://repository-images.githubusercontent.com/520591211/67825d13-6b10-4e97-9f08-7cbd180a92fb',
    //   live: 'https://fgts.janilso.com.br/?fromMain=true',
    //   technologies: ['Reactjs', 'Typescript'],
    //   url: 'https://github.com/Janilso/calculadora_saque_aniversario',
    // },
    // {
    //   name: 'Plans Gastos',
    //   description:
    //     'O aplicativo PlansGastos visa controlar seus ganhos e gastos futuros.',
    //   image:
    //     'https://repository-images.githubusercontent.com/428915867/14b2c8ff-c850-46f3-902c-ad8890356d27',
    //   live: 'https://play.google.com/store/apps/details?id=com.janilsorodrigues.plans_gastos',
    //   technologies: ['Dart', 'Flutter'],
    //   url: 'https://github.com/Janilso/plans_gastos',
    // },
    // {
    //   name: 'Cálculo Saque Aniversário FGTS',
    //   description:
    //     'O aplicativo calcula uma previsão de quanto será o saque do saldo de uma conta do FGTS na modalidade Saque Aniversário.',
    //   image:
    //     'https://repository-images.githubusercontent.com/458294750/da869863-ab10-4015-8f80-8ea364ee1938',
    //   live: 'https://play.google.com/store/apps/details?id=com.janilsorodrigues.calculo_saque_aniversario',
    //   technologies: ['Dart', 'Flutter'],
    //   url: 'https://github.com/Janilso/calculo_saque_fgts',
    // },
  ];

  const [range, setRange] = useState(QTD_RANGE);
  const refItemProject = useRef<HTMLDivElement>(null);
  const refContainerProjects = useRef<HTMLDivElement>(null);

  const newRange = loadMore(projects, range, QTD_RANGE);

  const handleClickMore = () => {
    setRange((prevRange) =>
      prevRange < projects?.length ? newRange : QTD_RANGE
    );
  };

  return {
    projects,
    range,
    newRange,
    setRange,
    refItemProject,
    handleClickMore,
    refContainerProjects,
  };
};

export default useSectionProject;
