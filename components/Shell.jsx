import Link from 'next/link';
const links=[['inicio','/','Início'],['servicos','/servicos','Serviços'],['planos','/planos','Planos'],['orcamento','/orcamento','Orçamento'],['portifolio','/portifolio','Portfólio'],['produtos','/produtos','Produtos'],['tickets','/tickets','Tickets'],['cliente','/cliente','Cliente'],['admin','/admin','Admin']];
export default function Shell({children,active='inicio'}){
return <div className="shell"><aside className="side"><Link href="/" className="brand"><img src="/legacy-logo.svg"/><div><b>LegacyJS</b><span>Plugins • Bots • Sites</span></div></Link><nav>{links.map(([k,h,t])=><Link key={k} className={active===k?'on':''} href={h}>{t}</Link>)}</nav><div className="ok"><i/> Tudo funcionando</div></aside><main><header className="top"><div><span>LegacyJS Dashboard</span><b>Visão geral da plataforma</b></div><Link href="/orcamento">Novo orçamento</Link></header>{children}</main></div>
}
