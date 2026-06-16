const LANG_KEY = "lang";

export function getLang() {
  const saved = localStorage.getItem(LANG_KEY);

  if (saved) return saved;

  // default: Arabic-first
  const browser = navigator.language || "ar";

  if (browser.startsWith("fr")) return "fr";
  if (browser.startsWith("en")) return "en";

  return "ar";
}

export function setLang(lang) {
  localStorage.setItem(LANG_KEY, lang);
  location.reload();
}

export function t(product, field, lang) {
  if (!product || !product[field]) return "";

  return product[field][lang] ||
         product[field]["en"] ||
         product[field]["ar"];
}
