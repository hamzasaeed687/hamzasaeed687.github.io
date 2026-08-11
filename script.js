const root=document.documentElement;
const toggle=document.getElementById('themeToggle');
const icon=document.getElementById('themeIcon');
const label=document.getElementById('themeLabel');
const saved=localStorage.getItem('hs-theme');
const preferred=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';
function setTheme(theme){root.dataset.theme=theme;localStorage.setItem('hs-theme',theme);icon.textContent=theme==='dark'?'☾':'☼';label.textContent=theme==='dark'?'Dark':'Light';toggle.setAttribute('aria-label',theme==='dark'?'Switch to light theme':'Switch to dark theme')}
setTheme(saved||preferred);toggle.addEventListener('click',()=>setTheme(root.dataset.theme==='dark'?'light':'dark'));
const links=[...document.querySelectorAll('.desktop-nav a')];
const sections=[...document.querySelectorAll('main section[id]')];
const map=new Map(links.map(a=>[a.getAttribute('href').slice(1),a]));
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){links.forEach(a=>a.classList.remove('active'));const a=map.get(entry.target.id);if(a)a.classList.add('active')}})},{rootMargin:'-30% 0px -60% 0px',threshold:0});
sections.forEach(s=>observer.observe(s));
links.forEach(a=>a.addEventListener('click',()=>{links.forEach(x=>x.classList.remove('active'));a.classList.add('active')}));
