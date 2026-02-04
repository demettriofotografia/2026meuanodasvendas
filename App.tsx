
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
      foto: "https://lh3.googleusercontent.com/d/1XNc_ez_jX3Th3fg9N7miCQKMbOi9VnqJ",
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
      foto: "https://lh3.googleusercontent.com/d/14kQ9-BXci2U1qKSakIGIQzEowS3PDcxT",
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
      foto: "https://lh3.googleusercontent.com/d/10IcMaJ9eEAqC_GIDuaa9EZQIKNl5x4jB",
      topicos: [
        "O que faz um corretor de imóveis vender rapidamente",
        "Comunicação leve e conquistadora",
        "Os passos cruciais do Fechamento",
        "Como garantir vendas todos os meses"
      ],
      layout: "number-topic-photo"
    }
  ];

  const MainCTA = ({ extraClass = "py-8 md:py-12" }: { extraClass?: string }) => (
    <div className={`flex justify-center w-full bg-transparent ${extraClass}`}>
      <button 
        onClick={scrollToTop}
        className="relative overflow-hidden w-[90%] md:w-auto md:min-w-[450px] bg-gradient-to-r from-[#AF9274] via-[#ecd6bd] to-[#AF9274] hover:brightness-125 text-[#2E394B] px-8 py-6 rounded-full font-black text-sm md:text-base lg:text-lg uppercase tracking-widest shadow-[0_0_40px_rgba(175,146,116,0.5)] transition-all active:scale-95 flex items-center justify-center gap-3 group border-2 border-[#AF9274]/30"
      >
        <span className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] group-hover:left-[200%] transition-all duration-1000 ease-in-out"></span>
        QUERO PARTICIPAR E GARANTIR MINHA VAGA!
        <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
      </button>
    </div>
  );

  return (
    <div className="min-h-screen selection:bg-[#AF9274] selection:text-[#2E394B] bg-[#2E394B] text-white overflow-x-hidden font-sans">
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
          .gold-shimmer {
            background: linear-gradient(
              90deg, 
              #AF9274 0%, 
              #FFFFFF 50%, 
              #AF9274 100%
            );
            background-size: 200% auto;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: shimmer 4s infinite linear;
          }
          .accent-line-glow {
            background: radial-gradient(circle, #AF9274 0%, rgba(175, 146, 116, 0) 70%);
          }
          .cronograma-row {
            position: relative;
            width: 100vw;
            left: 50%;
            right: 50%;
            margin-left: -50vw;
            margin-right: -50vw;
            background: #2E394B; 
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            transition: all 0.5s ease;
            overflow: hidden;
            min-height: 320px;
            display: flex;
            align-items: center;
          }
          .cronograma-row:hover {
            background: #38465a;
          }
          .big-number-glow {
            font-family: 'Montserrat', sans-serif;
            font-weight: 900;
            line-height: 0.8;
            color: #AF9274;
            font-style: italic;
            text-shadow: 0 0 30px rgba(175, 146, 116, 0.4), 0 0 60px rgba(175, 146, 116, 0.2);
            filter: drop-shadow(0 0-10px rgba(175, 146, 116, 0.3));
            z-index: 5;
          }
          .bg-photo-stretch {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: 1;
            opacity: 0.8;
            transition: opacity 0.5s ease, transform 0.8s ease;
          }
          .cronograma-row:hover .bg-photo-stretch {
            opacity: 1;
            transform: scale(1.05);
          }
          .text-outline-dark {
            text-shadow: 
              -1px -1px 0 #2E394B,  
               1px -1px 0 #2E394B,
              -1px  1px 0 #2E394B,
               1px  1px 0 #2E394B,
               0 4px 15px rgba(46, 57, 75, 1);
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
      <header className="fixed top-0 w-full z-50 bg-[#2E394B]/80 backdrop-blur-xl border-b border-white/5">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="https://lh3.googleusercontent.com/d/1bv5Ps27gf3DuBVAjmRpX63sXaVQ0U9ol" 
              alt="Altemir Rocha Logo" 
              className="h-10 md:h-12 w-auto object-contain brightness-0 invert opacity-90"
            />
          </div>
          <div className="hidden md:block">
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#AF9274]/10 border border-[#AF9274]/20 text-[#AF9274] text-[10px] font-black uppercase tracking-widest">
              <span className="w-1.5 h-1.5 bg-[#AF9274] rounded-full animate-pulse"></span>
              SEJA UM CORRETOR VENCEDOR!
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative flex flex-col justify-center pt-32 pb-16 overflow-hidden min-h-[80vh] lg:min-h-[85vh]">
        <div className="absolute inset-0 z-0 h-full">
          <img 
            src="https://lh3.googleusercontent.com/d/16XGQ-7GRHXhk0dMcSiEJqJo90BdfvIdg" 
            alt="Altemir Rocha - Mentor" 
            className="w-full h-full object-cover object-top lg:object-[10%_0%] opacity-80 lg:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#2E394B]/40 to-[#2E394B] hidden lg:block"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#2E394B]/40 via-transparent to-[#2E394B] lg:hidden"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center lg:items-end text-center lg:text-right max-w-7xl ml-auto space-y-6">
            <div className="lg:max-w-2xl space-y-3">
              <h1 className="text-[2.07rem] md:text-[2.58rem] lg:text-[3.12rem] font-black leading-tight tracking-tighter uppercase drop-shadow-2xl text-white">
                VENDA TODOS OS MESES <br />
                <span className="text-[#AF9274]">COM TRANQUILIDADE</span> <br />
                E ALTAS COMISSÕES.
              </h1>
              
              <div className="inline-block px-4 py-1.5 rounded-full bg-[#AF9274]/20 border border-[#AF9274]/40 text-[#AF9274] font-bold text-[9px] uppercase tracking-[0.2em]">
                3 Noites de treinamento 100% Online e gratuito
              </div>
            </div>

            <div className="space-y-5 lg:max-w-lg">
              <p className="text-sm md:text-lg text-white font-semibold leading-relaxed drop-shadow-lg font-caviar">
                O passo a passo validado para corretores que desejam dominar o mercado imobiliário em 2026 com previsibilidade e escala.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-end gap-3 mt-2">
                <div className="flex items-center gap-2 bg-[#2E394B]/60 backdrop-blur-md px-3 py-2 rounded-xl border border-white/20">
                  <Calendar className="text-[#AF9274]" size={14} />
                  <span className="font-bold text-xs">09-10-11 FEV</span>
                </div>
                <div className="flex items-center gap-2 bg-[#2E394B]/60 backdrop-blur-md px-3 py-2 rounded-xl border border-white/20">
                  <Clock className="text-[#AF9274]" size={14} />
                  <span className="font-bold text-xs">19:00 (Brasília)</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:max-w-3xl pt-4">
              <div className="bg-[#2E394B]/95 backdrop-blur-2xl p-6 md:p-8 rounded-[1.5rem] border border-white/20 shadow-2xl relative">
                <div className="absolute -top-3 left-1/2 lg:left-auto lg:right-6 -translate-x-1/2 lg:translate-x-0 bg-[#AF9274] text-[#2E394B] px-5 py-1 rounded-full font-black text-[9px] uppercase tracking-widest">
                  Inscrição Gratuita
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-4 items-center justify-center">
                  <div className="w-full space-y-1 text-left">
                    <label className="text-[8px] uppercase font-black text-white/70 tracking-widest ml-1">Nome</label>
                    <input 
                      type="text" 
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      placeholder="Nome completo"
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-xs text-white focus:outline-none focus:border-[#AF9274]/50 transition-all placeholder:text-white/50"
                      required
                    />
                  </div>
                  <div className="w-full space-y-1 text-left">
                    <label className="text-[8px] uppercase font-black text-white/70 tracking-widest ml-1">E-mail</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seu@email.com"
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-xs text-white focus:outline-none focus:border-[#AF9274]/50 transition-all placeholder:text-white/50"
                      required
                    />
                  </div>
                  <div className="w-full space-y-1 text-left">
                    <label className="text-[8px] uppercase font-black text-white/70 tracking-widest ml-1">WhatsApp</label>
                    <input 
                      type="tel" 
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      placeholder="(00) 00000-0000"
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-xs text-white focus:outline-none focus:border-[#AF9274]/50 transition-all placeholder:text-white/50"
                      required
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full lg:w-auto lg:min-w-[140px] bg-gradient-to-r from-[#AF9274] to-[#c5ab8f] hover:brightness-110 text-[#2E394B] h-[45px] mt-3 lg:mt-[1.1rem] rounded-lg font-black text-[10px] uppercase tracking-tighter shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2"
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
      <div className="relative py-6 bg-[#2E394B] overflow-hidden z-20 border-y border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#AF9274] to-transparent">
          <div className="absolute inset-0 accent-line-glow opacity-40 blur-[2px] scale-y-[2]"></div>
        </div>

        <div className="animate-marquee whitespace-nowrap py-1">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center mx-6 md:mx-12">
              <span className="gold-shimmer text-base md:text-lg lg:text-xl font-light uppercase tracking-[0.35em] drop-shadow-sm leading-none">
                2026 MEU ANO DAS VENDAS
              </span>
              <div className="mx-8 md:mx-16 w-[1px] h-4 bg-white/10"></div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#AF9274] to-transparent">
          <div className="absolute inset-0 accent-line-glow opacity-40 blur-[2px] scale-y-[2]"></div>
        </div>
      </div>

      {/* Seção Cronograma */}
      <section className="relative pt-16 md:pt-24 pb-0 bg-[#2E394B]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tighter italic max-w-4xl mx-auto leading-tight text-center text-white">
              O que você vai aprender <br /> <span className="text-[#AF9274]">nessas três noites:</span>
            </h2>
            <div className="h-1.5 w-24 bg-[#AF9274] mx-auto mt-6 rounded-full opacity-60"></div>
          </div>

          <div className="flex flex-col gap-8">
            {cronograma.map((item, idx) => (
              <div key={idx} className="cronograma-row group">
                <img 
                  src={item.foto} 
                  alt={`Dia ${item.dia}`} 
                  className="bg-photo-stretch"
                />
                <div className="container mx-auto max-w-5xl relative z-10 w-full px-6">
                  <div className={`flex flex-col md:flex-row items-center justify-between w-full py-12 gap-8 md:gap-0 ${item.layout === "photo-topic-number" ? "md:flex-row-reverse" : ""}`}>
                    <div className={`w-full md:w-1/6 flex ${item.layout === "number-topic-photo" ? "md:justify-start" : "md:justify-end"} justify-center relative`}>
                      <span className={`big-number-glow text-[7.5rem] md:text-[9.5rem] lg:text-[11.5rem] transition-all duration-500 group-hover:scale-105 inline-block select-none relative ${item.layout === "number-topic-photo" ? "md:-left-20" : "md:-right-20"}`}>
                        {item.dia}
                      </span>
                    </div>
                    <div className="w-full md:w-4/6 flex justify-center">
                      <div className="flex flex-col items-start space-y-5">
                        {item.topicos.map((topico, tIdx) => (
                          <div key={tIdx} className="flex gap-4 items-start group/item">
                            <CheckCircle2 className="text-[#AF9274] mt-1 shrink-0 drop-shadow-[0_2px_10px_rgba(0,0,0,1)]" size={20} />
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

      {/* Botão CTA - Antes dos depoimentos */}
      <MainCTA extraClass="py-20 md:py-28" />

      {/* Seção Depoimentos (Fundo Claro) */}
      <section className="relative py-16 md:py-24 bg-[#fdfdfd] overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-10 md:mb-12">
            <h2 className="text-[2.2rem] md:text-[2.8rem] lg:text-[3.5rem] font-black leading-tight tracking-tighter uppercase text-[#2E394B]">
              Mas realmente <span className="text-[#AF9274]">Funciona?</span>
            </h2>
            <p className="text-[#2E394B]/80 font-bold text-[11px] md:text-xs uppercase tracking-widest mt-2">
              Olha o que quem já participou está dizendo
            </p>
          </div>
          <div className="max-w-4xl mx-auto relative min-h-[180px] flex items-center justify-center">
            <div className={`fade-transition ${fade ? 'fade-visible' : 'fade-hidden'} flex flex-col items-center text-center`}>
              <div className="relative mb-6">
                <Quote className="text-[#AF9274]/20 absolute -top-8 -left-10 scale-[2.5]" size={40} strokeWidth={1} />
                <p className="text-sm md:text-base lg:text-lg font-bold leading-relaxed max-w-2xl text-[#2E394B] italic px-6">
                  "{testimonials[currentTestimonial].text}"
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="font-black text-[#AF9274] text-[11px] md:text-sm uppercase tracking-widest">
                  — {testimonials[currentTestimonial].author}
                </span>
                <div className="flex items-center gap-1.5 mt-2">
                  {[...Array(testimonials[currentTestimonial].stars)].map((_, i) => (
                    <Star key={i} className="text-[#AF9274] fill-[#AF9274]" size={16} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mentor Section */}
      <section className="relative pb-16 md:pb-32 bg-[#2E394B] overflow-hidden min-h-[85vh] flex items-center">
        <div className="absolute inset-0 z-0 flex items-center justify-center bg-[#2E394B]">
          <img 
            src="https://lh3.googleusercontent.com/d/1rIUqSHaRULn8942t5PN54VBGEjz_RV13" 
            alt="Fundo Altemir Rocha" 
            className="w-full h-full object-cover opacity-80 lg:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2E394B] via-[#2E394B]/30 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col gap-12">
          <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center">
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-tight text-right text-white">
                QUEM SERÁ <br />
                <span className="text-[#AF9274] italic">SEU MENTOR?</span>
              </h2>
            </div>
            <div className="w-full lg:w-1/2 text-left space-y-6">
              <div className="space-y-5 text-white text-sm md:text-base lg:text-[1.1rem] leading-relaxed font-bold max-w-xl font-caviar drop-shadow-lg">
                <p>
                  Meu nome é <span className="text-[#AF9274] font-black text-xl md:text-2xl">Altemir Rocha.</span> <br />
                  Sou corretor de imóveis, empresário e mentor dos melhores <br />
                  <span className="font-black text-white">corretores do Brasil.</span>
                </p>
                <p>
                  Especializado no atendimento ao cliente, sou considerado <br />
                  <span className="font-black text-white">o maior gerador de corretores de sucesso do Brasil,</span> <br />
                  através dos meus treinamentos e mentorias.
                </p>
                <p>
                  Tenho levado corretores e corretoras a faturarem 10, 15, 20 mil por semana com tudo que ensino em meus treinamentos e mentorias, gerando um grande crescimento e consistência nas vendas.
                </p>
                <p>
                  Com uma gama de treinamentos que vão de <br />
                  <span className="text-[#AF9274]">R$ 997,00 até R$ 150.000,00 para ajudar corretores</span> <br />
                  e imobiliários a terem sucesso seguindo o caminho certo!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Frase Destaque */}
      <section className="relative py-12 bg-[#2E394B] flex justify-center overflow-hidden border-y border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#AF9274] to-transparent">
          <div className="absolute inset-0 accent-line-glow opacity-30 blur-[1px] scale-y-[1.5]"></div>
        </div>
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <span className="font-bold uppercase text-[9px] md:text-[10px] lg:text-[11px] tracking-wider text-white mb-0.5 text-center drop-shadow-md leading-tight">
              "QUERO QUE, NESTA MENTORIA, A GENTE ALCANCE OS PATAMARES QUE VOCÊ MERECE E DESEJA,
            </span>
            <span className="font-black uppercase text-[11px] md:text-[12px] lg:text-[14px] tracking-widest text-[#AF9274] drop-shadow-[0_0_10px_rgba(0,0,0,0.5)] my-0.5 leading-tight">
              MUITO MAIS ALTOS.
            </span>
            <span className="font-bold uppercase text-[9px] md:text-[10px] lg:text-[11px] tracking-wider text-white mt-0.5 text-center drop-shadow-md leading-tight">
              E A CADA PASSO, CONSTRUIR UMA VIDA MAIS TRANQUILA, COM MAIS NEGÓCIOS FECHADOS."
            </span>
            <img 
              src="https://lh3.googleusercontent.com/d/1ia5oofY83aPR1m9ZAl1qaCFxxmnQn8Y7" 
              alt="Logo Dr. Matheus Casé" 
              className="h-10 md:h-12 w-auto mt-6 opacity-90 object-contain drop-shadow-[0_0_10px_rgba(175,146,116,0.3)]"
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#AF9274] to-transparent">
          <div className="absolute inset-0 accent-line-glow opacity-30 blur-[1px] scale-y-[1.5]"></div>
        </div>
      </section>

      {/* Seção de Depoimentos em Vídeo Real */}
      <section className="relative py-16 md:py-24 bg-[#2E394B] overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tighter leading-tight max-w-4xl mx-auto text-white">
              Dá uma olhada no que corretores falam <br /> 
              <span className="text-[#AF9274]">depois dos treinamentos do Altemir:</span>
            </h2>
            <div className="h-1.5 w-24 bg-[#AF9274] mx-auto mt-8 rounded-full opacity-60"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
            {videoIds.map((id, i) => (
              <div 
                key={i} 
                className="group relative aspect-video bg-[#38465a] rounded-2xl overflow-hidden border border-white/10 hover:border-[#AF9274]/50 transition-all duration-500 shadow-2xl"
              >
                <iframe 
                  className="w-full h-full transition-all duration-700"
                  src={`https://www.youtube.com/embed/${id}?modestbranding=1&rel=0`}
                  title={`Depoimento Corretor ${i + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="absolute inset-0 pointer-events-none border border-transparent group-hover:border-[#AF9274]/40 transition-all duration-500 rounded-2xl z-10"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Botão CTA Final */}
      <MainCTA extraClass="py-12 md:py-16" />

      {/* Footer */}
      <footer className="py-12 bg-[#2E394B] border-t border-white/10 text-center">
        <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.5em]">
          &copy; 2026 Altemir Rocha Mentoria • Excelência no Mercado Imobiliário
        </p>
      </footer>
    </div>
  );
};

export default App;
