import Image from 'next/image'
import React from 'react'
import Button from '@/app/components/Button'

const Constelacao = () => {
  return (
    <>
      <div>
        <Image
          src="/ronansalvador.jpg"
          alt="ronan salvador"
          className="rounded-full p-4"
          width={300}
          height={300}
        />
      </div>
      <div className="w-full flex flex-col items-center px-4 gap-4">
        <Button link="https://forms.gle/DWLS5ajumKRKRZvt9">
          INSCRIÇÃO - CONSTELAÇÃO EM GRUPO
        </Button>
        <Button link="https://api.whatsapp.com/send?phone=5511994963639&text=Ol%C3%A1%20Ronan%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20seus%20atendimentos.">
          Informações sobre Atendimento
        </Button>
        <Button link="http://wa.me/5511994963639?text=Ol%C3%A1%20Ronan%2C%20gostaria%20de%20agendar%20uma%20sess%C3%A3o%20individual%20de%20Constela%C3%A7%C3%A3o%20Familiar.">
          Agentar atendimento indiviual
        </Button>
      </div>
    </>
  )
}

export default Constelacao
