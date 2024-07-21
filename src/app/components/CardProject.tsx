'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { BsGithub } from 'react-icons/bs'
import { IoRocketSharp } from 'react-icons/io5'

export interface Project {
  id: string
  titulo: string
  descricao: string
  deploy: string
  image: {
    fields: {
      title: string
      description: string
      file: {
        url: string
        details: {
          image: {
            width: number
            height: number
          }
        }
      }
    }
  }
  repositorio: string
}

interface CardProjectProps {
  project: Project
}

const CardProject: React.FC<CardProjectProps> = ({ project }) => {
  const [showLink, setShowLink] = useState(true)

  return (
    <div
      className="h-full overflow-hidden flex flex-col border rounded-lg shadow-lg transition-all duration-300"
      onMouseEnter={() => setShowLink(false)}
      onMouseLeave={() => setShowLink(true)}
    >
      {showLink ? (
        <div className="flex flex-col items-center justify-center h-full p-2 overflow-hidden">
          <Image
            // src={project.image}
            // alt={project.titulo}
            // width={project.width}
            // height="100"
            // className="object-cover"
            src={`https:${project.image.fields.file.url}`}
            alt={project.image.fields.description}
            width={200}
            height={100}
          />
          <h1 className="text-lg flex flex-1 items-end mt-2">
            {project.titulo}
          </h1>
        </div>
      ) : (
        <div className="flex items-center justify-center flex-col p-2 h-full overflow-hidden">
          <p className="text-justify flex-1 overflow-hidden text-ellipsis">
            {project.descricao}
          </p>
          <div className="flex gap-2">
            {project.repositorio && (
              <a
                href={project.repositorio}
                className="border-solid border-2 border-black p-2 rounded mt-2 hover:bg-black hover:text-white hover:scale-110 flex items-center"
              >
                <BsGithub className="w-6 h-6 mr-1" />
                Repositório
              </a>
            )}
            {project.deploy && (
              <a
                href={project.deploy}
                className="border-solid border-2 border-black p-2 rounded mt-2 hover:bg-black hover:text-white hover:scale-110 flex items-center"
              >
                <IoRocketSharp className="w-6 h-6 mr-1" />
                Deploy
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default CardProject
