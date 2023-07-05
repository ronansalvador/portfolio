import React from 'react';

import ProjectCarousel from '../components/ProjectCarousel';
const projects = [
  {
    id: 1,
    title: 'Projeto 1',
    description: 'Descrição do projeto 1',
    image: '/project1.jpg',
  },
  {
    id: 2,
    title: 'Projeto 2',
    description: 'Descrição do projeto 2',
    image: '/project2.jpg',
  },
  // Adicione mais projetos conforme necessário
];

function page() {
  return (
    <>
      <div className='container mx-auto p-4'>
        <h1 className='text-2xl font-bold mb-4'>Meus Projetos</h1>
        <ProjectCarousel projects={projects} />
      </div>
      <p>
        Card para cada projeto com breve descrição e stack e botao para
        repositorio
      </p>
      {/* https://portifolio-virid-gamma.vercel.app/projects - pertfolio Edmilson */}
    </>
  );
}

export default page;
