import{S as f,i}from"./assets/vendor-Cau1Iyua.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const p="https://pixabay.com/api/",m="31963270-0e971a3d68be2b002dee093f0";function d(s){const o=new URLSearchParams({key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${p}?${o}`).then(t=>{if(!t.ok)throw new Error("HTTP error");return t.json()})}function h(s){return s.map(({webformatURL:o,largeImageURL:t,tags:n,likes:e,views:r,comments:a,downloads:u})=>`
      <li class="photo-card">
        <a href="${o}">
          <img
          class="photo-card__img"
          src="${t}" 
          alt="${n}" 
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
            <span>${r}</span>
          </p>
          <p class="info-item">
            <b>Comments</b>
            <span>${a}</span>
          </p>
          <p class="info-item">
            <b>Downloads</b>
            <span>${u}</span>
          </p>
        </div>
      </li>
    `).join("")}const g=document.querySelector(".search-form"),c=document.querySelector(".gallery"),y=document.querySelector(".loader"),b=new f(".gallery a",{captionsData:"alt",captionDelay:250});g.addEventListener("submit",async s=>{s.preventDefault();const o=s.target.elements.searchQuery.value.trim();if(!o){i.warning({message:"Please enter a search query"});return}c.innerHTML="",l(!0);try{const t=await d(o);if(t.hits.length===0){i.info({message:"Sorry, there are no images matching your search query. Please try again!"});return}const n=h(t.hits);c.innerHTML=n,b.refresh()}catch(t){i.error({message:"Something went wrong. Try again later."}),console.error(t)}finally{l(!1)}});function l(s){y.classList.toggle("is-hidden",!s)}
//# sourceMappingURL=index.js.map
