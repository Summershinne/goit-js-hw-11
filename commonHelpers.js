import{i as l,S as u}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const f="42718144-5d5fd5e0a4a425e2316f701b3",p="https://pixabay.com/api/";function d(n){const r=new URLSearchParams({key:f,q:searchQuery,image_type:"photo",orientation:"horizontal",safesearch:"true"}),t=`${p}?${r}`;return fetch(t).then(o=>{if(!o.ok)throw new Error("Search failed");return o.json()}).then(o=>{o.total===0&&l.error({message:"Sorry, there are no images matching your search query. Please try again!"})})}function m(n){const r=n.map(t=>`<ul class="images-list">
            <li class="images-list-item">
                <a class="item-link" href="${t.largeImageURL}">
                    <img 
                        class="item-image" 
                        src="${t.webformatURL}" 
                        alt="${t.tags}" 
                        />
                    <div class="item-image-info">
                        <p class="info-title">Likes <span class="info-data">${t.likes}</span></p>
                        <p class="info-title">Views <span class="info-data">${t.views}</span></p>
                        <p class="info-title">Comments <span class="info-data">${t.comments}</span></p>
                        <p class="info-title">Downloads <span class="info-data">${t.downloads}</span></p>
                    </div>
                </a>
            </li>
            </ul>`).join("");container.innerHTML=r}const c=document.querySelector("#searchForm"),i=document.querySelector(".gallery");c.addEventListener("submit",h);function h(n){n.preventDefault(),searchQuery=c.elements.searchQuery.value.trim(),i.innerHTML="",d(query).then(r=>{i.insertAdjacentHTML("beforeend",m(r)),new u(".gallery a",{nav:!0,captions:!0,captionsData:"alt",captionDelay:200}).refresh()}).catch(r=>{console.log(r)})}
//# sourceMappingURL=commonHelpers.js.map
