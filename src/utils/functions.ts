import { IRepositoryBackend } from '../interfaces';
import { projectsText } from './constants';

const loadMore = (array: Array<any>, range: number, add: number) => {
  return array?.length > range + add ? range + add : array?.length ?? range;
};

const goToUrl = (url: string) => window.open(url, '_blank');

const getMyAge = () => {
  const nasc = new Date(1999, 6, 10);
  const diff_ms = Date.now() - nasc.getTime();
  const age_dt = new Date(diff_ms);
  return Math.abs(age_dt.getUTCFullYear() - 1970);
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

export { loadMore, goToUrl, getMyAge, getProjectName, getProjectPriority };
