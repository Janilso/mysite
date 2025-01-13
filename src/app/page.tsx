'use client';
import { ButtonToTop, Header } from './components';
import {
  SectionAbout,
  SectionInit,
  SectionNetworks,
  SectionProject,
  SectionSkills,
} from './pages/Home';
import useHomePage from './pages/Home/useHomePage';

export default function Home() {
  const { refInit, refAbout, refProjects, refSkills, refNetworks } =
    useHomePage();

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
