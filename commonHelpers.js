import{i as l,S as f}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function e(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=e(t);fetch(t.href,s)}})();const u="42718144-5d5fd5e0a4a425e2316f701b3",p="https://pixabay.com/api/";function d(n){const r=new URLSearchParams({key:u,q:n,image_type:"photo",orientation:"horizontal",safesearch:"true"}),e=`${p}?${r}`;return fetch(e).then(o=>{if(!o.ok)throw new Error("Search failed");return o.json()}).then(o=>{o.total===0&&l.error({message:"Sorry, there are no images matching your search query. Please try again!"})})}function m(n){const r=n.map(e=>`<ul class="images-list">
            <li class="images-list-item">
                <a class="item-link" href="${e.largeImageURL}">
                    <img 
                        class="item-image" 
                        src="${e.webformatURL}" 
                        alt="${e.tags}" 
                        />
                    <div class="item-image-info">
                        <p class="info-title">Likes <span class="info-data">${e.likes}</span></p>
                        <p class="info-title">Views <span class="info-data">${e.views}</span></p>
                        <p class="info-title">Comments <span class="info-data">${e.comments}</span></p>
                        <p class="info-title">Downloads <span class="info-data">${e.downloads}</span></p>
                    </div>
                </a>
            </li>
            </ul>`).join("");container.innerHTML=r}const c=document.querySelector("#searchForm"),i=document.querySelector(".gallery");c.addEventListener("submit",h);function h(n){n.preventDefault();const r=c.elements.searchQuery.value.trim();i.innerHTML="",d(r).then(e=>{i.insertAdjacentHTML("beforeend",m(e)),new f(".gallery a",{nav:!0,captions:!0,captionsData:"alt",captionDelay:200}).refresh()}).catch(e=>{console.log(e)})}
//# sourceMappingURL=commonHelpers.js.map
