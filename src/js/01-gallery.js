// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. 



const galleryEl = document.querySelector(".gallery");
const imagesEL = galleryItems
.map(({ preview, original, description }) => {
return `<li class="gallery__item">
<a class="gallery__link" href="${original}">
<img
class="gallery__image"
src="${preview}"
data-source="${original}"
alt="${description}"/>
</a>
</li>`;
})
    .join("");

galleryEl.innerHTML = imagesEL;

let lightbox;

lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});