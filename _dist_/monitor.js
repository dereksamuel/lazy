import { loadedImagesData } from "./lazy.js";
import { appendedImages } from "./index.js";

export const monitor = (data = appendedImages, two = loadedImagesData) => {
  data && console.log(`⚪ Will created ${data} images`);
  console.log(`🟣 Will loaded ${two} images`);
  console.log("---------------------------------------");
}