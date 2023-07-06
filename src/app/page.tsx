import Image from 'next/image';

export default function Home() {
  return (
    <div className='h-5/6 w-5/6 flex max-xl:flex-col max-sm:h-full max-sm:w-full'>
      <div className='flex items-center justify-center p-8 max-md:p-1'>
        <Image
          src='/ronan.jpeg'
          width='300'
          height='300'
          alt='Ronan Salvador'
          className='rounded-full h-62 w-62 max-lg:h-36 max-sm:w-36'
        ></Image>
      </div>
      <div className='bg-white shadow-lg rounded-md flex flex-col flex-1 items-center justify-center p-40 max-sm:p-1'>
        <div className='p-2 max-sm:p-0 flex flex-1 flex-col items-center justify-center'>
          <h1 className='font-bold max-sm:hidden'>
            Desenvovedor web full stack
          </h1>
          <p className='text-justify mt-4 max-sm:mt-1'>
            Sou Desenvolvedor Web, com formação em ciências da computação,
            experiência com testes de funcionalidade, gerenciamento de equipes e
            apaixonado por criar aplicações que impactem a vida das pessoas.
          </p>
        </div>

        <h2 className='font-bold mt-4 max-sm:mt-1'>Stacks</h2>
        <ul className='flex flex-wrap items-center justify-center mt-4 max-sm:mt-1'>
          <li className='bg-green-400 m-0.5 rounded p-2 max-sm:p-1'>
            JavaScript
          </li>
          <li className='bg-green-400 m-0.5 rounded p-2 max-sm:p-1'>
            TypeScript
          </li>
          <li className='bg-green-400 m-0.5 rounded p-2 max-sm:p-1'>HTML</li>
          <li className='bg-green-400 m-0.5 rounded p-2 max-sm:p-1'>CSS</li>
          <li className='bg-green-400 m-0.5 rounded p-2 max-sm:p-1'>
            Tailwind
          </li>
          <li className='bg-green-400 m-0.5 rounded p-2 max-sm:p-1'>React</li>
          <li className='bg-green-400 m-0.5 rounded p-2 max-sm:p-1'>Redux</li>
          <li className='bg-green-400 m-0.5 rounded p-2 max-sm:p-1'>Next.js</li>
          <li className='bg-green-400 m-0.5 rounded p-2 max-sm:p-1'>Node.js</li>
          <li className='bg-green-400 m-0.5 rounded p-2 max-sm:p-1'>Python</li>
          <li className='bg-green-400 m-0.5 rounded p-2 max-sm:p-1'>
            Express.js
          </li>
          <li className='bg-green-400 m-0.5 rounded p-2 max-sm:p-1'>
            Sequelize
          </li>
          <li className='bg-green-400 m-0.5 rounded p-2 max-sm:p-1'>Docker</li>
          <li className='bg-green-400 m-0.5 rounded p-2 max-sm:p-1'>
            Mocha (Chai e Sinon)
          </li>
          <li className='bg-green-400 m-0.5 rounded p-2 max-sm:p-1'>Jest</li>
          <li className='bg-green-400 m-0.5 rounded p-2 max-sm:p-1'>
            React Testing Library
          </li>
          <li className='bg-green-400 m-0.5 rounded p-2'>MySQL</li>
          <li className='bg-green-400 m-0.5 rounded p-2'>MongoDB</li>
          <li className='bg-green-400 m-0.5 rounded p-2'>Metodologias Ágeis</li>
        </ul>

        <a
          href='/RonanFernandoSalvador.pdf'
          target='_blank'
          rel='noopener noreferrer'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 max-sm:mt-1'
        >
          Visualizar CV
        </a>
      </div>
    </div>
  );
}
