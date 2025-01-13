'use client';
import { ButtonToTop, Header } from './components';
import useHomePage from './hooks/useHomePage';
import { SectionAbout, SectionInit, SectionSkills } from './pages/Home';

export default function Home() {
  const { refInit, refAbout, refSkills } = useHomePage();

  return (
    <>
      <Header
        panes={[
          { title: 'Início', ref: refInit },
          { title: 'Sobre', ref: refAbout },
          // { title: 'Projetos', ref: refInit },
          { title: 'Skills', ref: refSkills },
          // { title: 'Redes', ref: refInit },
        ]}
      />
      <SectionInit ref={refInit} />
      <SectionAbout ref={refAbout} />
      <SectionSkills ref={refSkills} />
      <ButtonToTop />
    </>
  );
}
