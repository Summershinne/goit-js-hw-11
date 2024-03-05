import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const KEY = '42718144-5d5fd5e0a4a425e2316f701b3';
const BASE_URI = 'https://pixabay.com/api/';

export function getImages(query) {
    const searchSetting = new URLSearchParams({
    key: KEY,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: "true"
    });
    const URL = `${BASE_URI}?${searchSetting}`;
    return fetch(URL)
        .then(response => {
        if (!response.ok) {
            throw new Error("Search failed");
        }
        return response.json()
        })
        .then((data => {
            if (data.total === 0) {
                iziToast.error({
                    message: "Sorry, there are no images matching your search query. Please try again!",
                });
            }
        }
             ))
}
