# RITSA Electrónica

Sitio web de RITSA Electrónica: plataforma de aprendizaje y tutoriales en video sobre
reparación de electrónicos y proyectos DIY (Arduino, ESP32, etc.).

Construido con [Next.js](https://nextjs.org) (App Router + TypeScript + Tailwind CSS) para
poder agregar más adelante una sección administrativa privada (login, gestión de contenido).

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) (Next usará otro puerto libre, como 3002,
si el 3000 ya está en uso).

## Contenido editable

- `src/data/channel.ts` — datos del canal de YouTube y enlaces sociales.
- `src/data/videos.ts` — lista de videos destacados y del catálogo de tutoriales (solo hace
  falta el ID del video de YouTube, el título, categoría, etc.).
- `src/data/categories.ts` — tarjetas de categorías de la home.
- `public/images/` — imágenes del sitio (logo, banner, fotos de taller/proyectos).

## Estructura de páginas

- `/` — inicio (hero, tutoriales destacados, categorías, sobre nosotros, redes sociales).
- `/tutoriales` — catálogo completo de videos con filtro por categoría.
- `/nosotros` — historia y misión del canal.
- `/contacto` — canales de contacto (YouTube, Facebook) y feed de Facebook en vivo.

## Próximos pasos sugeridos

- Sección `/admin` con autenticación (por ejemplo NextAuth) para gestionar tutoriales sin
  tocar código.
- Mover `src/data/videos.ts` a una base de datos o CMS una vez exista el panel admin.
