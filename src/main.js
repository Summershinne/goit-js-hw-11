import { getImages } from './js/pixabay-api.js';
import { render } from './js/render-functions.js'


import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector("#searchForm");
const container = document.querySelector(".gallery");
const input = document.querySelector('[name="searchQuery"]')
let searchQuery = "";
form.addEventListener("submit", onSubmit);

function onSubmit(event) {
    event.preventDefault();
    container.innerHTML = "";
    searchQuery = input.value.trim();
    
    getImages(searchQuery)
    .then(images => {
            container.insertAdjacentHTML("beforeend", render(images)); 
            const lightbox =
                new SimpleLightbox('.gallery a', {
                nav: true,
                captions: true,
                captionsData: 'alt',
                captionDelay: 250,
                })
            lightbox.refresh();
        })
        .catch (error => {
        console.log(error);
        });
   
}