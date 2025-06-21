import{a as p,S as f,i}from"./assets/vendor-BIn0hBn5.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const d="https://pixabay.com/api/",m="31963270-0e971a3d68be2b002dee093f0";async function g(s){const r={key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"};return(await p.get(d,{params:r})).data}function h(s){return s.map(({webformatURL:r,largeImageURL:o,tags:a,likes:e,views:t,comments:n,downloads:u})=>`
      <li class="photo-card">
        <a href="${r}">
          <img
          class="photo-card__img"
          src="${o}" 
          alt="${a}" 
          loading="lazy" 
          width="320"
          height="212"
          />
        </a>
        <div class="info">
          <p class="info-item">
            <b>Likes</b>
            <span>${e}</span>
          </p>
          <p class="info-item">
            <b>Views</b>
            <span>${t}</span>
          </p>
          <p class="info-item">
            <b>Comments</b>
            <span>${n}</span>
          </p>
          <p class="info-item">
            <b>Downloads</b>
            <span>${u}</span>
          </p>
        </div>
      </li>
    `).join("")}const y=document.querySelector(".form"),c=document.querySelector(".gallery"),b=document.querySelector(".loader"),L=new f(".gallery a",{captionsData:"alt",captionDelay:250});y.addEventListener("submit",async s=>{s.preventDefault();const r=s.target.elements.searchQuery.value.trim();if(!r){i.warning({message:"Please enter a search query"});return}c.innerHTML="",l(!0);try{const o=await g(r);if(o.hits.length===0){i.info({message:"Sorry, there are no images matching your search query. Please try again!"});return}const a=h(o.hits);c.innerHTML=a,L.refresh()}catch(o){i.error({message:"Something went wrong. Try again later."}),console.error(o)}finally{l(!1)}});function l(s){b.classList.toggle("is-hidden",!s)}
//# sourceMappingURL=index.js.map
