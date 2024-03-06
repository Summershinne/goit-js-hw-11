import{i as l,S as u}from"./assets/vendor-5b791d57.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const f="42718144-5d5fd5e0a4a425e2316f701b3",d="https://pixabay.com/api/";function p(s){const e=new URLSearchParams({key:f,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${d}?${e}`).then(o=>{if(!o.ok)throw new Error("Search failed");return o.json()}).then(o=>(o.hits.length===0&&l.error({message:"Sorry, there are no images matching your search query. Please try again!"}),o)).catch(o=>console.error("Error fetching data:",o))}function m(s){return s.hits.map(e=>`<div class="gallery-item">
                <a class="item-link" href="${e.largeImageURL}"> 
                    <img
                        class="item-image"
                        src="${e.webformatURL}"
                        alt="${e.tags}"
                        /></a>
                    <div class="item-image-info">
                        <p class="info-title">Likes <span class="info-data">${e.likes}</span></p>
                        <p class="info-title">Views <span class="info-data">${e.views}</span></p>
                        <p class="info-title">Comments <span class="info-data">${e.comments}</span></p>
                        <p class="info-title">Downloads <span class="info-data">${e.downloads}</span></p>
                    </div>
               
            </div>
            `).join("")}const h=document.querySelector("#searchForm"),i=document.querySelector(".gallery"),y=document.querySelector('[name="searchQuery"]');document.querySelector(".load");let c="";h.addEventListener("submit",g);function g(s){s.preventDefault(),i.innerHTML="",c=y.value.trim(),p(c).then(e=>{i.insertAdjacentHTML("beforeend",m(e)),new u(".gallery a",{nav:!0,captions:!0,captionsData:"alt",captionDelay:250}).refresh()}).catch(e=>{console.log(e)})}
//# sourceMappingURL=commonHelpers.js.map
