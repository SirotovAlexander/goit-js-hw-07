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

let dynamicGallery = new SimpleLightbox(".gallery a", {
  caption: true,
  captionSelector: "img",
  captionType: "attr",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
dynamicGallery.on("show.simplelightbox", function () {});
console.log(dynamicGallery);

// {
//   options: captionsData,
// }
