'use client';
import Image from 'next/image';
import React, { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  link?: string;
  stacks?: string[];
}

interface CardProjectProps {
  project: Project;
}

const CardProject: React.FC<CardProjectProps> = ({ project }) => {
  const [showLink, setShowLink] = useState(true);

  return (
    <div
      className='h-full'
      onMouseEnter={() => setShowLink(false)}
      onMouseLeave={() => setShowLink(true)}
    >
      {showLink ? (
        <>
          <Image
            src='/ronan.jpeg'
            alt={project.title}
            width='100'
            height='100'
          />
          <h1 className='text-lg'>{project.title}</h1>
        </>
      ) : (
        <div className='flex items-center justify-center flex-col p-2'>
          <p>{project.description}</p>
          <a
            href={project.link}
            className='border-solid border-2 border-black p-2 rounded'
          >
            Repositorio
          </a>
        </div>
      )}
    </div>
  );
};

export default CardProject;
