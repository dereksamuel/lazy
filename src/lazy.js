import { monitor } from "./monitor";
const isInteresecting = (entry) => entry.isIntersecting;
export let loadedImagesData = 0;

const observer = new IntersectionObserver((allElements) => {
  allElements
    .filter(isInteresecting)
    .forEach((entry) => {
      const image = entry.target;
      const url = image.dataset.src;
      image.src = url;
      loadedImagesData++;
      monitor(null, loadedImagesData);
      observer.unobserve(entry.target);
    })
});

export const registerImage = (image) => {
  observer.observe(image);
};