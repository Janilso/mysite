'use client';
import { ButtonToTop, Header } from './components';
import useHomePage from './hooks/useHomePage';
import {
  SectionAbout,
  SectionInit,
  SectionNetworks,
  SectionSkills,
} from './pages/Home';

export default function Home() {
  const { refInit, refAbout, refSkills, refNetworks } = useHomePage();

  return (
    <>
      <Header
        panes={[
          { title: 'Início', ref: refInit },
          { title: 'Sobre', ref: refAbout },
          // { title: 'Projetos', ref: refInit },
          { title: 'Skills', ref: refSkills },
          { title: 'Redes', ref: refNetworks },
        ]}
      />
      <SectionInit ref={refInit} />
      <SectionAbout ref={refAbout} />
      <SectionSkills ref={refSkills} />
      <SectionNetworks ref={refNetworks} />
      <ButtonToTop />
    </>
  );
}
