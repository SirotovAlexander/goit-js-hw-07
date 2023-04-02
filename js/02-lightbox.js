import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryGrid = document.querySelector(".gallery");

let markup = "";

for (let i = 0; i < galleryItems.length; i += 1) {
  markup += `<li class="gallery__item">
   <a class="gallery__link" href="${galleryItems[i].original}">
      <img class="gallery__image" src="${galleryItems[i].preview}" alt="${galleryItems[i].description}" />
   </a>
</li>`;
}

galleryGrid.insertAdjacentHTML("afterbegin", markup);

let gallery = new SimpleLightbox(".gallery a");
console.log(gallery);
