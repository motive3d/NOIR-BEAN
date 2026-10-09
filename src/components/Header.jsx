import {useEffect,useRef,useState} from 'react';
import {ArrowUpRight,Menu,X} from 'lucide-react';
export default function Header({lang,setLang,t}) {
 const [open,setOpen]=useState(false), button=useRef(null), panel=useRef(null);
 useEffect(()=>{
   if(!open)return;
   const close=e=>{if(e.key==='Escape'){setOpen(false);button.current?.focus();} if(e.key==='Tab'&&panel.current){const nodes=[button.current,...panel.current.querySelectorAll('a')];const first=nodes[0],last=nodes.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}};
   document.addEventListener('keydown',close);return()=>document.removeEventListener('keydown',close);
 },[open]);
 useEffect(()=>{const mq=matchMedia('(min-width: 901px)');const f=()=>setOpen(false);mq.addEventListener('change',f);return()=>mq.removeEventListener('change',f);},[]);
 const links=[['story',t.story],['favorites',t.favorites],['menu',t.menu],['gallery',t.gallery]];
 return <><a className="skip-link" href="#main">{t.skip}</a><header className="header"><a className="wordmark" href="#" aria-label="NOIR & BEAN"><span dir="ltr">NOIR <i>&</i> BEAN<span className="brand-dot">•</span></span><small>{t.coffeeHouse}</small></a><nav className="desktop-nav" aria-label={lang==='en'?'Main navigation':'التنقل الرئيسي'}>{links.map(([id,label])=><a key={id} href={`#${id}`}>{label}</a>)}</nav><div className="header-actions"><div className="languages" aria-label={lang==='en'?'Language':'اللغة'}><button lang="en" aria-pressed={lang==='en'} onClick={()=>{setLang('en');setOpen(false)}}>EN</button><span>/</span><button lang="ar" aria-pressed={lang==='ar'} onClick={()=>{setLang('ar');setOpen(false)}}>AR</button></div><a href="#visit" className="header-visit">{t.visit}<ArrowUpRight size={16}/></a><button className="nav-toggle icon-button" ref={button} aria-expanded={open} aria-controls="mobile-nav" aria-label={open?t.closeNav:t.openNav} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div></header>{open&&<nav ref={panel} id="mobile-nav" className="mobile-nav" aria-label={t.openNav}>{[...links,['visit',t.visit]].map(([id,label],i)=><a key={id} href={`#${id}`} onClick={()=>setOpen(false)}><span>0{i+1}</span>{label}<ArrowUpRight/></a>)}</nav>}</>;
}

