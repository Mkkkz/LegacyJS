import {
  Bot,
  Code2,
  Globe,
  ShieldCheck,
  Sparkles,
  Server,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

const discordUrl = 'https://discord.gg/qpRShMM929';

const services = [
  {
    icon: <Code2 />,
    title: 'Plugins Minecraft',
    desc: 'Plugins personalizados para servidores Paper/Spigot, com sistemas exclusivos, comandos, configs e otimização.'
  },
  {
    icon: <Bot />,
    title: 'Bots Discord',
    desc: 'Bots de tickets, moderação, captcha, logs, atendimento, automações e sistemas sob medida.'
  },
  {
    icon: <Globe />,
    title: 'Sites e Sistemas',
    desc: 'Landing pages, lojas, wikis, painéis administrativos e sistemas modernos para sua comunidade.'
  },
  {
    icon: <Server />,
    title: 'Servidores',
    desc: 'Configuração de servidores Minecraft, plugins, permissões, ranks, proteção e organização geral.'
  }
];

const projects = [
  {
    title: 'LegacyJSWelcome',
    tag: 'Plugin Gratuito',
    desc: 'Plugin de boas-vindas com mensagens de entrada, saída, title, som e config editável.'
  },
  {
    title: 'LegacyJS Bot',
    tag: 'Discord Bot',
    desc: 'Bot com sistema de tickets, captcha, transcript, logs e proteção para servidores Discord.'
  },
  {
    title: 'LegacyJS Wiki',
    tag: 'Website',
    desc: 'Wiki moderna para documentação de plugins e projetos da LegacyJS.'
  }
];

const partners = [
  {
    title: 'Eclipse Shop',
    tag: 'Servidor Minecraft',
    desc: 'Site parceiro desenvolvido para loja/vitrine do servidor Eclipse Craft.',
    url: 'https://eclipseshop.vercel.app'
  },
  {
    title: 'Salão da Jana',
    tag: 'Site Comercial',
    desc: 'Site profissional com apresentação, serviços, WhatsApp e painel administrativo.',
    url: 'https://salaodajana.vercel.app'
  }
];

export default function Home() {
  return (
    <main>
      <nav>
        <div className="logo">Legacy<span>JS</span></div>
        <div className="links">
          <a href="#servicos">Serviços</a>
          <a href="#projetos">Projetos</a>
          <a href="#parceiros">Parceiros</a>
          <a href={discordUrl} target="_blank" rel="noreferrer">Discord</a>
        </div>
      </nav>

      <section className="hero">
        <div className="badge"><Sparkles size={16} /> Soluções modernas</div>
        <h1>Desenvolvimento para Minecraft, Discord e Web.</h1>
        <p>
          A LegacyJS cria plugins, bots, sites e sistemas personalizados para transformar ideias em projetos reais.
        </p>
        <div className="actions">
          <a href={discordUrl} target="_blank" rel="noreferrer">
            Entrar no Discord <MessageCircle size={18} />
          </a>
          <a href="#projetos" className="secondary">Ver projetos <ArrowRight size={18} /></a>
        </div>
      </section>

      <section className="stats">
        <div><b>Plugins</b><span>Minecraft</span></div>
        <div><b>Bots</b><span>Discord</span></div>
        <div><b>Sites</b><span>Web</span></div>
        <div><b>Suporte</b><span>LegacyJS</span></div>
      </section>

      <section id="servicos" className="section">
        <h2>Nossos serviços</h2>
        <p className="sectionText">
          Soluções criadas com foco em organização, desempenho e aparência profissional.
        </p>

        <div className="grid">
          {services.map((service) => (
            <div className="card" key={service.title}>
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projetos" className="section">
        <h2>Projetos</h2>
        <p className="sectionText">
          Alguns projetos desenvolvidos ou planejados pela LegacyJS.
        </p>

        <div className="projects">
          {projects.map((project) => (
            <div className="project" key={project.title}>
              <span>{project.tag}</span>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="parceiros" className="section">
        <h2>Sites parceiros</h2>
        <p className="sectionText">
          Projetos e parceiros que fazem parte da trajetória da LegacyJS.
        </p>

        <div className="partners">
          {partners.map((partner) => (
            <a className="partnerCard" href={partner.url} target="_blank" rel="noreferrer" key={partner.title}>
              <span>{partner.tag}</span>
              <h3>{partner.title}</h3>
              <p>{partner.desc}</p>
              <strong>Visitar site <ExternalLink size={16} /></strong>
            </a>
          ))}
        </div>
      </section>

      <section className="section why">
        <h2>Por que escolher a LegacyJS?</h2>
        <div className="checks">
          <p><CheckCircle2 /> Projetos personalizados</p>
          <p><CheckCircle2 /> Código organizado</p>
          <p><CheckCircle2 /> Suporte dedicado</p>
          <p><CheckCircle2 /> Visual moderno</p>
          <p><CheckCircle2 /> Foco em Minecraft e Discord</p>
          <p><CheckCircle2 /> Atendimento direto</p>
        </div>
      </section>

      <section id="contato" className="contact">
        <ShieldCheck size={34} />
        <h2>Precisa de um projeto?</h2>
        <p>
          Entre no Discord da LegacyJS, abra um ticket e solicite seu orçamento.
        </p>
        <a href={discordUrl} target="_blank" rel="noreferrer" className="discord">
          <MessageCircle size={18} /> Entrar no Discord
        </a>
      </section>

      <footer>
        © 2026 LegacyJS — Soluções modernas para Minecraft, Discord e Web.
      </footer>
    </main>
  );
}
