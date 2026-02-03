
import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  Quote,
  Star
} from 'lucide-react';

const App: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: ''
  });

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [fade, setFade] = useState(true);

  const testimonials = [
    {
      text: "O treinamento mudou completamente minha forma de ver o mercado. Saí de meses sem vender para 3 fechamentos logo na primeira semana após aplicar o método do Altemir.",
      author: "Roberto Silveira",
      stars: 5
    },
    {
      text: "A didática do Altemir é sensacional. O passo a passo é realmente validado e prático. Finalmente sinto que tenho o controle das minhas vendas e não dependo da sorte.",
      author: "Juliana Mendes",
      stars: 5
    },
    {
      text: "Melhor investimento que já fiz na minha carreira imobiliária. O retorno veio em menos de 10 dias com uma comissão de alto padrão que eu nunca achei que conseguiria.",
      author: "Marcos Oliveira",
      stars: 5
    }
  ];

  // IDs dos vídeos reais fornecidos, incluindo os IDs para o vídeo 05 e 06
  const videoIds = [
    'pWk_06Ilzjs',
    'GH-lEMOIoQg',
    'tutuK7137Cc',
    'nijbFIGpLUo',
    '-E61OXjXnfI',
    'Xi2Ca5Ts0OQ'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        setFade(true);
      }, 500);
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Inscrição enviada:', formData);
    alert('Inscrição realizada com sucesso! Prepare-se para o seu melhor ano.');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const cronograma = [
    {
      dia: "09",
      mes: "Fevereiro",
      foto: "https://lh3.googleusercontent.com/d/15ZFK2tLthQ4shiErh4WPj_cf_cUiBIyF",
      topicos: [
        "Que fundamentos te fazem performar em vendas",
        "Identifique a imobiliária que acelera suas vendas",
        "A jornada de compra na cabeça do cliente",
        "Não existe cliente frio",
        "Como manter o cliente fiel a você"
      ],
      layout: "number-topic-photo"
    },
    {
      dia: "10",
      mes: "Fevereiro",
      foto: "https://lh3.googleusercontent.com/d/1kjY3vc8jOCUJJkTF_dfDolOG2XrqXxS4",
      topicos: [
        "Como converter vendas rapidamente",
        "Como escalar a quantidade de vendas no mês",
        "Transforme atendimentos em experiências que geram fechamento",
        "Resultados com consistência em mercados competitivos"
      ],
      layout: "photo-topic-number"
    },
    {
      dia: "11",
      mes: "Fevereiro",
      foto: "https://lh3.googleusercontent.com/d/19Xcc0dsl9V1qhx6aJREMN56sxVa11yZU",
      topicos: [
        "O que faz um corretor de imóveis vender rapidamente",
        "Comunicação leve e conquistadora",
        "Os passos cruciais do Fechamento",
        "Como garantir vendas todos os meses"
      ],
      layout: "number-topic-photo"
    }
  ];

  const GoldCTA = ({ extraClass = "py-8 md:py-12" }: { extraClass?: string }) => (
    <div className={`flex justify-center w-full bg-transparent ${extraClass}`}>
      <button 
        onClick={scrollToTop}
        className="w-[90%] md:w-auto md:min-w-[450px] bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-300 text-black px-8 py-5 rounded-full font-black text-xs md:text-sm lg:text-base uppercase tracking-widest shadow-[0_0_30px_rgba(245,158,11,0.3)] transition-all active:scale-95 flex items-center justify-center gap-3 group"
      >
        QUERO PARTICIPAR E GARANTIR MINHA VAGA!
        <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
      </button>
    </div>
  );

  return (
    <div className="min-h-screen selection:bg-amber-500 selection:text-black bg-[#050505] text-white overflow-x-hidden font-sans">
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes shimmer {
            0% { background-position: -200% center; }
            100% { background-position: 200% center; }
          }
          .animate-marquee {
            display: flex;
            width: fit-content;
            animation: marquee 40s linear infinite;
          }
          .white-gold-shimmer {
            background: linear-gradient(
              90deg, 
              #d1d1d1 0%, 
              #e5e5e5 25%, 
              #ffffff 50%, 
              #e5e5e5 75%, 
              #d1d1d1 100%
            );
            background-size: 200% auto;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: shimmer 4s infinite linear;
          }
          .gold-line-glow {
            background: radial-gradient(circle, #bf953f 0%, rgba(191, 149, 63, 0) 70%);
          }
          .cronograma-row {
            position: relative;
            width: 100vw;
            left: 50%;
            right: 50%;
            margin-left: -50vw;
            margin-right: -50vw;
            background: #080808;
            border-bottom: 1px solid rgba(255, 255, 255, 0.03);
            transition: all 0.5s ease;
            overflow: hidden;
            min-height: 320px;
            display: flex;
            align-items: center;
          }
          .cronograma-row::before {
            content: '';
            position: absolute;
            inset: 0;
            background-image: url("https://www.transparenttextures.com/patterns/carbon-fibre.png");
            opacity: 0.05;
            pointer-events: none;
            z-index: 2;
          }
          .cronograma-row:hover {
            background: #0c0c0c;
          }
          .big-number-glow {
            font-family: 'Montserrat', sans-serif;
            font-weight: 900;
            line-height: 0.8;
            color: #f59e0b;
            font-style: italic;
            text-shadow: 0 0 30px rgba(245, 158, 11, 0.4), 0 0 60px rgba(245, 158, 11, 0.2);
            filter: drop-shadow(0 0 10px rgba(245, 158, 11, 0.3));
            z-index: 5;
          }
          .bg-photo-stretch {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: 1;
            opacity: 0.85;
            transition: opacity 0.5s ease, transform 0.8s ease, filter 0.5s ease;
            filter: contrast(1.1) brightness(0.7);
          }
          .cronograma-row:hover .bg-photo-stretch {
            opacity: 1;
            transform: scale(1.05);
            filter: contrast(1.2) brightness(0.8);
          }
          .mask-right {
            mask-image: linear-gradient(to left, black 60%, transparent 100%);
            -webkit-mask-image: linear-gradient(to left, black 60%, transparent 100%);
          }
          .mask-left {
            mask-image: linear-gradient(to right, black 60%, transparent 100%);
            -webkit-mask-image: linear-gradient(to right, black 60%, transparent 100%);
          }
          .text-outline-dark {
            text-shadow: 
              -1px -1px 0 #000,  
               1px -1px 0 #000,
              -1px  1px 0 #000,
               1px  1px 0 #000,
               0 4px 15px rgba(0,0,0,1);
          }
          .fade-transition {
            transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
          }
          .fade-visible {
            opacity: 1;
            transform: translateY(0);
          }
          .fade-hidden {
            opacity: 0;
            transform: translateY(10px);
          }
        `}
      </style>

      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/5">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="https://lh3.googleusercontent.com/d/1bv5Ps27gf3DuBVAjmRpX63sXaVQ0U9ol" 
              alt="Altemir Rocha Logo" 
              className="h-10 md:h-12 w-auto object-contain"
            />
          </div>
          <div className="hidden md:block">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[9px] font-black uppercase tracking-widest">
              <span className="w-1 h-1 bg-amber-500 rounded-full animate-pulse"></span>
              SEJA UM CORRETOR VENCEDOR!
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative flex flex-col justify-center pt-32 pb-16 overflow-hidden min-h-[80vh] lg:min-h-[85vh]">
        <div className="absolute inset-0 z-0 h-full">
          <img 
            src="https://lh3.googleusercontent.com/d/1-yTcoRXlzyCmjRUCDbWn9FLrSFyDITdI" 
            alt="Altemir Rocha - Mentor" 
            className="w-full h-full object-cover object-top lg:object-[10%_0%] opacity-70 lg:opacity-100 transition-opacity duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/40 to-black/95 hidden lg:block"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#050505] lg:hidden"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center lg:items-end text-center lg:text-right max-w-7xl ml-auto space-y-6">
            <div className="lg:max-w-2xl space-y-3">
              <h1 className="text-[2.07rem] md:text-[2.58rem] lg:text-[3.12rem] font-black leading-tight tracking-tighter uppercase drop-shadow-2xl">
                VENDA TODOS OS MESES <br />
                <span className="text-amber-500">COM TRANQUILIDADE</span> <br />
                E ALTAS COMISSÕES.
              </h1>
              
              <div className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-500 font-bold text-[9px] uppercase tracking-[0.2em]">
                3 Noites de treinamento 100% Online e gratuito
              </div>
            </div>

            <div className="space-y-5 lg:max-w-lg">
              <p className="text-sm md:text-lg text-gray-400 font-medium leading-relaxed drop-shadow-lg font-caviar">
                O passo a passo validado para corretores que desejam dominar o mercado imobiliário em 2026 com previsibilidade e escala.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-end gap-3 mt-2">
                <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md px-3 py-2 rounded-xl border border-white/5">
                  <Calendar className="text-amber-500" size={14} />
                  <span className="font-bold text-xs">09-10-11 FEV</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md px-3 py-2 rounded-xl border border-white/5">
                  <Clock className="text-amber-500" size={14} />
                  <span className="font-bold text-xs">19:00 (Brasília)</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:max-w-3xl pt-4">
              <div className="bg-black/80 backdrop-blur-2xl p-6 md:p-8 rounded-[1.5rem] border border-white/10 shadow-2xl relative">
                <div className="absolute -top-3 left-1/2 lg:left-auto lg:right-6 -translate-x-1/2 lg:translate-x-0 bg-amber-500 text-black px-4 py-1 rounded-full font-black text-[8px] uppercase tracking-widest">
                  Inscrição Gratuita
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-4 items-center justify-center">
                  <div className="w-full space-y-1 text-left">
                    <label className="text-[8px] uppercase font-black text-gray-500 tracking-widest ml-1">Nome</label>
                    <input 
                      type="text" 
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      placeholder="Nome completo"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-xs text-white focus:outline-none focus:border-amber-500/50 transition-all placeholder:text-gray-600"
                      required
                    />
                  </div>
                  <div className="w-full space-y-1 text-left">
                    <label className="text-[8px] uppercase font-black text-gray-500 tracking-widest ml-1">E-mail</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seu@email.com"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-xs text-white focus:outline-none focus:border-amber-500/50 transition-all placeholder:text-gray-600"
                      required
                    />
                  </div>
                  <div className="w-full space-y-1 text-left">
                    <label className="text-[8px] uppercase font-black text-gray-500 tracking-widest ml-1">WhatsApp</label>
                    <input 
                      type="tel" 
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      placeholder="(00) 00000-0000"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-xs text-white focus:outline-none focus:border-amber-500/50 transition-all placeholder:text-gray-600"
                      required
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full lg:w-auto lg:min-w-[140px] bg-gradient-to-r from-amber-600 to-amber-400 hover:from-amber-500 hover:to-amber-300 text-black h-[42px] mt-3 lg:mt-[1.1rem] rounded-lg font-black text-[10px] uppercase tracking-tighter shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2"
                  >
                    INSCREVER
                    <ArrowRight size={14} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faixa Marquee */}
      <div className="relative py-4 bg-[#050505] overflow-hidden z-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#bf953f] to-transparent">
          <div className="absolute inset-0 gold-line-glow opacity-40 blur-[2px] scale-y-[2]"></div>
        </div>

        <div className="animate-marquee whitespace-nowrap py-1">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center mx-6 md:mx-12">
              <span className="white-gold-shimmer text-base md:text-lg lg:text-xl font-light uppercase tracking-[0.35em] drop-shadow-sm leading-none">
                2026 MEU ANO DAS VENDAS
              </span>
              <div className="mx-8 md:mx-16 w-[1px] h-4 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#bf953f] to-transparent">
          <div className="absolute inset-0 gold-line-glow opacity-40 blur-[2px] scale-y-[2]"></div>
        </div>
      </div>

      {/* Seção Cronograma */}
      <section className="relative pt-12 md:pt-16 pb-0 bg-[#050505]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tighter italic max-w-4xl mx-auto leading-tight text-center">
              O que você vai aprender <br /> <span className="text-amber-500">nessas três noites:</span>
            </h2>
            <div className="h-1 w-20 bg-amber-500 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="flex flex-col gap-6">
            {cronograma.map((item, idx) => (
              <div key={idx} className="cronograma-row group">
                <img 
                  src={item.foto} 
                  alt={`Dia ${item.dia}`} 
                  className={`bg-photo-stretch ${item.layout === "number-topic-photo" ? "mask-right" : "mask-left"}`}
                />
                <div className="container mx-auto max-w-5xl relative z-10 w-full px-6">
                  <div className={`flex flex-col md:flex-row items-center justify-between w-full py-10 gap-8 md:gap-0 ${item.layout === "photo-topic-number" ? "md:flex-row-reverse" : ""}`}>
                    <div className={`w-full md:w-1/6 flex ${item.layout === "number-topic-photo" ? "md:justify-start" : "md:justify-end"} justify-center relative`}>
                      <span className={`big-number-glow text-[7rem] md:text-[9rem] lg:text-[11rem] transition-all duration-500 group-hover:scale-105 inline-block select-none relative ${item.layout === "number-topic-photo" ? "md:-left-20" : "md:-right-20"}`}>
                        {item.dia}
                      </span>
                    </div>
                    <div className="w-full md:w-4/6 flex justify-center">
                      <div className="flex flex-col items-start space-y-4">
                        {item.topicos.map((topico, tIdx) => (
                          <div key={tIdx} className="flex gap-4 items-start group/item">
                            <CheckCircle2 className="text-amber-500 mt-1 shrink-0 drop-shadow-[0_2px_5px_rgba(0,0,0,1)]" size={16} />
                            <p className="text-sm md:text-base text-white font-black uppercase tracking-tight text-left leading-tight text-outline-dark">
                              {topico}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="hidden md:block md:w-1/6"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Botão CTA Dourado - Antes dos depoimentos (Ajustado para ser proporcional e não muito colado) */}
      <GoldCTA extraClass="py-16 md:py-24" />

      {/* Seção Depoimentos (Fundo Branco) */}
      <section className="relative py-8 md:py-10 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-4 md:mb-6">
            <h2 className="text-[2.07rem] md:text-[2.58rem] lg:text-[3.12rem] font-black leading-tight tracking-tighter uppercase text-black">
              Mas realmente <span className="text-amber-600">Funciona?</span>
            </h2>
            <p className="text-gray-500 font-caviar text-[10px] md:text-xs uppercase tracking-widest mt-1">
              Olha o que quem já participou está dizendo
            </p>
          </div>
          <div className="max-w-4xl mx-auto relative min-h-[160px] flex items-center justify-center">
            <div className={`fade-transition ${fade ? 'fade-visible' : 'fade-hidden'} flex flex-col items-center text-center`}>
              <div className="relative mb-4">
                <Quote className="text-amber-500/20 absolute -top-6 -left-8 scale-[2]" size={32} strokeWidth={1} />
                <p className="text-[0.65rem] md:text-sm font-medium leading-relaxed max-w-xl text-gray-900 italic px-4">
                  "{testimonials[currentTestimonial].text}"
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="font-black text-amber-600 text-[10px] md:text-xs uppercase tracking-widest">
                  — {testimonials[currentTestimonial].author}
                </span>
                <div className="flex items-center gap-1.5 mt-1">
                  {[...Array(testimonials[currentTestimonial].stars)].map((_, i) => (
                    <Star key={i} className="text-amber-500 fill-amber-500" size={14} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mentor Section */}
      <section className="relative pb-12 md:pb-24 bg-black overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0 flex items-center justify-center bg-[#050505]">
          <img 
            src="https://lh3.googleusercontent.com/d/1rIUqSHaRULn8942t5PN54VBGEjz_RV13" 
            alt="Fundo Altemir Rocha" 
            className="w-full h-full object-cover opacity-80 lg:opacity-95 transition-all duration-1000 scale-100 object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/30 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col gap-12">
          <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center">
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-tight text-right drop-shadow-[0_0_20px_rgba(0,0,0,0.8)]">
                QUEM SERÁ <br />
                <span className="text-amber-500 drop-shadow-[0_0_15px_rgba(245,158,11,0.4)] italic">SEU MENTOR?</span>
              </h2>
            </div>
            <div className="w-full lg:w-1/2 text-left space-y-5">
              <div className="space-y-4 text-gray-200 text-xs md:text-sm lg:text-[1.05rem] leading-relaxed font-normal max-w-xl font-caviar">
                <p className="drop-shadow-lg text-white/90">
                  Meu nome é <span className="text-amber-500 font-bold text-lg md:text-xl">Altemir Rocha.</span> <br />
                  Sou corretor de imóveis, empresário e mentor dos melhores <br />
                  <span className="font-bold">corretores do Brasil.</span>
                </p>
                <p className="drop-shadow-lg opacity-95 text-white/85">
                  Especializado no atendimento ao cliente, sou considerado <br />
                  <span className="font-bold text-white">o maior gerador de corretores de sucesso do Brasil,</span> <br />
                  através dos meus treinamentos e mentorias.
                </p>
                <p className="drop-shadow-lg opacity-90 text-white/80">
                  Tenho levado corretores e corretoras a faturarem 10, 15, 20 mil por semana com tudo que ensino em meus treinamentos e mentorias, gerando um grande crescimento e consistência nas vendas.
                </p>
                <p className="drop-shadow-lg opacity-90 text-white/80">
                  Com uma gama de treinamentos que vão de <br />
                  <span className="text-amber-400">R$ 997,00 até R$ 150.000,00 para ajudar corretores</span> <br />
                  e imobiliários a terem sucesso seguindo o caminho certo!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Frase Destaque */}
      <section className="relative py-8 bg-[#050505] flex justify-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#bf953f] to-transparent">
          <div className="absolute inset-0 gold-line-glow opacity-30 blur-[1px] scale-y-[1.5]"></div>
        </div>
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto flex flex-col items-center leading-[1.2]">
            <span className="font-light uppercase text-[8px] md:text-[9px] lg:text-[10px] tracking-[0.3em] text-white/60 mb-1 text-center">
              "QUERO QUE, NESTA MENTORIA, A GENTE ALCANCE OS PATAMARES QUE VOCÊ MERECE E DESEJA,
            </span>
            <span className="font-black uppercase text-[10px] md:text-[11px] lg:text-[12px] tracking-[0.4em] text-amber-500 drop-shadow-[0_0_8px_rgba(245,158,11,0.25)] my-1">
              MUITO MAIS ALTOS.
            </span>
            <span className="font-light uppercase text-[8px] md:text-[9px] lg:text-[10px] tracking-[0.3em] text-white/60 mt-1">
              E A CADA PASSO, CONSTRUIR UMA VIDA MAIS TRANQUILA, COM MAIS NEGÓCIOS FECHADOS."
            </span>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#bf953f] to-transparent">
          <div className="absolute inset-0 gold-line-glow opacity-30 blur-[1px] scale-y-[1.5]"></div>
        </div>
      </section>

      {/* Seção de Depoimentos em Vídeo Real */}
      <section className="relative py-12 md:py-20 bg-[#050505] overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tighter leading-tight max-w-4xl mx-auto">
              Dá uma olhada no que corretores falam <br /> 
              <span className="text-amber-500">depois dos treinamentos do Altemir:</span>
            </h2>
            <div className="h-1 w-20 bg-amber-500 mx-auto mt-6 rounded-full opacity-50"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 max-w-7xl mx-auto">
            {videoIds.map((id, i) => (
              <div 
                key={i} 
                className="group relative aspect-video bg-black rounded-xl overflow-hidden border border-white/5 hover:border-amber-500/40 transition-all duration-500 shadow-2xl"
              >
                <iframe 
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${id}?modestbranding=1&rel=0`}
                  title={`Depoimento Corretor ${i + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="absolute inset-0 pointer-events-none border border-transparent group-hover:border-amber-500/30 transition-all duration-500 rounded-xl z-10"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Botão CTA Dourado - Final da página */}
      <GoldCTA />

      {/* Footer */}
      <footer className="py-12 bg-[#050505] border-t border-white/5 text-center">
        <p className="text-gray-600 text-[10px] font-black uppercase tracking-[0.4em]">
          &copy; 2026 Altemir Rocha Mentoria • Excelência no Mercado Imobiliário
        </p>
      </footer>
    </div>
  );
};

export default App;
