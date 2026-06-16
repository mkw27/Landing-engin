import { t } from "./i18n.js";

export function renderProduct(product, lang) {
  if (!product) return;

  // Brand
  document.getElementById("brand").textContent =
    t(product, "brand", lang);

  // Name
  document.getElementById("name").textContent =
    t(product, "name", lang);

  // Description
  document.getElementById("desc").textContent =
    t(product, "description", lang);

  // CTA (localized)
  const cta = document.getElementById("cta");

  cta.textContent =
    lang === "ar" ? "اطلب الآن" :
    lang === "fr" ? "Commander" :
    "Order Now";
}

export function renderBadges() {
  const el = document.querySelector(".badges");

  if (!el) return;

  el.innerHTML = `
    <div>🚚 Delivery to 58 Wilayas</div>
    <div>💵 Cash on Delivery</div>
  `;
}
