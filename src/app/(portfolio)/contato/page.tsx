import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { FaFileAlt } from 'react-icons/fa'

function page() {
  return (
    <div className="flex flex-col items-center gap-10 ">
      <h2 className="text-white font-bold mt-4 max-sm:mt-1 text-lg md:text-xl lg:text-2xl">
        Você pode me encontrar em:
      </h2>

      <div className="flex flex-col md:flex-row flex-grow flex-1 justify-center items-center gap-6">
        <a
          href="https://github.com/ronansalvador"
          target="_blank"
          className="p-4 rounded mt-2 flex flex-col items-center bg-white text-white bg-opacity-50 shadow-lg hover:scale-110 hover:text-verde hover:bg-opacity-100 gap-2"
        >
          <BsGithub className="w-10 h-10 mr-1" />
          ronansalvador
        </a>

        <a
          href="https://github.com/ronansalvador"
          target="_blank"
          className="p-4 rounded mt-2 flex flex-col items-center bg-white text-white bg-opacity-50 shadow-lg hover:scale-110 hover:text-verde hover:bg-opacity-100 gap-2"
        >
          <BsLinkedin className="w-10 h-10 mr-1" />
          @ronansalvador
        </a>
        <a
          href="mailto:ronansalvador@yahoo.com.br"
          target="_blank"
          className="p-4 rounded mt-2 flex flex-col items-center bg-white text-white bg-opacity-50 shadow-lg hover:scale-110 hover:text-verde hover:bg-opacity-100 gap-2"
        >
          <MdEmail className="w-10 h-10 mr-1" />
          ronansalvador@yahoo.com.br
        </a>
      </div>
      <a
        href="/RonanFernandoSalvador.pdf"
        target="_blank"
        className="p-4 rounded mt-2 flex flex-col items-center bg-white text-white bg-opacity-50 shadow-lg hover:scale-110 hover:text-verde hover:bg-opacity-100 gap-2"
      >
        <FaFileAlt className="w-10 h-10 mr-1" />
        Visualizar CV
      </a>
    </div>
  )
}

export default page
