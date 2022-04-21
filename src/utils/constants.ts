import icon from '../assets/icons';

const networks = [
  {
    image: icon.linkedin,
    link: 'https://www.linkedin.com/in/janilso-rodrigues/',
  },
  {
    image: icon.github,
    link: 'https://github.com/Janilso',
  },
  {
    image: icon.gmail,
    link: 'mailto:janilsorodrigues10@gmail.com',
  },
];

const skillsText = {
  css: 'CSS 3',
  dart: 'Dart',
  flutter: 'Flutter',
  git: 'Git',
  html: 'HTML 5',
  javascript: 'Javascript',
  nextjs: 'NextJS',
  reactjs: 'ReactJS',
  sass: 'Sass',
  typescript: 'Typescript',
};

type tplotOptions = {
  [key: string]: string;
};

const projectsText: tplotOptions = {
  calculo_saque_fgts: 'Cálculo Saque Aniversário FGTS',
  plans_gastos: 'Plans Gastos',
  'nlw_3-web': 'Happy - Frontend',
  'nlw_3-backend': 'Happy - Backend',
  janquiz: 'JanQuiz',
};

export { networks, skillsText, projectsText };
