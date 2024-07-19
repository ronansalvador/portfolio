'use client'
import { useState } from 'react'
import { Dialog, Popover } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { BsLinkedin, BsGithub, BsInstagram, BsWhatsapp } from 'react-icons/bs'

function HeaderConstelacao() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <header className="bg-roxo">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6"
        aria-label="Global"
      >
        <div className="flex lg:flex-1 text-white">
          <a
            href="/constelacao"
            className="font-semibold p-2 rounded-lg hover:bg-white hover:text-fuxia"
          >
            <span className="font-sans">Ronan Salvador</span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <a
            href="/constelacao/constelacaofamiliar"
            className="text-sm font-semibold leading-6 text-white p-2 rounded-lg hover:bg-white hover:text-fuxia"
          >
            O que é Constalação Familiar ?
          </a>
          <a
            href="/constelacao/berthellinger"
            className="text-sm font-semibold leading-6 text-white p-2 rounded-lg hover:bg-white hover:text-fuxia"
          >
            Bert Hellinger
          </a>
          <a
            href="/constelacao/comofunciona"
            className="text-sm font-semibold leading-6 text-white p-2 rounded-lg hover:bg-white hover:text-fuxia"
          >
            Como Funciona
          </a>
          <a
            href="/constelacao/leissistemicas"
            className="text-sm font-semibold leading-6 text-white p-2 rounded-lg hover:bg-white hover:text-fuxia"
          >
            Leis Sistemicas
          </a>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="https://www.instagram.com/ronansalvador/">
            <BsInstagram className="w-8 h-8 mr-6  text-white rounded-lg hover:bg-white hover:text-fuxia" />
          </a>
          <a href="https://api.whatsapp.com/send?phone=5511994963639&text=Ol%C3%A1%20Ronan....">
            <BsWhatsapp className="w-8 h-8 mr-6  text-white rounded-lg hover:bg-white hover:text-fuxia" />
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-roxo px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-end text-fuxia font-bold">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="/constelacao/constelacaofamiliar"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-white hover:text-fuxia"
                >
                  Constalação Familiar
                </a>
                <a
                  href="/constelacao/comofunciona"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-white hover:text-fuxia"
                >
                  Como Funciona
                </a>
                <a
                  href="/constelacao/leissistemicas"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-white hover:text-fuxia"
                >
                  Leis Sistemicas
                </a>
              </div>
              <div className="py-6 text-fuxia flex">
                <a href="https://www.instagram.com/ronansalvador/">
                  <BsInstagram className="w-8 h-8 mr-6 text-white hover:text-fuxia" />
                </a>
                <a href="https://api.whatsapp.com/send?phone=5511994963639&text=Ol%C3%A1%20Ronan....">
                  <BsWhatsapp className="w-8 h-8 mr-6 text-white hover:text-fuxia" />
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

export default HeaderConstelacao
