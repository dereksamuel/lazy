import { loadedImagesData } from "./lazy";
import { appendedImages } from "./index";

export const monitor = (data = appendedImages, two = loadedImagesData) => {
  data && console.log(`⚪ Will created ${data} images`);
  console.log(`🟣 Will loaded ${two} images`);
  console.log("---------------------------------------");
}