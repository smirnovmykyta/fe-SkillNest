import {category} from "./category.js";
import {lessonMode} from "./lessonMode.js";

export const defaultAdvertisement = {
  media: [],
  title: "",
  description: "",
  offer: "",
  request: "",
  category: category[0],
  isGroup: false,
  timeAvailability: [],
  lessonMode: lessonMode[0],
  location: "",
  languages: [],
};
