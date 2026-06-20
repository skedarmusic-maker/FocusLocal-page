import { useState } from 'react';
import {
  Check,
  X,
  ArrowRight,
  Search,
  TrendingUp,
  Sparkles,
  BarChart3,
  Zap,
  ChevronDown,
  FileText,
  AlertCircle,
  MessageSquare,
  MapPin,
  Share2,
  ShieldCheck,
  Download,
  Smartphone,
  Laptop
} from 'lucide-react';
import './App.css';

function App() {
  // Estado para as funcionalidades interativas
  const [activeTab, setActiveTab] = useState(0);

  // Estado para os itens do FAQ
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  const features = [
    {
      id: 0,
      title: "1. Radar de Prospecção Ativa",
      subtitle: "Filtros de Leads & Visualização no Mapa",
      desc: "Varra o Google Maps por nicho e cidade para extrair leads qualificados. Use filtros inteligentes (como 'sem site', 'sem telefone' ou 'nota baixa') e visualize os potenciais clientes localizados diretamente no mapa.",
      icon: <Search className="feature-item-icon" size={24} />,
      bullets: [
        "Filtros de Qualificação: Encontre na hora empresas locais sem presença online estruturada.",
        "Visualização no Mapa: Mapa interativo para planejar e organizar abordagens por região.",
        "Propostas Rápidas no WhatsApp: Inicie conversas enviando a auditoria inicial da empresa."
      ],
      mediaType: "image",
      mediaUrl: "/images/Mockup__📱_phone_202606191136.jpeg",
      alt: "Prospecção no Celular"
    },
    {
      id: 1,
      title: "2. Monitoramento de Ranking Local",
      subtitle: "Acompanhe Suas Palavras-Chave",
      desc: "Monitore o posicionamento da ficha no Google para as principais palavras-chave do nicho do seu cliente. Descubra a posição real da ficha para cada termo pesquisado e acompanhe a evolução do SEO local.",
      icon: <TrendingUp className="feature-item-icon" size={24} />,
      bullets: [
        "Rank Tracker de Termos: Insira as palavras-chave mais importantes e estratégicas para o negócio.",
        "Posicionamento no Google: Veja exatamente em qual posição a ficha aparece nos resultados locais.",
        "SEO Local de Alta Performance: Monitore as flutuações e garanta o posicionamento nas primeiras posições."
      ],
      mediaType: "image",
      mediaUrl: "/images/Flow_202606191327.jpeg",
      alt: "Monitoramento de Ranking"
    },
    {
      id: 2,
      title: "3. Produtividade & Reputação com IA",
      subtitle: "Posts, Respostas em 1 Clique & QR Codes",
      desc: "Facilite as rotinas operacionais e aumente as avaliações dos clientes. Use a IA como copiloto para criar posts otimizados e responder reviews com 1 clique, além de gerar Cards de Avaliação físicos com QR Code personalizado.",
      icon: <Sparkles className="feature-item-icon" size={24} />,
      bullets: [
        "Respostas com 1 Clique: A IA analisa o tom da avaliação do cliente e gera a resposta ideal de forma instantânea.",
        "Gerador de QR Codes de Avaliação: Crie e imprima cards com a marca e cores do cliente para colocar no balcão.",
        "Redator de Postagens GBP: Crie conteúdos persuasivos e rápidos para manter o perfil ativo no Google."
      ],
      mediaType: "video",
      mediaUrl: "/images/1000329384_202606191326.mp4",
      alt: "Vídeo Demonstrativo do Sistema"
    },
    {
      id: 3,
      title: "4. Relatórios PDF & Histórico de Evolução",
      subtitle: "Auditorias com Blur & Evolução Temporal",
      desc: "Gere auditorias profissionais em PDF com apenas um clique. Utilize a função de 'PDF Pré-Venda com efeito Blur' para ocultar dados estratégicos e fechar propostas, além de exibir o progresso do SEO com gráficos de evolução histórica.",
      icon: <FileText className="feature-item-icon" size={24} />,
      bullets: [
        "Auditoria Completa & Pré-Venda Blur: PDFs personalizados e estratégicos para fechar contratos.",
        "Gráfico de Evolução (Histórico): Prove o valor do seu serviço mostrando a evolução da saúde da ficha.",
        "Dados e Métricas GBP Reais: Relatórios limpos com visualizações, cliques, rotas, chamadas e mensagens reais."
      ],
      mediaType: "image",
      mediaUrl: "/images/tela inicial.png",
      alt: "Demonstração de Relatórios PDF"
    }
  ];

  const faqs = [
    {
      question: "Como funciona o monitoramento geográfico por GPS?",
      answer: "Diferente de outras ferramentas que usam apenas o nome genérico da cidade, o FocusLocal utiliza coordenadas GPS exatas (latitude e longitude) para simular buscas a partir de pontos específicos do mapa. Isso permite que você saiba o ranking real do seu cliente em diferentes bairros ou quadras ao redor do negócio dele."
    },
    {
      question: "Eu preciso pagar alguma cota adicional para a API do Google?",
      answer: "Não! O FocusLocal já inclui toda a infraestrutura necessária de consultas. Além disso, nosso sistema conta com um cache inteligente exclusivo. Se você consultar o mesmo termo no mesmo dia, os dados são puxados do nosso cache, economizando seus créditos sem custos ocultos."
    },
    {
      question: "Como funciona a geração de mensagens de abordagem pelo Gemini?",
      answer: "O sistema faz uma varredura completa da ficha do Google Meu Negócio do lead. Ele detecta falhas (como a falta de site profissional, telefone, fotos ou horários desatualizados) e envia esses dados ao Gemini. A IA gera duas opções de abordagem comercial prontas para enviar no WhatsApp: uma rápida ('Quick') e uma mais detalhada e persuasiva ('Impact')."
    },
    {
      question: "O plano de R$ 89,00/mês possui fidelidade?",
      answer: "Nenhum tipo de fidelidade ou contrato longo. O FocusLocal é uma assinatura mensal recorrente que você pode cancelar a qualquer momento diretamente pelo seu painel do cliente, sem burocracias ou multas."
    },
    {
      question: "Quantos clientes eu consigo gerenciar no plano Pro?",
      answer: "Não existe qualquer limite! Você pode cadastrar e gerenciar quantos perfis e clientes quiser dentro do FocusLocal Pro. O plano Pro de R$ 89/mês inclui 20 créditos mensais de rastreamento de ranking geográfico e acesso ilimitado ao Radar de Prospecção e à IA Copywriter."
    }
  ];

  return (
    <>
      {/* HEADER / NAVBAR */}
      <header className="header">
        <div className="container header-container">
          <a href="#" className="logo">
            <img src="/images/LOGO.png" alt="FocusLocal Logo" className="logo-img" />
            <span>Focus<span className="logo-span">Local</span></span>
          </a>
          <nav className="nav-links">
            <a href="#dores" className="nav-link">O Problema</a>
            <a href="#funcionalidades" className="nav-link">Funcionalidades</a>
            <a href="#diferenciais" className="nav-link">Diferenciais</a>
            <a href="#relatorios" className="nav-link">Relatórios Amostra</a>
            <a href="#preco" className="nav-link">Preço</a>
            <a href="#faq" className="nav-link">Dúvidas</a>
          </nav>
          <a href="#preco" className="btn btn-outline-primary" style={{ padding: '8px 16px', fontSize: '14px' }}>
            Começar Agora
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="hero" id="home">
        <div className="bg-glow-1"></div>
        <div className="container">
          <div className="hero-split">

            {/* Coluna esquerda - Texto */}
            <div className="hero-text">
              <span className="hero-tagline">A plataforma definitiva de automação para Google Meu Negócio</span>
              <h1>
                Prospecte, Audite e Gerencie no Google <span className="gradient-text">10x Mais Rápido</span>
              </h1>
              <p className="hero-subtitle">
                Encontre leads no Google Maps, audite fichas do GBP em segundos, gere abordagens com IA e monitore seus rankings de palavras-chave — tudo em um só painel.
              </p>

              {/* Micro-provas de valor */}
              <div className="hero-proof-row">
                <div className="hero-proof-item">
                  <span className="hero-proof-number">10x</span>
                  <span className="hero-proof-label">Mais rápido que manual</span>
                </div>
                <div className="hero-proof-divider"></div>
                <div className="hero-proof-item">
                  <span className="hero-proof-number">R$89</span>
                  <span className="hero-proof-label">Acesso completo / mês</span>
                </div>
                <div className="hero-proof-divider"></div>
                <div className="hero-proof-item">
                  <span className="hero-proof-number">1 painel</span>
                  <span className="hero-proof-label">Prospecção + Ranking + IA</span>
                </div>
              </div>

              <div className="hero-cta-wrapper">
                <a href="#preco" className="btn btn-primary">
                  Quero Acessar o FocusLocal Agora <ArrowRight size={18} />
                </a>
                <span className="cta-subtext">Sem contratos. Cancele quando quiser.</span>
              </div>
            </div>

            {/* Coluna direita - Vídeo de demonstração do Notebook */}
            <div className="hero-visual">
              <div className="hero-visual-glow"></div>
              <div className="desktop-browser-frame hero-browser-frame">
                <div className="browser-header">
                  <div className="browser-dots">
                    <span className="browser-dot red"></span>
                    <span className="browser-dot yellow"></span>
                    <span className="browser-dot green"></span>
                  </div>
                  <div className="browser-address">app.focuslocal.com.br/dashboard</div>
                </div>
                <div className="browser-content">
                  <video
                    className="browser-video"
                    controls
                    preload="metadata"
                    poster="/images/tela inicial.png"
                  >
                    <source src="/images/466208c90daaecd1bd366c976cac0550_1 (1).webm" type="video/webm" />
                    Seu navegador não suporta vídeos.
                  </video>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>



      {/* DOBRA DE DORES (O Cenário Atual) */}
      <section className="pain-section" id="dores">
        <div className="bg-glow-2"></div>
        <div className="container">
          <div className="section-header">
            <span className="badge" style={{ background: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.2)', color: '#EF4444' }}>
              O Cenário Atual
            </span>
            <h2>Gerenciar e prospectar clientes de SEO Local não precisa ser um pesadelo manual</h2>
            <p>Se você é Gestor de Tráfego, Consultor de SEO Local ou Dono de Agência, sabe exatamente como é sofrer com esses gargalos:</p>
          </div>

          <div className="pain-grid">
            <div className="pain-card">
              <div className="pain-icon-wrapper">
                <AlertCircle size={24} />
              </div>
              <h3>Prospecção cansativa</h3>
              <p>Ficar abrindo o Google Maps aba por aba procurando empresas com fichas desatualizadas, erros no GBP ou sem site próprio profissional. Horas de esforço manual para pouco resultado.</p>
            </div>

            <div className="pain-card">
              <div className="pain-icon-wrapper">
                <AlertCircle size={24} />
              </div>
              <h3>Ferramentas caras e em dólar</h3>
              <p>Plataformas gringas que cobram taxas abusivas no cartão de crédito, flutuam com o câmbio ou limitam drasticamente suas consultas de ranking por moeda estrangeira.</p>
            </div>

            <div className="pain-card">
              <div className="pain-icon-wrapper">
                <AlertCircle size={24} />
              </div>
              <h3>Tempo perdido com rotina</h3>
              <p>Passar horas escrevendo respostas para avaliações de clientes uma a uma e criando postagens repetitivas para cada perfil da sua carteira. Falta de processos automatizados.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DOBRA DE BENEFÍCIOS E FUNCIONALIDADES */}
      <section className="features-section" id="funcionalidades">
        <div className="container">
          <div className="section-header">
            <span className="badge">Funcionalidades</span>
            <h2>Tudo o que a sua agência precisa em um único painel inteligente</h2>
            <p>O FocusLocal une a extração inteligente de leads e a gestão avançada do Google Business Profile (GBP) para entregar oportunidades qualificadas e automatizar o operacional da sua agência.</p>
          </div>

          <div className="features-interactive">
            {/* Esquerda: Lista de Seletores */}
            <div className="features-list">
              {features.map((feat, idx) => (
                <button
                  key={feat.id}
                  className={`feature-item-btn ${activeTab === idx ? 'active' : ''}`}
                  onClick={() => setActiveTab(idx)}
                >
                  <div className="feature-item-header">
                    {feat.icon}
                    <span className="feature-item-title">{feat.title}</span>
                  </div>
                  <p className="feature-item-desc">{feat.subtitle}</p>
                </button>
              ))}
            </div>

            {/* Direita: Card de Visualização do Recurso Selecionado */}
            <div className="glass-panel feature-display-card">
              <div className="feature-visual-container">
                {features[activeTab].mediaType === 'video' ? (
                  <video
                    className="feature-video-display"
                    autoPlay
                    loop
                    muted
                    playsInline
                    key={features[activeTab].mediaUrl}
                  >
                    <source src={features[activeTab].mediaUrl} type="video/mp4" />
                    Seu navegador não suporta vídeos.
                  </video>
                ) : (
                  <img
                    src={features[activeTab].mediaUrl}
                    alt={features[activeTab].alt}
                    className="feature-img-display"
                    key={features[activeTab].mediaUrl}
                  />
                )}
              </div>

              <div style={{ marginTop: '20px' }}>
                <h3 style={{ fontSize: '20px', color: '#FFFFFF', marginBottom: '8px' }}>
                  {features[activeTab].subtitle}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '16px' }}>
                  {features[activeTab].desc}
                </p>
                <div className="feature-bullets-container">
                  {features[activeTab].bullets.map((bullet, bIdx) => (
                    <div className="feature-bullet" key={bIdx}>
                      <span className="bullet-dot"></span>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SESSÃO DE RECURSOS / DOWNLOAD DE RELATÓRIOS (Autoridade) */}
      <section className="relatorios-section" id="relatorios" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid rgba(255, 255, 255, 0.02)' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge">Provas de Autoridade</span>
            <h2>Veja o nível de entrega que o FocusLocal gera para seus clientes</h2>
            <p>Disponibilizamos abaixo dois relatórios reais gerados pela plataforma. Baixe agora e comprove a profundidade do diagnóstico técnico que você entregará ao seu cliente final.</p>
          </div>

          <div className="grid-2">
            <div className="glass-panel pdf-download-card">
              <div className="pdf-info">
                <div className="pdf-icon-bg">
                  <FileText size={28} />
                </div>
                <div className="pdf-text">
                  <h4>Relatório de SEO Local Completo</h4>
                  <p>Exemplo real: Chaveiro Urgente 24h (Ribeirão Preto)</p>
                </div>
              </div>
              <a
                href="/images/Relatorio_Chaveiro_Urgente_24_horas,_Ribeirão_preto_Junho_2026.pdf"
                download="Relatorio_SEO_Local_Chaveiro_FocusLocal.pdf"
                className="btn btn-outline-primary"
                style={{ padding: '10px 18px', fontSize: '14px' }}
                target="_blank"
                rel="noreferrer"
              >
                <Download size={16} /> Baixar PDF (16MB)
              </a>
            </div>

            <div className="glass-panel pdf-download-card">
              <div className="pdf-info">
                <div className="pdf-icon-bg">
                  <FileText size={28} />
                </div>
                <div className="pdf-text">
                  <h4>Diagnóstico de Saúde GBP</h4>
                  <p>Check técnico de otimização de ficha Google Meu Negócio</p>
                </div>
              </div>
              <a
                href="/images/relatorio de saude FocusLocal.pdf"
                download="Diagnostico_Saude_GBP_FocusLocal.pdf"
                className="btn btn-outline-primary"
                style={{ padding: '10px 18px', fontSize: '14px' }}
                target="_blank"
                rel="noreferrer"
              >
                <Download size={16} /> Baixar PDF (358KB)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS COMPETITIVOS */}
      <section className="differentials-section" id="diferenciais">
        <div className="container">
          <div className="section-header">
            <span className="badge">Por que Escolher o FocusLocal</span>
            <h2>Por que os gestores profissionais escolheram o FocusLocal?</h2>
            <p>Desenvolvido de gestores para gestores. Nós focamos no que realmente traz retorno financeiro e otimização de tempo.</p>
          </div>

          <div className="diff-grid">
            <div className="glass-panel diff-card">
              <div className="diff-icon-circle">
                <Zap size={22} />
              </div>
              <h3>Economia Real com Cache Inteligente</h3>
              <p>Atualizações dentro do mesmo dia usam nosso cache exclusivo, blindando sua cota de créditos e reduzindo seus custos operacionais a quase zero.</p>
            </div>

            <div className="glass-panel diff-card">
              <div className="diff-icon-circle">
                <MessageSquare size={22} />
              </div>
              <h3>Foco Comercial Integrado</h3>
              <p>Não somos apenas um dashboard de relatórios estáticos. Nós entregamos o lead qualificado e a copy de vendas exata com IA para você fechar novos contratos recorrentes.</p>
            </div>

            <div className="glass-panel diff-card">
              <div className="diff-icon-circle">
                <ShieldCheck size={22} />
              </div>
              <h3>Interface Premium & Clean</h3>
              <p>Painel escuro moderno focado em dados puros. Sem poluição visual, direto ao ponto para otimizar sua tomada de decisão operacional.</p>
            </div>
          </div>

          {/* Comparativo de Recursos */}
          <div className="glass-panel comparison-card">
            <h3 style={{ fontSize: '22px', marginBottom: '24px', textAlign: 'center' }}>Comparativo: FocusLocal vs Outros Métodos</h3>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Recurso</th>
                  <th>Prospecção Manual</th>
                  <th>Plataformas Gringas</th>
                  <th className="comparison-highlight">FocusLocal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Custo mensal estimado</td>
                  <td>Grátis (mas custa dezenas de horas)</td>
                  <td>R$ 350 - R$ 900+ (em dólar)</td>
                  <td className="comparison-highlight">R$ 89,00 (Preço Fixo)</td>
                </tr>
                <tr>
                  <td>Busca em lote de empresas do Maps</td>
                  <td><X size={18} className="comparison-cross" /> Não (uma por uma)</td>
                  <td><Check size={18} className="comparison-check" /> Sim</td>
                  <td className="comparison-highlight"><Check size={18} className="comparison-check" /> Sim (Ilimitado)</td>
                </tr>
                <tr>
                  <td>Análise de erros e copy comercial com IA</td>
                  <td><X size={18} className="comparison-cross" /> Não</td>
                  <td><X size={18} className="comparison-cross" /> Raras possuem copy</td>
                  <td className="comparison-highlight"><Check size={18} className="comparison-check" /> Sim (Gemini integrado)</td>
                </tr>
                <tr>
                  <td>Rank Tracker de Palavras-Chave</td>
                  <td><X size={18} className="comparison-cross" /> Não</td>
                  <td><Check size={18} className="comparison-check" /> Sim</td>
                  <td className="comparison-highlight"><Check size={18} className="comparison-check" /> Sim (GBP Check Style)</td>
                </tr>
                <tr>
                  <td>Respostas de avaliações e posts com IA</td>
                  <td><X size={18} className="comparison-cross" /> Não (Manual)</td>
                  <td><X size={18} className="comparison-cross" /> Raramente</td>
                  <td className="comparison-highlight"><Check size={18} className="comparison-check" /> Sim (Copiloto Integrado)</td>
                </tr>
                <tr>
                  <td>PDF Pré-Venda (Efeito Blur/Desfocado)</td>
                  <td><X size={18} className="comparison-cross" /> Não</td>
                  <td><X size={18} className="comparison-cross" /> Não</td>
                  <td className="comparison-highlight"><Check size={18} className="comparison-check" /> Sim (Exclusivo para vendas)</td>
                </tr>
                <tr>
                  <td>Cards de Avaliação & QR Code de balcão</td>
                  <td><X size={18} className="comparison-cross" /> Não</td>
                  <td><X size={18} className="comparison-cross" /> Não</td>
                  <td className="comparison-highlight"><Check size={18} className="comparison-check" /> Sim (Customizável)</td>
                </tr>
                <tr>
                  <td>Histórico de Evolução da Ficha</td>
                  <td><X size={18} className="comparison-cross" /> Não</td>
                  <td><Check size={18} className="comparison-check" /> Sim</td>
                  <td className="comparison-highlight"><Check size={18} className="comparison-check" /> Sim (Auditorias passadas)</td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE MOBILIDADE E LIBERDADE GEOGRÁFICA */}
      <section className="mobility-section" id="mobilidade">
        <div className="bg-glow-3"></div>
        <div className="container">
          <div className="mobility-grid">
            
            {/* Coluna esquerda: Texto persuasivo */}
            <div className="mobility-text">
              <span className="badge">Liberdade & Eficiência</span>
              <h2>Seu escritório na palma da mão, onde quer que você esteja</h2>
              <p>
                A vida de um consultor de SEO Local ou gestor de agência exige flexibilidade. Por isso, o FocusLocal foi desenhado para ser <strong>100% responsivo e otimizado para celulares</strong>.
              </p>
              <p className="mobility-emphasis">
                Não importa se você está em um café, viajando ou no conforto do seu sofá: você tem a mesma velocidade, precisão e facilidade de uso do que se estivesse na sua mesa de escritório tradicional.
              </p>

              <div className="mobility-features">
                <div className="mobility-feat-item">
                  <div className="mobility-feat-icon">
                    <Smartphone size={20} />
                  </div>
                  <div className="mobility-feat-info">
                    <h4>Operação Mobile Completa</h4>
                    <p>Encontre leads qualificados no Maps, faça diagnósticos e envie abordagens personalizadas com IA direto do celular.</p>
                  </div>
                </div>

                <div className="mobility-feat-item">
                  <div className="mobility-feat-icon">
                    <Laptop size={20} />
                  </div>
                  <div className="mobility-feat-info">
                    <h4>Transição Sem Costuras</h4>
                    <p>Seus dados e relatórios estão sempre sincronizados. Comece a prospecção no notebook e continue a fechar contratos na rua.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Coluna direita: Visual composto (Laptop e Celular) */}
            <div className="mobility-visual">
              <div className="mobility-visual-glow"></div>
              <div className="mockups-wrapper">
                <div className="laptop-mockup-container">
                  <img
                    src="/images/Mockup____laptop_202606191136-removebg-preview.png"
                    alt="FocusLocal no Notebook"
                    className="img-laptop"
                  />
                </div>
                <div className="phone-mockup-container">
                  <img
                    src="/images/Celular_em_mocup_202606191740.jpeg"
                    alt="FocusLocal no Celular"
                    className="img-phone"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SESSÃO DE PREÇO / OFERTA DIRETA */}
      <section className="pricing-section" id="preco">
        <div className="container">
          <div className="section-header">
            <span className="badge">Assinatura Sem Fidelidade</span>
            <h2>O empurrão que faltava para escalar o seu faturamento com SEO Local</h2>
            <p>Pare de perder tempo com processos manuais. Adote a inteligência de dados a favor da sua agência hoje mesmo.</p>
          </div>

          <div className="pricing-card-wrapper">
            <div className="glass-panel pricing-card">
              <span className="plan-badge">O mais vendido</span>
              <h3 className="plan-name">Plano FocusLocal Pró</h3>

              <div className="price-box">
                <span className="currency">R$</span>
                <span className="price">89,00</span>
                <span className="period">/mês</span>
              </div>

              <p className="plan-description">
                Acesso completo a todas as ferramentas do sistema para prospectar novos clientes de forma automatizada e gerenciar sua carteira atual com inteligência artificial.
              </p>

              <div className="pricing-features-list">
                <div className="pricing-feature-item">
                  <Check size={18} className="pricing-feature-icon" />
                  <span><strong>Acesso completo</strong> ao Radar de Prospecção Ativa</span>
                </div>
                <div className="pricing-feature-item">
                  <Check size={18} className="pricing-feature-icon" />
                  <span>Diagnóstico GBP avançado (Score de Saúde 0 a 100)</span>
                </div>
                <div className="pricing-feature-item">
                  <Check size={18} className="pricing-feature-icon" />
                  <span>IA Copywriter integrada (Abordagens comerciais WhatsApp)</span>
                </div>
                <div className="pricing-feature-item">
                  <Check size={18} className="pricing-feature-icon" />
                  <span><strong>20 créditos mensais</strong> de Rank Tracker Geográfico avançado</span>
                </div>
                <div className="pricing-feature-item">
                  <Check size={18} className="pricing-feature-icon" />
                  <span>Gerador de postagens GBP e respondente de avaliações com IA</span>
                </div>

                <div className="pricing-feature-item">
                  <Check size={18} className="pricing-feature-icon" />
                  <span><strong>Perfis ilimitados:</strong> gerencie quantos clientes e fichas desejar</span>
                </div>
                <div className="pricing-feature-item">
                  <Check size={18} className="pricing-feature-icon" />
                  <span><strong>Sem contrato longo:</strong> Cancele quando quiser pelo painel</span>
                </div>
              </div>

              <a href="https://pay.kiwify.com.br" className="btn btn-primary" style={{ width: '100%', fontSize: '18px', padding: '16px' }} target="_blank" rel="noreferrer">
                Começar Agora por R$ 89/mês
              </a>

              <div className="pricing-card-footer">
                Pagamento 100% seguro via Kiwify • Liberação imediata dos créditos.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="faq-section" id="faq">
        <div className="container">
          <div className="section-header">
            <span className="badge">Tire suas dúvidas</span>
            <h2>Perguntas Frequentes</h2>
            <p>Selecione uma das dúvidas recorrentes abaixo para saber mais detalhes sobre a plataforma.</p>
          </div>

          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`faq-item ${openFaq === idx ? 'open' : ''}`}
              >
                <button
                  className="faq-question-btn"
                  onClick={() => toggleFaq(idx)}
                >
                  <span>{faq.question}</span>
                  <ChevronDown className="faq-icon-chevron" size={18} />
                </button>
                {openFaq === idx && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div>
              <div className="footer-logo">
                <img src="/images/LOGO.png" alt="FocusLocal Logo" className="footer-logo-img" />
                <span>Focus<span className="logo-span">Local</span></span>
              </div>
              <p className="footer-tagline" style={{ marginTop: '12px' }}>
                Inteligência e Automação para Google Business Profile. Desenvolvido para agências profissionais de SEO Local.
              </p>
            </div>
            <div className="footer-links">
              <a href="#dores" className="footer-link">O Problema</a>
              <a href="#funcionalidades" className="footer-link">Funcionalidades</a>
              <a href="#diferenciais" className="footer-link">Diferenciais</a>
              <a href="#preco" className="footer-link">Preços</a>
              <a href="#faq" className="footer-link">FAQ</a>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="copyright">
              &copy; {new Date().getFullYear()} FocusLocal. Todos os direitos reservados.
            </div>
            <div className="developed-by">
              Desenvolvido com foco em alta performance e conversão.
            </div>
          </div>
        </div>
      </footer>

      {/* BOTÃO FLUTUANTE WHATSAPP */}
      <a
        href="https://wa.me/5511965843545?text=Ol%C3%A1%2C%20gostaria%20de%20tirar%20duvidas%20sobre%20o%20FocusLocal"
        className="whatsapp-float-btn"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp"
      >
        <span className="whatsapp-tooltip">Dúvidas? Fale Conosco!</span>
        <svg viewBox="0 0 24 24" className="whatsapp-icon-svg" fill="currentColor">
          <path d="M12.031 2c-5.51 0-9.986 4.477-9.986 9.986 0 1.764.459 3.486 1.332 5.006L2 22l5.148-1.348c1.472.803 3.125 1.226 4.88 1.226 5.51 0 9.989-4.47 9.989-9.98 0-5.509-4.479-9.986-9.986-9.986zm0 18.29c-1.576 0-3.12-.424-4.471-1.22l-.32-.19-3.328.87.889-3.239-.21-.334A8.257 8.257 0 0 1 3.29 11.99c0-4.561 3.712-8.272 8.272-8.272 4.561 0 8.275 3.711 8.275 8.272 0 4.567-3.71 8.297-8.267 8.297-.01 0-.02 0-.039 0zm4.535-6.182c-.249-.125-1.472-.727-1.699-.81-.228-.084-.393-.125-.558.125-.165.249-.64.81-.784.975-.145.165-.29.185-.539.06-.249-.125-1.054-.389-2.007-1.239-.74-.66-1.24-1.475-1.385-1.725-.145-.249-.015-.385.11-.51.112-.112.249-.29.374-.435.125-.145.165-.249.249-.415.085-.165.04-.31-.02-.435-.06-.125-.558-1.348-.765-1.849-.2-.486-.406-.419-.558-.426-.145-.007-.31-.007-.476-.007a.916.916 0 0 0-.663.31c-.228.249-.87.85-.87 2.07 0 1.22.89 2.398 1.014 2.564.125.165 1.753 2.677 4.249 3.75 1.04.448 1.854.717 2.485.918.636.202 1.214.174 1.671.106.509-.076 1.472-.601 1.679-1.183.207-.581.207-1.08.145-1.183-.06-.104-.228-.166-.477-.29z"/>
        </svg>
        <span className="whatsapp-pulse"></span>
      </a>
    </>
  );
}

export default App;
