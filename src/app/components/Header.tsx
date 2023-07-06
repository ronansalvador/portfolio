'use client';
import { useState } from 'react';
import { Dialog, Popover } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className='bg-white'>
      <nav
        className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'
        aria-label='Global'
      >
        <div className='flex lg:flex-1 text-black'>
          <a href='/' className='-m-1.5 p-1.5'>
            <span className='font-sans'>Ronan Salvador</span>
          </a>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
        <Popover.Group className='hidden lg:flex lg:gap-x-12'>
          <a href='/' className='text-sm font-semibold leading-6 text-gray-900'>
            Sobre
          </a>
          <a
            href='/projetos'
            className='text-sm font-semibold leading-6 text-gray-900'
          >
            Projetos
          </a>
          <a
            href='/contato'
            className='text-sm font-semibold leading-6 text-gray-900'
          >
            Contato
          </a>
        </Popover.Group>
        <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
          <a href='https://www.linkedin.com/in/ronansalvador/'>
            <BsLinkedin className='w-8 h-8 mr-6 hover:scale-150' />
          </a>
          <a href='https://github.com/ronansalvador'>
            <BsGithub className='w-8 h-8 hover:scale-150' />
          </a>
        </div>
      </nav>
      <Dialog
        as='div'
        className='lg:hidden'
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className='fixed inset-0 z-10' />
        <Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between text-black'>
            <a href='/' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Ronan Salvador</span>
            </a>
            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                <a
                  href='/'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  Sobre
                </a>
                <a
                  href='/projetos'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  Projetos
                </a>
                <a
                  href='/contato'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  Contato
                </a>
              </div>
              <div className='py-6 text-black flex'>
                <a href='https://www.linkedin.com/in/ronansalvador/'>
                  <BsLinkedin className='w-8 h-8 mr-6' />
                </a>
                <a href='https://github.com/ronansalvador'>
                  <BsGithub className='w-8 h-8' />
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

export default Header;