import React from 'react';

import CardProject from '../components/CardProject';
const projects = [
  {
    id: 1,
    title: 'App de Receitas',
    description:
      'Neste projeto foi desenvolvido um app de receitas, utilizando React: Hooks e Context API! Nele é possível ver, buscar, filtrar, favoritar e acompanhar o progresso de preparação de receitas.',
    link: 'https://github.com/ronansalvador/projeto-app-receitas',
  },
  {
    id: 2,
    title: 'Projeto 2',
    description: 'Descrição do projeto 2',
    image: '/project2.jpg',
  },
  {
    id: 2,
    title: 'Projeto 2',
    description: 'Descrição do projeto 2',
    image: '/project2.jpg',
  },
  {
    id: 2,
    title: 'Projeto 2',
    description: 'Descrição do projeto 2',
    image: '/project2.jpg',
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
    <div className='h-5/6 w-5/6 flex flex-col items-center max-sm:h-full max-sm:w-full'>
      <h1 className='text-2xl font-bold mb-4'>Meus Projetos</h1>
      <div className='flex items-center justify-evenly border-solid border-2 border-sky-500 w-2/3 p-1 rounded-lg max-sm:w-full'>
        <button className='bg-gray-900 p-2 text-white rounded-lg hover:scale-125 max-sm:text-xs'>
          Todos
        </button>
        <button className='bg-gray-900 p-2 text-white rounded-lg hover:scale-125 max-sm:text-xs'>
          Front-end
        </button>
        <button className='bg-gray-900 p-2 text-white rounded-lg hover:scale-125 max-sm:text-xs'>
          Back-end
        </button>
        <button className='bg-gray-900 p-2 text-white rounded-lg hover:scale-125 max-sm:text-xs'>
          Full-Stack
        </button>
      </div>
      <div className='container mx-auto p-4 bg-white shadow-lg m-2 flex flex-wrap items-center justify-center'>
        {projects.map((project) => (
          <div key={project.id} className='w-1/3 bg-red-400 rounded-lg'>
            <CardProject project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
