import { validate } from "./validator.js";
import { slider } from "./slider.js";
import { modal } from "./modal.js";

const p = window.PRODUCT;

validate(p);

// render text safely
document.getElementById("brand").textContent = p.brand.ar;
document.getElementById("name").textContent = p.name.ar;
document.getElementById("desc").textContent = p.description.ar;

document.getElementById("cta").textContent = "اطلب الآن";

const img = document.getElementById("img");
slider(p.images, img);

modal(
  document.getElementById("cta"),
  document.getElementById("modal"),
  document.getElementById("tally"),
  p.tallyUrl
);
