'use client';
import { useRef } from 'react';
import { ButtonToTop, Header } from './components';
import {
  SectionAbout,
  SectionInit,
  SectionNetworks,
  SectionProject,
  SectionSkills,
} from './pages/Home';

export default function Home() {
  const refInit = useRef<HTMLElement>(null);
  const refAbout = useRef<HTMLElement>(null);
  const refProjects = useRef<HTMLElement>(null);
  const refSkills = useRef<HTMLElement>(null);
  const refNetworks = useRef<HTMLElement>(null);

  return (
    <>
      <Header
        panes={[
          { title: 'Início', ref: refInit },
          { title: 'Sobre', ref: refAbout },
          { title: 'Projetos', ref: refProjects },
          { title: 'Skills', ref: refSkills },
          { title: 'Redes', ref: refNetworks },
        ]}
      />
      <SectionInit ref={refInit} />
      <SectionAbout ref={refAbout} />
      <SectionProject ref={refProjects} />
      <SectionSkills ref={refSkills} />
      <SectionNetworks ref={refNetworks} />
      <ButtonToTop />
    </>
  );
}
