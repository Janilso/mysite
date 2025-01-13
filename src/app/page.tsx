'use client';
import { ButtonToTop, Header } from './components';
import useHomePage from './hooks/useHomePage';
import { SectionInit } from './pages/Home';

export default function Home() {
  const { refInit } = useHomePage();

  return (
    <>
      <Header
        panes={[
          { title: 'Início', ref: refInit },
          { title: 'Sobre', ref: refInit },
          { title: 'Projetos', ref: refInit },
          { title: 'Skills', ref: refInit },
          { title: 'Redes', ref: refInit },
        ]}
      />
      <SectionInit ref={refInit} />
      <ButtonToTop />
    </>
  );
}
