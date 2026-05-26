import '../index.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Faq() {
  const perguntas = [
    {
      pergunta: 'Como faço para agendar uma consulta?',
      resposta: 'Você pode agendar uma consulta diretamente na UBS, pelo telefone da unidade ou pelos canais digitais disponibilizados pela prefeitura.'
    },
    {
      pergunta: 'Quais documentos preciso levar?',
      resposta: 'Leve um documento com foto, CPF, Cartão SUS e comprovante de residência.'
    },
    {
      pergunta: 'A UBS aplica vacinas?',
      resposta: 'Sim. A UBS realiza vacinação conforme o calendário nacional e disponibilidade de doses.'
    },
    {
      pergunta: 'Qual o horário de atendimento?',
      resposta: 'Nossa unidade funciona de Segunda a Sexta das 07:00–19:00.'
    },
    {
      pergunta: 'Preciso agendar para tomar vacina?',
      resposta: 'Em muitos casos não é necessário, mas algumas campanhas podem exigir agendamento prévio.'
    },
    {
      pergunta: 'Posso retirar medicamentos na UBS?',
      resposta: 'Sim. A retirada de medicamentos depende da disponibilidade em estoque e da apresentação da receita médica válida.'
    },
    {
      pergunta: 'A UBS atende crianças e idosos?',
      resposta: 'Sim. A unidade oferece atendimento para todas as faixas etárias, incluindo acompanhamento infantil e cuidados voltados à terceira idade.'
    },
    {
      pergunta: 'Como funciona a triagem online?',
      resposta: 'A triagem online ajuda você a identificar o atendimento mais adequado para seus sintomas antes de ir até a unidade.'
    },
    {
      pergunta: 'A UBS realiza exames laboratoriais?',
      resposta: 'Alguns exames podem ser solicitados pela equipe médica e realizados conforme encaminhamento da unidade.'
    },
    {
      pergunta: 'Posso atualizar meu Cartão SUS na UBS?',
      resposta: 'Sim. Procure a recepção da unidade com seus documentos pessoais e comprovante de residência atualizado.'
    }
  ]
  

  return (
    <main className="main-container" tabIndex="-1" data-name="Faq">
      <section className="section-base py-16 px-6">
        <div className="w-full max-w-[1024px] mx-auto">

          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            
            <div className="text-h1-wrapper">
                <h1 className="text-h1">Perguntas frequentes</h1>
            </div>

            <p className="text-p mt-4 max-w-[720px] mx-auto">
              Confira abaixo as principais dúvidas sobre atendimento, documentos, vacinas e funcionamento da UBS.
            </p>
          </motion.div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col divide-y divide-gray-200">
              {perguntas.map((item, index) => (
                <motion.details
                  key={index}
                  className="group py-6"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.04
                  }}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                    <h2 className="text-xl font-inter-semibold text-gray-900">
                      {item.pergunta}
                    </h2>

                    <span className="text-2xl text-gray-500 transition-transform group-open:rotate-180">
                      ˅
                    </span>
                  </summary>

                  <p className="mt-4 max-w-[850px] text-p">
                    {item.resposta}
                  </p>
                </motion.details>
              ))}
            </div>
          </div>
          <div className="mt-12 flex justify-center">
            <Link to="/" className="btn-primary" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <div className="btn-primary-text">
                    <p className="leading-[1.45]">Voltar para página principal</p>
                </div>
            </Link>
          </div>
          <footer className="w-full border-t border-[rgba(0,0,0,0.2)] mt-8">
            <div className="flex items-center justify-center px-4 py-6">
              <p className="font-inter-medium text-[15px] text-[rgba(0,0,0,0.55)] text-center">
                © 2026 UBS Padre José de Anchieta - Desenvolvido por alunos UNICID Tatuapé
              </p>
            </div>
          </footer>
        </div>
      </section>
    </main>
  )
}