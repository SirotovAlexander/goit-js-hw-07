import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryUl = document.querySelector(".gallery");
galleryUl.addEventListener("click", onClick);
galleryUl.addEventListener("keyup", onClick);

let markup = "";
for (let i = 0; i < galleryItems.length; i += 1) {
  markup += `<li class="gallery__item">
  <a class="gallery__link" href="${galleryItems[i].original}" target="_blank" rel="noreferrer noopener">
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

function onClick(event) {
  console.log(event.target.dataset.source);

  const instance = basicLightbox.create(`
	<img
      class="gallery__image"
      src="${event.target.dataset.source}"
      data-source="${event.target.dataset.source}"
    />
`);

  event.preventDefault();
  instance.show();

  if (event.code === "Escape") {
    instance.close();
  }
}

function onKey(event) {
  if (event.code === "Escape") {
    instance.close();
  }
}
