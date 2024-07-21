import Image from 'next/image'

const stacks = [
  'JavaScript',
  'TypeScript',
  'HTML',
  'CSS',
  'Tailwind',
  'React',
  'Next.js',
  'Node.js',
  'Python',
  'Express.js',
  'Sequelize',
  'Docker',
  'Mocha (Chai e Sinon)',
  'Jest',
  'React Testing Library',
  'MySQL',
  'MongoDB',
  'Metodologias Ágeis',
]

export default function Home() {
  return (
    <div className="h-5/6 w-5/6 flex flex-col lg:flex-row max-sm:h-full max-sm:w-full">
      <div className="flex items-center justify-center p-8 md:p-4 max-md:p-2">
        <Image
          src="/ronan.jpeg"
          width={300}
          height={300}
          alt="Ronan Salvador"
          className="rounded-full h-62 w-62 max-sm:h-36 max-sm:w-36 md:h-48 md:w-48 lg:h-60 lg:w-60 opacity-0 scale-0 animate-surgir"
        />
      </div>
      <div className="bg-white bg-opacity-20 shadow-lg rounded-md flex flex-col flex-1 items-center justify-center p-8 md:p-4 max-sm:p-2">
        <div className="w-3/4 mx-auto flex flex-col items-center justify-center translate-x-full animate-surgir-direita">
          <h2 className="text-white font-bold mt-4 max-sm:mt-1 text-lg md:text-xl lg:text-2xl">
            Desenvolvedor web full stack
          </h2>
          <p className="text-white text-justify mt-4 max-sm:mt-1 text-sm md:text-base lg:text-lg">
            Sou Desenvolvedor Web Full Stack com formação em Ciências da
            Computação, possuo vasta experiência em testes e gerenciamento de
            equipes. Sou apaixonado por criar aplicações que impactam
            positivamente a vida das pessoas e acredito fortemente em um
            ambiente colaborativo. Adoro aprender e compartilhar conhecimentos,
            sempre buscando aprimorar minhas habilidades.
          </p>
        </div>

        <h2 className="text-white font-bold mt-4 max-sm:mt-1 text-lg md:text-xl lg:text-2xl">
          Stacks
        </h2>
        <ul className="w-3/4 mx-auto flex flex-wrap items-center justify-center mt-4 max-sm:mt-1 opacity-0 translate-x-full animate-surgir-esquerda max-sm:w-11/12">
          {stacks.map((stack) => (
            <li
              key={stack}
              className="bg-verde text-white m-0.5 rounded p-2 max-sm:p-1 text-xs md:text-sm lg:text-base"
            >
              {stack}
            </li>
          ))}
        </ul>

        <a
          href="/RonanFernandoSalvador.pdf"
          target="_blank"
          className="bg-white hover:scale-110 text-verde font-bold py-2 px-4 rounded mt-4 max-sm:mt-1"
        >
          Visualizar CV
        </a>
      </div>
    </div>
  )
}
