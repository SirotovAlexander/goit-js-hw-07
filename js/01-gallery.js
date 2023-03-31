import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryUl = document.querySelector(".gallery");

let markup = "";
for (let i = 0; i < galleryItems.length; i += 1) {
  markup += `<li class="gallery__item">
  <a class="gallery__link" href="${galleryItems[i].original}">
    <img
      class="gallery__image"
      src="${galleryItems[i].preview}"
      data-source="${galleryItems[i].original}"
      alt="${galleryItems[i].description}"
    />
  </a>
</li>`;
}

galleryUl.insertAdjacentHTML("afterbegin", markup);
