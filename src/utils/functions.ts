import { IRepositoryBackend } from '../interfaces';
import { projectsText } from './constants';

const loadMore = (array: Array<any>, range: number, add: number) => {
  return array?.length > range + add ? range + add : array?.length ?? range;
};

const goToUrl = (url: string) => window.open(url, '_blank');

const getMyAge = () => {
  const birth = new Date(1999, 6, 10);
  const now = new Date();
  const age = now.getFullYear() - birth.getFullYear();

  const month = now.getMonth() - birth.getMonth();
  if (month < 0 || (month === 0 && now.getDate() < birth.getDate())) {
    return age - 1;
  }
  return age;
};

const getMyExperience = () => {
  const initDate = new Date(2017, 1, 1);
  const now = new Date();

  return now.getFullYear() - initDate.getFullYear();
};

const getProjectName = (name: string = '') => projectsText?.[name] ?? name;

const getProjectPriority = (data: IRepositoryBackend) => {
  const priority = data.repository.technologies.nodes.reduce((acc, tech) => {
    if (tech?.topic?.name?.startsWith('priority')) {
      const priprity = tech?.topic?.name?.split('priority')?.[1] ?? '0';
      return parseInt(priprity);
    }
    return acc;
  }, 0);
  return priority;
};

export {
  loadMore,
  goToUrl,
  getMyAge,
  getProjectName,
  getProjectPriority,
  getMyExperience,
};
