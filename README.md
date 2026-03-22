# Yeray Navarro — Portfolio Profesional

Portfolio de marca personal construido con **React + Vite + Tailwind CSS**.

---

## 🗂️ Estructura del Proyecto

```
yeray-portfolio/
├── index.html                    # Punto de entrada HTML
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/
│   └── assets/
│       ├── images/
│       │   ├── perfil-yeray-recortado.png   ← TU FOTO (PNG sin fondo)
│       │   ├── proyecto-1.jpg               ← Capturas de proyectos
│       │   ├── proyecto-2.jpg
│       │   ├── proyecto-3.jpg
│       │   └── proyecto-4.jpg
│       └── docs/
│           └── cv-yeray-navarro.pdf         ← TU CV en PDF
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── hooks/
    │   └── useScrollReveal.js
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── Projects.jsx
        ├── About.jsx
        ├── TechStack.jsx
        └── Footer.jsx
```

---

## 🚀 Guía de Despliegue Local (paso a paso)

### Prerrequisitos
- **Node.js** versión 18 o superior. Verifica con: `node -v`
- **npm** (incluido con Node.js). Verifica con: `npm -v`
- Si no tienes Node.js, descárgalo en: https://nodejs.org

---

### Paso 1 — Crear la carpeta del proyecto

Abre una terminal (PowerShell, Terminal de macOS o bash en Linux) y ejecuta:

```bash
mkdir yeray-portfolio
cd yeray-portfolio
```

---

### Paso 2 — Copiar todos los archivos

Copia y pega cada archivo de código en la ruta exacta indicada en la estructura
de arriba. Los archivos dentro de `src/components/` van en esa subcarpeta.
El archivo `src/hooks/useScrollReveal.js` va en la subcarpeta `hooks/`.

---

### Paso 3 — Crear la carpeta de assets

Dentro de la carpeta del proyecto crea la siguiente estructura para tus imágenes:

```bash
mkdir -p public/assets/images
mkdir -p public/assets/docs
```

Copia en esas carpetas:
- `public/assets/images/perfil-yeray-recortado.png` → tu foto PNG sin fondo
- `public/assets/images/proyecto-1.jpg` → captura de pantalla del proyecto 1
- `public/assets/images/proyecto-2.jpg` → captura del proyecto 2
- `public/assets/images/proyecto-3.jpg` → captura del proyecto 3
- `public/assets/images/proyecto-4.jpg` → captura del proyecto 4
- `public/assets/docs/cv-yeray-navarro.pdf` → tu CV en PDF

> ⚠️ Mientras no tengas las imágenes reales, el portfolio funcionará igualmente
> (los `<img>` mostrarán un recuadro vacío, lo cual es normal).

---

### Paso 4 — Instalar dependencias

Con la terminal dentro de la carpeta `yeray-portfolio`:

```bash
npm install
```

Este comando descarga React, Vite, Tailwind y todas las dependencias listadas
en `package.json`. Tomará entre 30 y 60 segundos la primera vez.

---

### Paso 5 — Arrancar el servidor de desarrollo

```bash
npm run dev
```

Verás una salida similar a esta en la terminal:

```
  VITE v5.x.x  ready in 300 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

---

### Paso 6 — Abrir en el navegador

Abre tu navegador y visita:

```
http://localhost:5173
```

¡Tu portfolio está corriendo en local! 🎉

---

## ✏️ Personalización rápida

| Qué cambiar           | Dónde                        |
|-----------------------|------------------------------|
| Tus proyectos reales  | `src/components/Projects.jsx` → array `PROJECTS` |
| Texto "Sobre mí"      | `src/components/About.jsx`   |
| Tecnologías           | `src/components/TechStack.jsx` → objeto `TECH` |
| Email de contacto     | `src/components/Footer.jsx` y `About.jsx` |
| Links GitHub/LinkedIn | `src/components/Footer.jsx` |
| Colores               | `tailwind.config.js`         |

---

## 📦 Build para producción (opcional)

Cuando quieras subir el portfolio a un hosting real (Vercel, Netlify, GitHub Pages):

```bash
npm run build
```

Esto genera una carpeta `dist/` lista para desplegar. Para previsualizar
el build antes de subir:

```bash
npm run preview
```

---

## 🆘 Solución de problemas comunes

**Error: `npm` no reconocido**
→ Instala Node.js desde https://nodejs.org y reinicia la terminal.

**Error: `Cannot find module`**
→ Asegúrate de que todos los archivos están en las rutas correctas
y ejecuta `npm install` de nuevo.

**Los estilos de Tailwind no cargan**
→ Verifica que `postcss.config.js` y `tailwind.config.js` están en la
raíz del proyecto (mismo nivel que `package.json`).

**La imagen de perfil no aparece**
→ Comprueba que el archivo se llama exactamente
`perfil-yeray-recortado.png` y está en `public/assets/images/`.
