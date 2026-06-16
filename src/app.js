import { validate } from "./validator.js";
import { slider } from "./slider.js";
import { modal } from "./modal.js";

import { initTracking, trackViewContent, trackCTA } from "./tracking.js";
import { getLang } from "./i18n.js";
import { renderProduct, renderBadges } from "./engine.js";

/* -----------------------------
   SAFE FALLBACK (ads protection)
------------------------------ */
const fallback = {
  brand: { ar: "متجري", en: "My Store", fr: "Ma Boutique" },
  name: { ar: "منتج غير متوفر", en: "Product unavailable", fr: "Produit indisponible" },
  description: {
    ar: "حدث خطأ في تحميل المنتج",
    en: "Error loading product",
    fr: "Erreur de chargement du produit"
  },
  images: ["assets/images/1.jpg"],
  tallyUrl: "#"
};

/* -----------------------------
   PRODUCT LOADING (SAFE MODE)
------------------------------ */
const p =
  (window.PRODUCT && Array.isArray(window.PRODUCT.images))
    ? window.PRODUCT
    : fallback;

/* -----------------------------
   VALIDATION (CRITICAL GATE)
------------------------------ */
try {
  validate(p);
} catch (err) {
  console.error("Validation failed:", err);
  document.body.innerHTML = "Product configuration error.";
  throw err;
}

/* -----------------------------
   LANGUAGE SYSTEM
------------------------------ */
const lang = getLang();

/* -----------------------------
   RENDER UI (ENGINE LAYER)
------------------------------ */
renderProduct(p, lang);
renderBadges();

/* -----------------------------
   TRACKING (META ADS)
------------------------------ */
initTracking("YOUR_PIXEL_ID");
trackViewContent(p);

/* -----------------------------
   IMAGE SLIDER
------------------------------ */
const img = document.getElementById("img");
slider(p.images, img);

/* -----------------------------
   MODAL (TALLY FORM)
------------------------------ */
modal(
  document.getElementById("cta"),
  document.getElementById("modal"),
  document.getElementById("tally"),
  p.tallyUrl
);

/* -----------------------------
   CTA TRACKING (IMPORTANT)
------------------------------ */
document.getElementById("cta").addEventListener("click", () => {
  trackCTA();
});
