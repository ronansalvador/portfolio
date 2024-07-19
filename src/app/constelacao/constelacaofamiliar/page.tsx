import Link from 'next/link'
import Atendimento from '../components/Atendimento'
import Title from '../components/Title'

function ConstelacaoFamiliar() {
  return (
    <div className="flex flex-col gap-3 container mx-auto text-roxo">
      <Title>O que é constelação familiar?</Title>
      <p>
        A Constelação Familiar é uma metodologia fenomenológica desenvolvida
        pelo psicoterapeuta alemão <a href="berthellinger">Bert Hellinger</a>, a
        partir das observações e entendimentos das
        <Link href="./leissistemicas" className="text-magenta">
          {` "ordens" `}
        </Link>
        que atuam nos sistemas familiares. Muitos de nossos aprendizados e
        comportamentos têm origem de nosso sistema familiar e estão presentes em
        nosso inconsciente. Cada família é um sistema em que todos os membros
        estão interligados e se influenciam mutuamente.
      </p>

      <p>
        As Constelações Familiares podem ser utilizadas para liberar tensões,
        revelar informações ocultadas de nossos sentidos, tornando visíveis as
        dinâmicas familiares que antes não se podiam ver e que possuem grande
        influência em nosso destino e nossa forma de ser.
      </p>

      <p>
        Na visão das Constelações Sistêmicas, muitas destas dinâmicas ou
        emaranhamentos provocam conflitos emocionais, problemas de
        relacionamentos, doenças psicossomáticas, medos, baixa autoestima,
        problemas financeiros, fracassos etc. Ao olhar para uma situação por
        meio das constelações o consultante ou constelado pode obter uma nova
        perspectiva sobre seu problema, o que leva a uma compreensão mais
        profunda, podendo ocasionar mudanças em si mesmo e em seu sistema
        familiar consequentemente.
      </p>

      <p>
        Por meio de uma constelação, um indivíduo, uma família ou um casal, que
        sofre problemas de relacionamento, afetivos, comportamentos inadequados,
        saúde, desafios em seu trabalho ou organização, etc., pode conseguir
        entender um pouco mais as dinâmicas e implicações desfavoráveis que
        operam no seu sistema familiar ou organizacional alimentando a
        problemática e influenciando-o.
      </p>

      <p>
        Está na hora de você descobrir como constelações podem agregar em sua
        vida!
      </p>
      <Atendimento />
    </div>
  )
}

export default ConstelacaoFamiliar
