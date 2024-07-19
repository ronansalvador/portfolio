import Title from '../components/Title'
import Atendimento from '../components/Atendimento'

export default function BertHellinger() {
  return (
    <div className="flex flex-col gap-6 container mx-auto text-roxo">
      <Title>Bert Hellinger</Title>
      <div className="flex gap-6 items-center flex-col lg:flex-row">
        <img
          src="../berthellinger.jpg"
          alt="bert hellinher"
          className="rounded-full"
        />
        <div className="flex flex-grow flex-col gap-4">
          <p>
            Nascido na Alemanha em 1925, entrou para seminário aos 10 anos, aos
            17 alistou-se no exército alemão para servir na Segunda Guerra
            Mundial como soldado, mas como não se sintonizou com a Juventude
            Hitlerista, foi mal visto pelo regime nazista por não integrar no
            ideal. Foi prisioneiro de guerra por 1 ano e meio onde conseguiu
            escapar e voltar para casa. Com o fim da guerra, Bert Hellinger
            retomou seus estudos de teologia e filosofia, tornou-se padre e
            viveu aproximadamente 2 décadas na África do Sul, especialmente com
            a comunidade Zulu. Estudou diversas técnicas e teorias como PNL,
            Hipnose, Gestalt, Terapia Transacional entre outras.
          </p>

          <p>
            Com sua experiência e com base na análise comportamental do convívio
            em grupo, Bert Hellinger nos traz{' '}
            <a href="leissistemicas">3 leis</a> ou ordens que regem os sistemas
            e as Constelação Familiares.
          </p>
        </div>
      </div>

      <Atendimento />
    </div>
  )
}
