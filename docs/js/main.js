// Número de Magali en formato internacional, sin + ni espacios
const WHATSAPP_NUMBER = "5492944652915";
// Los mensajes prearmados de WhatsApp por idioma están en js/i18n.js ("whatsapp.msg")

// Dirección del consultorio (si cambia, actualizar también los datos para Google en index.html)
const CONSULTORIO_DIRECCION = "Albarracín 214, San Carlos de Bariloche, Río Negro";

const direccion = encodeURIComponent(CONSULTORIO_DIRECCION);
document.querySelectorAll(".js-direccion").forEach((el) => (el.textContent = CONSULTORIO_DIRECCION));
document.querySelectorAll(".js-como-llegar").forEach((a) => {
  a.href = `https://www.google.com/maps/dir/?api=1&destination=${direccion}`;
  a.target = "_blank";
  a.rel = "noopener";
});

// ---------- Idiomas ----------
const LANGS = ["es", "en", "pt"];

// El español se toma del HTML tal como está escrito
document.querySelectorAll("[data-i18n]").forEach((el) => {
  if (el.innerHTML.trim()) TRANSLATIONS.es[el.dataset.i18n] = el.innerHTML;
});
document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
  const [attr, key] = el.dataset.i18nAttr.split(":");
  TRANSLATIONS.es[key] = el.getAttribute(attr);
});

function detectLang() {
  const fromUrl = new URLSearchParams(location.search).get("lang");
  if (LANGS.includes(fromUrl)) return fromUrl;
  try {
    const saved = localStorage.getItem("lang");
    if (LANGS.includes(saved)) return saved;
  } catch (e) {}
  for (const l of navigator.languages || [navigator.language || "es"]) {
    const code = l.slice(0, 2).toLowerCase();
    if (code === "es" || code === "pt") return code;
    if (code) return "en"; // cualquier otro idioma extranjero ve el sitio en inglés
  }
  return "es";
}

function setLang(lang) {
  const t = TRANSLATIONS[lang];
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    if (t[el.dataset.i18n] !== undefined) {
      if (el.tagName === "TITLE") document.title = t[el.dataset.i18n];
      else el.innerHTML = t[el.dataset.i18n];
    }
  });
  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    const [attr, key] = el.dataset.i18nAttr.split(":");
    if (t[key] !== undefined) el.setAttribute(attr, t[key]);
  });

  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t["whatsapp.msg"])}`;
  document.querySelectorAll(".js-whatsapp").forEach((a) => {
    a.href = waLink;
    a.target = "_blank";
    a.rel = "noopener";
  });

  // El mapa se muestra en el idioma elegido
  document.querySelectorAll(".js-mapa").forEach((f) => {
    const src = `https://www.google.com/maps?q=${direccion}&hl=${lang}&output=embed`;
    if (f.src !== src) f.src = src;
  });

  document.querySelectorAll(".lang-switch button").forEach((b) => {
    b.setAttribute("aria-pressed", b.dataset.lang === lang);
  });

  // Cada idioma tiene su propia URL canónica (coincide con los hreflang del <head>)
  const canonical = document.querySelector('link[rel="canonical"]');
  const base = canonical.href.split("?")[0];
  canonical.href = lang === "es" ? base : `${base}?lang=${lang}`;
}

document.querySelectorAll(".lang-switch button").forEach((b) =>
  b.addEventListener("click", () => {
    const lang = b.dataset.lang;
    try { localStorage.setItem("lang", lang); } catch (e) {}
    const url = new URL(location.href);
    url.searchParams.set("lang", lang);
    history.replaceState(null, "", url);
    setLang(lang);
  })
);

setLang(detectLang());

// ---------- Contador de pacientes ----------
// TODO: confirmar con Magali que el número sea real y que su colegio permita publicarlo
const PACIENTES_ACTIVOS = 30;

const contador = document.querySelector(".js-pacientes");
if (contador) {
  const quiet = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (quiet || !("IntersectionObserver" in window)) {
    contador.textContent = `+${PACIENTES_ACTIVOS}`;
  } else {
    // El HTML ya trae el número final (lo ven buscadores y navegadores sin JS); la animación arranca al verlo
    new IntersectionObserver((entries, obs) => {
      if (!entries[0].isIntersecting) return;
      obs.disconnect();
      const start = performance.now(), dur = 1400;
      const tick = (now) => {
        const p = Math.min((now - start) / dur, 1);
        contador.textContent = `+${Math.round(PACIENTES_ACTIVOS * (1 - Math.pow(1 - p, 3)))}`;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }).observe(contador);
  }
}

// ---------- Menú y pie ----------
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});
nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => nav.classList.remove("open")));

document.getElementById("year").textContent = new Date().getFullYear();
