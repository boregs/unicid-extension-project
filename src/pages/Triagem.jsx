import '../index.css'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ArrowLeft, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const efeitoScroll = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.2 },
  transition: { duration: 0.6 }
}

export default function Triagem() {
  const [step, setStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [classificacao, setClassificacao] = useState('verde')

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()

  const onSubmit = (data) => {
    const dorIntensa = parseInt(data.dorIntensidade) >= 8
    const febreAlta = data.febre === 'acima-39'
    const sintomas = data.sintomasPrincipais.toLowerCase()

    const sintomasGraves =
      sintomas.includes('peito') ||
      sintomas.includes('respirar') ||
      sintomas.includes('cardíaco') ||
      sintomas.includes('falta de ar')

    if (dorIntensa || febreAlta || sintomasGraves) {
      setClassificacao('vermelho')
    } else if (parseInt(data.dorIntensidade) >= 6) {
      setClassificacao('laranja')
    } else if (data.febre === 'entre-38-39') {
      setClassificacao('amarelo')
    } else if (parseInt(data.idade) >= 60 || data.doencasPreExistentes) {
      setClassificacao('amarelo')
    } else {
      setClassificacao('verde')
    }

    setIsSubmitted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const nextStep = () => {
    setStep((prev) => Math.min(prev + 1, 3))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (isSubmitted) {
    return <ResultadoTriagem classificacao={classificacao} />
  }

  return (
    <main className="content-stretch flex flex-col items-start relative size-full bg-white">
      <motion.section
        className="relative shrink-0 w-full border-b border-[rgba(0,0,0,0.1)]"
        {...efeitoScroll}
      >
        <div className="content-stretch flex items-center justify-between px-[32px] py-[24px] relative w-full">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-[8px] text-[rgba(0,0,0,0.55)] hover:text-black transition-colors"
          >
            <ArrowLeft size={24} />
            <span className="font-inter-medium text-[18px] tracking-[-0.09px]">
              Voltar
            </span>
          </Link>
        </div>
      </motion.section>

      <motion.section className="relative shrink-0 w-full" {...efeitoScroll}>
        <div className="content-stretch flex flex-col gap-[24px] items-center px-[32px] py-[64px] relative w-full">
          <div className="text-center max-w-[800px]">
            <h1 className="text-h1 mb-[16px]">Triagem Online</h1>

            <p className="text-p">
              Preencha os dados abaixo para identificarmos a urgência do seu atendimento
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-[16px] mt-[32px]">
            {[1, 2, 3].map((num) => (
              <div key={num} className="flex items-center gap-[8px]">
                <div
                  className={`flex items-center justify-center size-[40px] rounded-full font-inter-semibold text-[16px] transition-colors ${
                    step >= num
                      ? 'bg-black text-white'
                      : 'bg-[rgba(0,0,0,0.1)] text-[rgba(0,0,0,0.4)]'
                  }`}
                >
                  {num}
                </div>

                <span
                  className={`font-inter-medium text-[16px] ${
                    step >= num ? 'text-black' : 'text-[rgba(0,0,0,0.4)]'
                  }`}
                >
                  {num === 1
                    ? 'Dados Pessoais'
                    : num === 2
                    ? 'Sintomas'
                    : 'Histórico Médico'}
                </span>

                {num < 3 && (
                  <div
                    className={`w-[40px] h-[2px] mx-[8px] ${
                      step > num ? 'bg-black' : 'bg-[rgba(0,0,0,0.1)]'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="relative shrink-0 w-full flex-1 bg-[rgba(0,0,0,0.02)]"
        {...efeitoScroll}
      >
        <div className="content-stretch flex flex-col items-center px-[32px] py-[64px] relative w-full">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-[700px]">
            {step === 1 && (
              <motion.div className="bg-white rounded-[16px] p-[40px] shadow-sm" {...efeitoScroll}>
                <h2 className="font-inter-bold text-[28px] text-black tracking-[-0.56px] mb-[32px]">
                  Dados Pessoais
                </h2>

                <div className="flex flex-col gap-[24px]">
                  <div>
                    <label className="font-inter-semibold text-[16px] text-black mb-[8px] block">
                      Nome Completo *
                    </label>
                    <input
                      {...register('nome', { required: 'Campo obrigatório' })}
                      type="text"
                      className="w-full px-[16px] py-[14px] border-2 border-[rgba(0,0,0,0.15)] rounded-[12px] font-inter-medium text-[18px] focus:border-black focus:outline-none transition-colors"
                      placeholder="Digite seu nome completo"
                    />
                    {errors.nome && (
                      <span className="text-red-500 text-[14px] mt-[4px] block">
                        {errors.nome.message}
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
                    <div>
                      <label className="font-inter-semibold text-[16px] text-black mb-[8px] block">
                        Idade *
                      </label>
                      <input
                        {...register('idade', { required: 'Campo obrigatório' })}
                        type="number"
                        className="w-full px-[16px] py-[14px] border-2 border-[rgba(0,0,0,0.15)] rounded-[12px] font-inter-medium text-[18px] focus:border-black focus:outline-none transition-colors"
                        placeholder="Ex: 65"
                      />
                      {errors.idade && (
                        <span className="text-red-500 text-[14px] mt-[4px] block">
                          {errors.idade.message}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="font-inter-semibold text-[16px] text-black mb-[8px] block">
                        Telefone *
                      </label>
                      <input
                        {...register('telefone', { required: 'Campo obrigatório' })}
                        type="tel"
                        className="w-full px-[16px] py-[14px] border-2 border-[rgba(0,0,0,0.15)] rounded-[12px] font-inter-medium text-[18px] focus:border-black focus:outline-none transition-colors"
                        placeholder="(11) 99999-9999"
                      />
                      {errors.telefone && (
                        <span className="text-red-500 text-[14px] mt-[4px] block">
                          {errors.telefone.message}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex justify-end mt-[40px]">
                  <button
                    type="button"
                    onClick={nextStep}
                    className="bg-black text-white px-[24px] py-[14px] rounded-[12px] font-poppins-medium text-[18px] flex items-center gap-[8px] hover:bg-[rgba(0,0,0,0.85)] transition-colors"
                  >
                    Próximo
                    <ArrowRight size={20} />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div className="bg-white rounded-[16px] p-[40px] shadow-sm" {...efeitoScroll}>
                <h2 className="font-inter-bold text-[28px] text-black tracking-[-0.56px] mb-[32px]">
                  Sintomas Atuais
                </h2>

                <div className="flex flex-col gap-[24px]">
                  <div>
                    <label className="font-inter-semibold text-[16px] text-black mb-[8px] block">
                      Quais são seus sintomas principais? *
                    </label>
                    <textarea
                      {...register('sintomasPrincipais', { required: 'Campo obrigatório' })}
                      rows={4}
                      className="w-full px-[16px] py-[14px] border-2 border-[rgba(0,0,0,0.15)] rounded-[12px] font-inter-medium text-[18px] focus:border-black focus:outline-none transition-colors resize-none"
                      placeholder="Descreva seus sintomas"
                    />
                    {errors.sintomasPrincipais && (
                      <span className="text-red-500 text-[14px] mt-[4px] block">
                        {errors.sintomasPrincipais.message}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="font-inter-semibold text-[16px] text-black mb-[8px] block">
                      Há quanto tempo apresenta esses sintomas? *
                    </label>
                    <select
                      {...register('tempoDeSintomas', { required: 'Campo obrigatório' })}
                      className="w-full px-[16px] py-[14px] border-2 border-[rgba(0,0,0,0.15)] rounded-[12px] font-inter-medium text-[18px] focus:border-black focus:outline-none transition-colors"
                    >
                      <option value="">Selecione...</option>
                      <option value="menos-1h">Menos de 1 hora</option>
                      <option value="1-6h">1 a 6 horas</option>
                      <option value="6-24h">6 a 24 horas</option>
                      <option value="1-3d">1 a 3 dias</option>
                      <option value="mais-3d">Mais de 3 dias</option>
                    </select>
                    {errors.tempoDeSintomas && (
                      <span className="text-red-500 text-[14px] mt-[4px] block">
                        {errors.tempoDeSintomas.message}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="font-inter-semibold text-[16px] text-black mb-[8px] block">
                      Está com febre? *
                    </label>
                    <select
                      {...register('febre', { required: 'Campo obrigatório' })}
                      className="w-full px-[16px] py-[14px] border-2 border-[rgba(0,0,0,0.15)] rounded-[12px] font-inter-medium text-[18px] focus:border-black focus:outline-none transition-colors"
                    >
                      <option value="">Selecione...</option>
                      <option value="nao">Não</option>
                      <option value="abaixo-38">Sim, febre baixa até 38°C</option>
                      <option value="entre-38-39">Sim, febre moderada entre 38°C e 39°C</option>
                      <option value="acima-39">Sim, febre alta acima de 39°C</option>
                    </select>
                    {errors.febre && (
                      <span className="text-red-500 text-[14px] mt-[4px] block">
                        {errors.febre.message}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="font-inter-semibold text-[16px] text-black mb-[12px] block">
                      Intensidade da dor *
                    </label>

                    <div className="flex items-center gap-[16px]">
                      <input
                        {...register('dorIntensidade', { required: 'Campo obrigatório' })}
                        type="range"
                        min="0"
                        max="10"
                        defaultValue="0"
                        className="flex-1"
                      />

                      <span className="font-inter-bold text-[24px] text-black min-w-[40px] text-center">
                        {watch('dorIntensidade') || 0}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between mt-[40px]">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="border-2 border-[rgba(0,0,0,0.15)] text-black px-[24px] py-[14px] rounded-[12px] font-poppins-medium text-[18px] flex items-center gap-[8px] hover:border-black transition-colors"
                  >
                    <ArrowLeft size={20} />
                    Voltar
                  </button>

                  <button
                    type="button"
                    onClick={nextStep}
                    className="bg-black text-white px-[24px] py-[14px] rounded-[12px] font-poppins-medium text-[18px] flex items-center gap-[8px] hover:bg-[rgba(0,0,0,0.85)] transition-colors"
                  >
                    Próximo
                    <ArrowRight size={20} />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div className="bg-white rounded-[16px] p-[40px] shadow-sm" {...efeitoScroll}>
                <h2 className="font-inter-bold text-[28px] text-black tracking-[-0.56px] mb-[32px]">
                  Histórico Médico
                </h2>

                <div className="flex flex-col gap-[24px]">
                  <div>
                    <label className="font-inter-semibold text-[16px] text-black mb-[8px] block">
                      Possui doenças pré-existentes?
                    </label>
                    <textarea
                      {...register('doencasPreExistentes')}
                      rows={3}
                      className="w-full px-[16px] py-[14px] border-2 border-[rgba(0,0,0,0.15)] rounded-[12px] font-inter-medium text-[18px] focus:border-black focus:outline-none transition-colors resize-none"
                      placeholder="Ex: diabetes, hipertensão, asma"
                    />
                  </div>

                  <div>
                    <label className="font-inter-semibold text-[16px] text-black mb-[8px] block">
                      Usa algum medicamento regularmente?
                    </label>
                    <textarea
                      {...register('medicamentosEmUso')}
                      rows={3}
                      className="w-full px-[16px] py-[14px] border-2 border-[rgba(0,0,0,0.15)] rounded-[12px] font-inter-medium text-[18px] focus:border-black focus:outline-none transition-colors resize-none"
                      placeholder="Liste os medicamentos que usa"
                    />
                  </div>

                  <div>
                    <label className="font-inter-semibold text-[16px] text-black mb-[8px] block">
                      Possui alergia a algum medicamento?
                    </label>
                    <input
                      {...register('alergia')}
                      type="text"
                      className="w-full px-[16px] py-[14px] border-2 border-[rgba(0,0,0,0.15)] rounded-[12px] font-inter-medium text-[18px] focus:border-black focus:outline-none transition-colors"
                      placeholder="Ex: penicilina, dipirona"
                    />
                  </div>
                </div>

                <div className="flex justify-between mt-[40px]">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="border-2 border-[rgba(0,0,0,0.15)] text-black px-[24px] py-[14px] rounded-[12px] font-poppins-medium text-[18px] flex items-center gap-[8px] hover:border-black transition-colors"
                  >
                    <ArrowLeft size={20} />
                    Voltar
                  </button>

                  <button
                    type="submit"
                    className="bg-black text-white px-[32px] py-[14px] rounded-[12px] font-poppins-medium text-[18px] flex items-center gap-[8px] hover:bg-[rgba(0,0,0,0.85)] transition-colors"
                  >
                    Finalizar Triagem
                    <CheckCircle size={20} />
                  </button>
                </div>
              </motion.div>
            )}
          </form>
        </div>
      </motion.section>

      <motion.footer className="relative shrink-0 w-full border-t border-[rgba(0,0,0,0.1)]" {...efeitoScroll}>
        <div className="content-stretch flex items-center justify-center px-[32px] py-[32px] relative w-full">
          <p className="font-inter-medium text-[16px] text-[rgba(0,0,0,0.55)] text-center">
            © 2026 UBS Padre José de Anchieta - Desenvolvido por alunos UNICID Tatuapé
          </p>
        </div>
      </motion.footer>
    </main>
  )
}

function ResultadoTriagem({ classificacao }) {
  const configs = {
    vermelho: {
      cor: '#DC2626',
      titulo: 'EMERGÊNCIA',
      descricao: 'Atendimento IMEDIATO necessário',
      recomendacao:
        'Sua triagem indica emergência. Acione imediatamente a equipe da unidade ou procure a recepção para atendimento prioritário.',
      icone: AlertCircle
    },
    laranja: {
      cor: '#EA580C',
      titulo: 'MUITO URGENTE',
      descricao: 'Atendimento prioritário',
      recomendacao:
        'Sua triagem indica caso muito urgente. Informe a equipe da UBS para priorização do atendimento.',
      icone: AlertCircle
    },
    amarelo: {
      cor: '#EAB308',
      titulo: 'URGENTE',
      descricao: 'Necessita avaliação médica',
      recomendacao:
        'Sua triagem indica urgência moderada. Aguarde a chamada da equipe, pois seu atendimento deve ser priorizado conforme a classificação.',
      icone: CheckCircle
    },
    verde: {
      cor: '#16A34A',
      titulo: 'POUCO URGENTE',
      descricao: 'Atendimento de baixa urgência',
      recomendacao:
        'Sua triagem indica baixa urgência. Aguarde o atendimento conforme a ordem e disponibilidade da equipe.',
      icone: CheckCircle
    },
    azul: {
      cor: '#2563EB',
      titulo: 'NÃO URGENTE',
      descricao: 'Orientação ambulatorial',
      recomendacao:
        'Sua triagem indica caso não urgente. Aguarde orientação da equipe da UBS para o próximo encaminhamento.',
      icone: CheckCircle
    }
  }

  const config = configs[classificacao]
  const Icon = config.icone

  return (
    <main className="content-stretch flex flex-col items-center justify-center relative min-h-screen bg-[rgba(0,0,0,0.02)] px-[32px] py-[64px]">
      <motion.div className="bg-white rounded-[24px] p-[64px] shadow-lg max-w-[700px] w-full text-center" {...efeitoScroll}>
        <div
          className="inline-flex items-center justify-center size-[80px] rounded-full mb-[32px]"
          style={{ backgroundColor: `${config.cor}20` }}
        >
          <Icon size={48} style={{ color: config.cor }} />
        </div>

        <h1
          className="font-inter-bold text-[48px] tracking-[-1.2px] leading-[1.1] mb-[16px]"
          style={{ color: config.cor }}
        >
          {config.titulo}
        </h1>

        <p className="font-inter-semibold text-[24px] text-black mb-[24px]">
          {config.descricao}
        </p>

        <div className="bg-[rgba(0,0,0,0.05)] rounded-[16px] p-[24px] mb-[40px]">
          <p className="font-inter-medium text-[18px] text-[rgba(0,0,0,0.75)] leading-[1.6]">
            {config.recomendacao}
          </p>
        </div>

        <div className="flex flex-col gap-[16px] mb-[32px]">
          <div className="bg-[rgba(0,0,0,0.02)] rounded-[12px] p-[20px] text-left">
            <p className="font-inter-semibold text-[16px] text-black mb-[8px]">
              📍 Endereço da UBS
            </p>
            <p className="font-inter-medium text-[16px] text-[rgba(0,0,0,0.65)]">
              Av. Sylvio Torres, 313 - Artur Alvim, São Paulo - SP
            </p>
          </div>

          <div className="bg-[rgba(0,0,0,0.02)] rounded-[12px] p-[20px] text-left">
            <p className="font-inter-semibold text-[16px] text-black mb-[8px]">
              📞 Telefones de Emergência
            </p>
            <p className="font-inter-medium text-[16px] text-[rgba(0,0,0,0.65)]">
              SAMU: 192 | Bombeiros: 193 | UBS: (11) 2742-1367
            </p>
          </div>
        </div>

        <button
          onClick={() => {
            window.location.reload()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="bg-black text-white px-[32px] py-[16px] rounded-[12px] font-poppins-medium text-[18px] hover:bg-[rgba(0,0,0,0.85)] transition-colors"
        >
          Fazer Nova Triagem
        </button>

        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="block mt-[16px] text-[rgba(0,0,0,0.55)] hover:text-black font-inter-medium text-[16px] transition-colors"
        >
          Voltar para a página inicial
        </Link>
      </motion.div>
    </main>
  )
}