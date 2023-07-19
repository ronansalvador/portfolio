import Image from 'next/image';
const stacks = [
  'JavaScript',
  'TypeScript',
  'HTML',
  'CSS',
  'Tailwind',
  'React',
  'Redux',
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
];

export default function Home() {
  return (
    <div className='h-5/6 w-5/6 flex max-xl:flex-col max-sm:h-full max-sm:w-full'>
      <div className='flex items-center justify-center p-8 max-md:p-1'>
        <Image
          src='/ronan.jpeg'
          width='300'
          height='300'
          alt='Ronan Salvador'
          className='rounded-full h-62 w-62 max-lg:h-36 max-sm:w-36 opacity-0 scale-0 animate-surgir'
        ></Image>
      </div>
      <div className='bg-white bg-opacity-50 shadow-lg rounded-md flex flex-col flex-1 items-center justify-center p-40 max-sm:p-1'>
        <div className='p-2 max-sm:p-0 flex flex-1 flex-col items-center justify-center translate-x-full animate-surgir-direita'>
          <h1 className='text-blue text-lg font-bold max-sm:hidden'>
            Desenvovedor web full stack
          </h1>
          <p className='text-justify mt-4 max-sm:mt-1 '>
            Sou Desenvolvedor Web, com formação em ciências da computação,
            experiência com testes de funcionalidade, gerenciamento de equipes e
            apaixonado por criar aplicações que impactem a vida das pessoas.
          </p>
        </div>

        <h2 className='font-bold mt-4 max-sm:mt-1'>Stacks</h2>
        <ul className='flex flex-wrap items-center justify-center mt-4 max-sm:mt-1 opacity-0 -translate-x-full animate-surgir-esquerda'>
          {stacks.map((stack) => (
            <li
              key={stack}
              className='bg-verde text-white m-0.5 rounded p-2 max-sm:p-1'
            >
              {stack}
            </li>
          ))}
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
