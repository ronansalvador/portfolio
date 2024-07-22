import React from 'react'

import CardProject from '../../components/CardProject'
import { frontProjects } from '../projetos/front'
import { getContentfulData } from '@/app/utils/getContentfulData'

async function page() {
  const promises = [getContentfulData('projetosFront')]

  const [projectsValues] = await Promise.all(promises)

  const projetos = projectsValues.entries

  return (
    <div className="h-5/6 w-5/6 flex flex-col items-center max-sm:h-full max-sm:w-full">
      <h1 className="text-white font-bold mt-4 max-sm:mt-1 text-lg md:text-xl lg:text-2xl">
        Meus Projetos
      </h1>
      {/* <div className="flex items-center justify-evenly w-2/3 p-1 rounded-lg max-sm:w-full bg-white bg-opacity-50">
        <button className="bg-gray-900 p-2 text-white rounded-lg hover:scale-125 max-sm:text-xs">
          Todos
        </button>
        <button className="bg-gray-900 p-2 text-white rounded-lg hover:scale-125 max-sm:text-xs">
          Front-end
        </button>
        <button className="bg-gray-900 p-2 text-white rounded-lg hover:scale-125 max-sm:text-xs">
          Back-end
        </button>
        <button className="bg-gray-900 p-2 text-white rounded-lg hover:scale-125 max-sm:text-xs">
          Full-Stack
        </button>
      </div> */}
      <div className="container mx-auto p-4 m-2 flex md:flex-row flex-wrap items-center justify-center">
        {projetos.map(({ fields }) => (
          <div
            key={fields.id}
            className="w-full sm:w-1/4 min-w-[300px] max-w-[600px] h-40 bg-white bg-opacity-50 shadow-lg  rounded-lg m-3 translate-x-full animate-surgir"
          >
            <CardProject project={fields} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default page
