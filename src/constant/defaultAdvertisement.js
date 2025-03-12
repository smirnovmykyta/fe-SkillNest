import { category } from "./category.js";
import { lessonMode } from "./lessonMode.js";

export const defaultAdvertisement = {
  media: [],
  description:
    "I am looking for someone to teach me how to play guitar. I am a beginner and I am looking for someone who can teach me the basics.",
  offer: "Javascript Basics or Advanced",
  request: "Guitar lessons for beginners",
  category: category[0],
  isGroup: true,
  timeAvailability: [],
  lessonMode: lessonMode[0],
  location: "Düsseldorf, Germany",
  languages: [],
};
