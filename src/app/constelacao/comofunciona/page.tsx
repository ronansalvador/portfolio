import React from 'react'
import Title from '../components/Title'
import Button from '../../components/Button'
import Atendimento from '../components/Atendimento'

function ComoFunciona() {
  return (
    <div className="flex flex-col gap-6 container mx-auto text-roxo">
      <Title>Como funciona a constelação familar?</Title>
      <p>
        Quando uma ou mais das
        <a href="./leissistemicas" className="text-magenta">
          {` Leis Sistêmicas `}
        </a>
        não são cumpridas ou respeitadas gera-se o que chamamos de emaranhados
        em nossos sistemas. Esses emaranhados provocam conflitos emocionais,
        problemas de relacionamentos, doenças psicossomáticas, medos, psicoses,
        baixa autoestima, problemas financeiros, fracassos etc.
      </p>

      <p>
        Ao olhar para uma situação por meio das constelações, o consultante ou
        constelado pode obter uma nova perspectiva sobre seu problema, o que
        leva a uma compreensão mais profunda e curadora, ocasionando mudanças em
        si mesmo e no seu sistema familiar consequentemente, de uma forma
        fenomenológica, essas informações são acessadas e olhamos para o
        essencial.
      </p>
      <Atendimento />
    </div>
  )
}

export default ComoFunciona
