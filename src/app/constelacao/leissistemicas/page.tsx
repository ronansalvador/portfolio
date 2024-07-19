import React from 'react'
import Title from '../components/Title'
import SubTitle from '../components/SubTitle'
import Atendimento from '../components/Atendimento'

function LeisSistemicas() {
  return (
    <div className="flex flex-col gap-3 container mx-auto text-roxo">
      <Title>Leis Sistêmicas</Title>

      <SubTitle>Pertencimento:</SubTitle>
      <p>
        A família é o primeiro grupo social do qual fazemos parte. Todos os
        membros têm seu lugar e o direito de pertencer a esse sistema. Quando
        alguém é excluído, esse sistema entra em desequilíbrio e as
        características do excluído são assumidas por outro membro da família.
      </p>

      <SubTitle>Hierarquia (ordem): </SubTitle>
      <p>
        É a posição que assumimos em um sistema, quem vem antes precede o que
        chegou depois. Assim, os pais antecedem os filhos, da mesma forma que o
        filho que nasceu primeiro tem precedência sobre o segundo. Cada um tem
        seu lugar e no decorrer do tempo de deslocamento dentro da hierarquia de
        baixo para cima.
      </p>

      <p>Os pais serão sempre grandes e maiores que os filhos.</p>

      <SubTitle>Equilíbrio: </SubTitle>
      <p>
        É o que provoca o senso de justiça em um sistema, o dar e o tomar. Para
        manter o equilíbrio é necessário que todos os membros que dele fazem
        parte deem e tomem aquilo que lhes é de direito. O termo “tomar” (do
        alemão nehmen) não significa receber passivamente, mas aceitar, assumir,
        incorporar o que se recebe. É compreender e tomar para si o que é de
        direito. Nesse sentido, a criança toma os pais e o que deles recebe.
      </p>

      <p>
        Já em relação entre casal quando dar e tomar estão em desequilíbrio,
        quem dá demais e não toma ficar maior perante o parceiro, tornando-se
        pai ou mãe do parceiro, e esse relação tende a acabar, quem recebe e não
        da fica pequeno, sente-se pressionado e não suporta manter a relação.
      </p>
      <Atendimento />
    </div>
  )
}

export default LeisSistemicas
