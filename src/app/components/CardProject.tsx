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
  const handleHover = () => {
    setShowLink(!showLink);
  };
  return (
    <div onMouseEnter={handleHover} onMouseLeave={handleHover}>
      {showLink ? (
        <Image src='/ronan.jpeg' alt={project.title} width='100' height='100' />
      ) : (
        <>
          <h1 className='text-lg'>{project.title}</h1>
          <p>{project.description}</p>
          <a href={project.link}>Repositorio</a>
        </>
      )}
    </div>
  );
};

export default CardProject;
