import { validate } from "./validator.js";
import { slider } from "./slider.js";
import { modal } from "./modal.js";

// MUST be first: fail fast if product missing
const p = window.PRODUCT;

if (!p) {
  document.body.innerHTML = "Product not found or not loaded.";
  throw new Error("Missing PRODUCT object");
}

// Validate before using anything
validate(p);

// Safe rendering (NO innerHTML anywhere)
document.getElementById("brand").textContent = p.brand.ar;
document.getElementById("name").textContent = p.name.ar;
document.getElementById("desc").textContent = p.description.ar;

// CTA
document.getElementById("cta").textContent = "اطلب الآن";

// Slider
const img = document.getElementById("img");
slider(p.images, img);

// Modal (Tally)
modal(
  document.getElementById("cta"),
  document.getElementById("modal"),
  document.getElementById("tally"),
  p.tallyUrl
);
