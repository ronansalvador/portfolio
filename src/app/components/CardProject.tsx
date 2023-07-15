'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { BsGithub } from 'react-icons/bs';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link?: string;
  stacks?: string[];
  width: number;
}

interface CardProjectProps {
  project: Project;
}

const CardProject: React.FC<CardProjectProps> = ({ project }) => {
  const [showLink, setShowLink] = useState(true);

  return (
    <>
      <div
        className='h-full'
        onMouseEnter={() => setShowLink(false)}
        onMouseLeave={() => setShowLink(true)}
      >
        {showLink ? (
          <div className='flex flex-col items-center justify-center h-full p-2'>
            <Image
              src={project.image}
              alt={project.title}
              width={project.width}
              height='100'
            />
            <h1 className='text-lg flex flex-1 items-end'>{project.title}</h1>
          </div>
        ) : (
          <div className='flex items-center justify-center flex-col p-2 h-full'>
            <p className='text-justify flex-1'>{project.description}</p>
            <a
              href={project.link}
              className='border-solid border-2 border-black p-2 rounded mt-2 hover:bg-black hover:text-white hover:scale-110 flex items-end'
            >
              <BsGithub className='w-6 h-6 mr-1' />
              Repositório
            </a>
          </div>
        )}
      </div>
      {/* {project.stacks?.map((stack, index) => (
        <span className='bg-green-200 p-1 m-1' key={index}>
          {stack}
        </span>
      ))} */}
    </>
  );
};

export default CardProject;
