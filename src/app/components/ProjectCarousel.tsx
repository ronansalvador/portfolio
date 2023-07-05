import React from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface ProjectCarouselProps {
  projects: Project[];
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ projects }) => {
  return (
    <>
      {projects.map((project) => (
        <div key={project.id}>
          <img src='assets/1.jpeg' />
          <p className='legend'>{project.title}</p>
        </div>
      ))}
    </>
  );
};

export default ProjectCarousel;
