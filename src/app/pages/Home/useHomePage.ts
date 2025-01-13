import { useRef } from 'react';

const useHomePage = () => {
  const refInit = useRef<HTMLElement>(null);
  const refAbout = useRef<HTMLElement>(null);
  const refProjects = useRef<HTMLElement>(null);
  const refSkills = useRef<HTMLElement>(null);
  const refNetworks = useRef<HTMLElement>(null);

  return { refInit, refAbout, refProjects, refSkills, refNetworks };
};

export default useHomePage;
