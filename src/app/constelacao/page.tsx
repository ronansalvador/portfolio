import Image from 'next/image'
import React from 'react'
import Button from '../components/Button'

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
        <Button link="https://forms.gle/Tm3S5Yi1L4WNHc8MA" upperCase>
          INSCRIÇÃO - CONSTELAÇÃO EM GRUPO
        </Button>
        <Button
          link="https://api.whatsapp.com/send?phone=5511994963639&text=Ol%C3%A1%20Ronan%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20seus%20atendimentos."
          upperCase
        >
          Informações sobre Atendimento
        </Button>
        <Button
          link="http://wa.me/5511994963639?text=Ol%C3%A1%20Ronan%2C%20gostaria%20de%20agendar%20uma%20sess%C3%A3o%20individual%20de%20Constela%C3%A7%C3%A3o%20Familiar."
          upperCase
        >
          Agendar atendimento indiviual
        </Button>
        <Button
          link="http://wa.me/5511994963639?text=Ol%C3%A1%20Ronan%2C%20pode%20me%20passar%20mais%20informa%C3%A7%C3%B5es%20sobre%20como%20funciona%20a%20constela%C3%A7%C3%A3o%20online%3F"
          upperCase
        >
          Constelação on-line
        </Button>
        <Button link="https://forms.gle/M2EyjNWyEAopZFq8A" upperCase>
          Lista de espera - constelação
        </Button>
      </div>
    </>
  )
}

export default Constelacao
