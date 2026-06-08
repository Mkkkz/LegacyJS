'use client';
import {useEffect,useMemo,useState} from 'react';
import {addons,plans} from '../lib/data';
export default function Quote(){
const [plan,setPlan]=useState(plans[2].name),[sel,setSel]=useState([]),[form,setForm]=useState({name:'',contact:'',desc:'',budget:''});
const p=plans.find(x=>x.name===plan)||plans[0];
const total=useMemo(()=>p.price+sel.reduce((s,n)=>s+(addons.find(a=>a.name===n)?.price||0),0),[p,sel]);
function tog(n){setSel(v=>v.includes(n)?v.filter(x=>x!==n):[...v,n])}
function send(e){e.preventDefault();const q={id:Date.now(),plan:p.name,addons:sel,total,status:'Pendente',createdAt:new Date().toLocaleString('pt-BR'),...form};const arr=JSON.parse(localStorage.getItem('legacyjs_quotes')||'[]');arr.unshift(q);localStorage.setItem('legacyjs_quotes',JSON.stringify(arr));alert('Orçamento enviado para o painel admin!');setForm({name:'',contact:'',desc:'',budget:''});setSel([])}
return <form className="config" onSubmit={send}><section className="panel"><h2>Monte seu projeto</h2><label>Plano base<select value={plan} onChange={e=>setPlan(e.target.value)}>{plans.map(x=><option key={x.name}>{x.name}</option>)}</select></label><div className="addons">{addons.map(a=><button type="button" key={a.name} onClick={()=>tog(a.name)} className={sel.includes(a.name)?'add active':'add'}><span>{a.name}</span><b>+ R$ {a.price}</b></button>)}</div><label>Seu nome<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/></label><label>Discord, WhatsApp ou email<input required value={form.contact} onChange={e=>setForm({...form,contact:e.target.value})}/></label><label>Orçamento inicial<input value={form.budget} onChange={e=>setForm({...form,budget:e.target.value})} placeholder="Ex: R$100"/></label><label>Descrição do projeto<textarea required value={form.desc} onChange={e=>setForm({...form,desc:e.target.value})}/></label></section><aside className="summary"><span>Estimativa</span><h3>{p.name}</h3><p>{p.desc}</p><strong>R$ {total.toFixed(2).replace('.',',')}</strong><button>Enviar orçamento</button><small>Valor estimado. O valor final pode mudar após análise.</small></aside></form>
}
