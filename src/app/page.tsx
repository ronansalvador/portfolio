import Image from 'next/image';

export default function Home() {
  return (
    <div className='max-sm:bg-yellow-300 bg-red-400 h-5/6 w-5/6 flex max-sm:flex-col'>
      <div className='flex items-center justify-center p-8 max-sm:p-1'>
        <Image
          src='/ronan.jpeg'
          width='300'
          height='300'
          alt='Ronan Salvador'
          className='rounded-full h-72 w-72 max-sm:h-36 max-sm:w-36'
        ></Image>
      </div>
      <div className='bg-green-300 flex flex-col flex-1 items-center justify-center'>
        <h1>Desenvovedor web full stack</h1>
        <h2>Descrição</h2>
        <h2>Download CV</h2>
      </div>
    </div>
  );
}
