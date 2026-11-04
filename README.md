# Landing page · Lic. Magali Olivero, Psicóloga en Bariloche

Sitio de una sola página para la **Lic. Magali Olivero** (M.P. 2670), psicóloga con enfoque psicoanalítico y consultorio en el centro de San Carlos de Bariloche.

El objetivo es que quien llegue desde Instagram, Google o una recomendación entienda rápido qué ofrece Magali, confíe en ella y **pida un turno por WhatsApp**.

## Características

- **Diseño minimalista:** grises claros, bloques con esquinas muy redondeadas, tipografía Manrope y un acento lila (`#A795B5`).
- **Turnos por WhatsApp:** todos los botones abren el chat de Magali con un mensaje ya escrito, en el idioma del visitante.
- **Tres idiomas:** español, inglés y portugués, con selector ES / EN / PT. Detecta el idioma del navegador y recuerda la elección.
- **Mapa del consultorio:** Google Maps embebido, sin clave de API, con botón "Cómo llegar".
- **SEO local para Bariloche:** título y descripción por idioma, datos estructurados (schema.org) del consultorio, Open Graph para compartir el link, `hreflang`, `sitemap.xml` y `robots.txt`.
- **Contador animado** de pacientes activos, que respeta la opción de reducir animaciones.
- **Responsive y liviano:** sin frameworks ni dependencias, con la foto de portada en WebP.

## Stack

HTML, CSS y JavaScript sin frameworks ni proceso de compilación. Se publica como sitio estático (GitHub Pages, Netlify o cualquier hosting).

## Estructura

```
landing-page-magali-olivero/
├── README.md
├── notas/
│   ├── SECCIONES.md           ← plan de secciones de la página
│   └── INFO-NECESARIA.md      ← checklist de información a pedirle a Magali
└── docs/                      ← el sitio que se publica
    ├── index.html             ← página completa (textos en español)
    ├── css/styles.css         ← estilos (colores y tipografía en variables al inicio)
    ├── js/main.js             ← WhatsApp, dirección, idiomas, contador y menú
    ├── js/i18n.js             ← traducciones al inglés y portugués
    ├── robots.txt
    ├── sitemap.xml
    └── assets/img/            ← fotos, imagen para compartir y favicon
```

## Ver el sitio en tu computadora

Opción rápida: abrir `docs/index.html` con doble clic en el navegador.

Para probarlo como en un servidor real (recomendado, así cargan bien el mapa y los idiomas), desde la carpeta del proyecto:

```bash
python -m http.server 5500 --directory docs
```

Y abrir http://localhost:5500.

## Dónde se edita cada cosa

| Qué | Dónde |
| --- | --- |
| Número de WhatsApp | `WHATSAPP_NUMBER` en `docs/js/main.js` (formato internacional, sin `+` ni espacios) |
| Mensaje prearmado de WhatsApp | `"whatsapp.msg"` en `docs/js/i18n.js` (uno por idioma) |
| Dirección del consultorio (mapa, texto y "Cómo llegar") | `CONSULTORIO_DIRECCION` en `docs/js/main.js` |
| Dirección y coordenadas para Google | bloque `application/ld+json` en el `<head>` de `docs/index.html` |
| Número del contador de pacientes | `PACIENTES_ACTIVOS` en `docs/js/main.js` |
| Textos en español | directamente en `docs/index.html` |
| Textos en inglés y portugués | `docs/js/i18n.js`, con las mismas claves `data-i18n` del HTML |
| Colores y tipografía | variables `:root` al inicio de `docs/css/styles.css` |
| Foto de portada | `docs/assets/img/magali-cuerpo.jpg` y `.webp` |
| Dominio del sitio | `https://magaliolivero.com.ar/` en `docs/index.html`, `docs/robots.txt` y `docs/sitemap.xml` |

Cuando se cambia un texto en español, hay que actualizar también su traducción en `docs/js/i18n.js`.

## Publicar

### GitHub Pages

El sitio está publicado en https://mateoolivero.github.io/landing-page-magali-olivero/

GitHub Pages sirve la carpeta `docs/` de la rama `main` (**Settings → Pages → Deploy from a branch**), así que cada push a `main` publica la versión nueva. El archivo `docs/.nojekyll` evita que GitHub procese el sitio con Jekyll.

> GitHub Pages es gratis para repos públicos. En un repo privado requiere un plan pago de GitHub.

### Netlify

1. En [app.netlify.com](https://app.netlify.com), **Add new site → Import an existing project** y elegir este repo.
2. En **Publish directory** poner `docs` (sin comando de build).
3. Cada push a `main` publica la versión nueva automáticamente.

### Antes de publicar

- Reemplazar `https://magaliolivero.com.ar/` por el dominio real (ver tabla de arriba).
- Completar los textos que todavía están entre `[corchetes]`.
- Crear el **Perfil de Empresa de Google** del consultorio y registrar el sitio en **Google Search Console** enviando el `sitemap.xml`.

## Ética profesional

Los códigos de ética de los colegios de psicólogos en Argentina suelen limitar la publicidad: no usar testimonios de pacientes, no prometer resultados y mostrar el número de matrícula. Antes de publicar conviene que Magali confirme con su colegio que el contenido (incluido el contador de pacientes) cumple sus reglas.

## Créditos

Sitio desarrollado por **Mateo Olivero** · Full Stack Developer.
