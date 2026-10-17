# Iván Paniagua Sánchez · Portafolio personal

Portafolio web personal desarrollado con **React** y **Vite**, con soporte multiidioma (ES/EN), diseño responsive y despliegue automático en **GitHub Pages**.

[![Demo](https://img.shields.io/badge/demo-en%20vivo-7a1cb3?style=for-the-badge&logo=githubpages&logoColor=white)](https://ivanfuenla18.github.io/Personal_Web/)

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?logo=bootstrap&logoColor=white)
![i18next](https://img.shields.io/badge/i18n-ES%20%7C%20EN-success)
![Deploy](https://img.shields.io/badge/deploy-GitHub%20Pages-181717?logo=github&logoColor=white)

![Vista previa del portafolio](public/og-image.jpg)

---

## ✨ Características

- **Multiidioma (ES / EN)** con `i18next` y carga de traducciones vía HTTP.
- **Diseño responsive** con Bootstrap 5 y estilos propios.
- **Navegación SPA** con React Router.
- **Página 404 personalizada** con traducciones.
- **SEO cuidado**: metadatos, Open Graph, Twitter Card y datos estructurados JSON-LD.
- **Descarga de CV** en español e inglés.
- **Formulario de contacto** que abre el cliente de correo (`mailto:`).
- **Despliegue automatizado** en GitHub Pages mediante `gh-pages`.

## 🧱 Stack tecnológico

| Área | Tecnología |
| --- | --- |
| UI | React 19 |
| Build | Vite 6 |
| Estilos | Bootstrap 5 + CSS propio |
| Rutas | React Router 7 (`HashRouter`) |
| i18n | i18next + react-i18next + i18next-http-backend |
| Linting | ESLint 9 |
| Deploy | gh-pages → GitHub Pages |

## 📂 Estructura del proyecto

```text
.
├── public/
│   ├── assets/            # CV en PDF (ES / EN)
│   ├── locales/           # Traducciones: es/conf.json, en/conf.json
│   ├── og-image.jpg       # Imagen para redes sociales
│   └── *.png              # Imágenes del sitio y de los proyectos
├── src/
│   ├── components/        # Header, Footer
│   ├── config/            # Configuración de i18next
│   ├── css/               # Hojas de estilo por componente
│   ├── pages/             # Home, About, Projects, Timeline, Contact, NotFound
│   ├── App.jsx            # Rutas de la aplicación
│   └── main.jsx           # Punto de entrada
├── index.html
└── vite.config.js
```

## 🚀 Puesta en marcha

Requisitos: **Node.js 20+** y **npm**.

```bash
# 1. Clonar el repositorio
git clone https://github.com/Ivanfuenla18/Personal_Web.git
cd Personal_Web

# 2. Instalar dependencias
npm install

# 3. Arrancar en desarrollo
npm run dev
```

La web quedará disponible en `http://localhost:5173/Personal_Web/`.

## 📜 Scripts disponibles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Servidor de desarrollo con recarga en caliente |
| `npm run build` | Genera la versión de producción en `dist/` |
| `npm run preview` | Previsualiza localmente la build de producción |
| `npm run lint` | Analiza el código con ESLint |
| `npm run deploy` | Compila y publica en la rama `gh-pages` |

## 🌍 Internacionalización

Los textos viven en `public/locales/<idioma>/conf.json`. Para añadir un idioma nuevo:

1. Crea la carpeta `public/locales/<código>/` con un `conf.json` traducido.
2. Añade el código a `supportedLngs` en `src/config/i18next.config.jsx`.

El idioma por defecto (`fallbackLng`) es el **español**.

## 🚢 Despliegue

El sitio se publica en GitHub Pages desde la rama `gh-pages`:

```bash
npm run deploy
```

> Si haces cambios en el código fuente, no olvides subirlos también:
> ```bash
> git add -A && git commit -m "Descripción del cambio" && git push
> ```

## 🗂️ Proyectos destacados

- [NexusStock](https://nexusstock.onrender.com) — Gestión de inventario fullstack (MERN).
- [Agenda telefónica](https://phonebook-backend-nprq.onrender.com) — API y frontend de contactos.
- [Cafeterías cerca de mí](https://cafe-nu-orcin.vercel.app) — Geolocalización con Google Maps API.
- [Países del Mundo y Clima](https://countries-rouge-two.vercel.app) — Consumo de APIs REST.
- [Pokedex Interactiva](https://ivanfuenla18.github.io/Pokedex) — Consumo de la PokeAPI.
- [FlowSweet](https://ivanfuenla18.github.io/FlowSweet/#/) — Proyecto web con React.

## 📬 Contacto

- **GitHub:** [@Ivanfuenla18](https://github.com/Ivanfuenla18)
- **LinkedIn:** [Iván Paniagua Sánchez](https://www.linkedin.com/in/iván-paniagua-194314205/)
- **Email:** [ivanfuenla18@gmail.com](mailto:ivanfuenla18@gmail.com)

---

<p align="center">Hecho con 💜 por <strong>Iván Paniagua Sánchez</strong></p>
