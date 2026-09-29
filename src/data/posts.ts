export type PostDownload = {
  label: string;
  description: string;
  href: string;
  fileType: "PDF" | "HTML" | "ZIP";
};

export type PostImage = {
  src: string;
  alt: string;
};

export type PostRelatedVideo = {
  videoId: string;
  title: string;
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string; // ISO date
  coverImage: string;
  youtubeVideoId: string;
  videoIsPlaceholder?: boolean;
  specs: { label: string; value: string }[];
  content: string[]; // paragraphs
  gallery: PostImage[];
  downloads: PostDownload[];
  relatedVideos: PostRelatedVideo[];
};

export const posts: Post[] = [
  {
    slug: "bitaxe-gamma-600x",
    title: "Bitaxe Gamma 600x: armamos un minero Bitcoin ASIC de código abierto",
    excerpt:
      "Guía completa del build del Bitaxe Gamma 600x: esquemático, BOM interactivo, renders y el código de un miner solo con ESP32-S3 como proyecto complementario.",
    category: "Proyectos DIY",
    publishedAt: "2026-09-28",
    coverImage: "/posts/bitaxe-gamma-600x/gamma.jpg",
    youtubeVideoId: "wVh9JkCw950",
    videoIsPlaceholder: true,
    specs: [
      { label: "Módulo", value: "ESP32-S3-WROOM-1" },
      { label: "Pantalla", value: "OLED I2C (GND/VCC/SCK/SDA)" },
      { label: "Alimentación", value: "5VDC (jack) o USB-C" },
      { label: "Control", value: "Botones RESET y BOOT" },
      { label: "Ventilación", value: "Conector PWM/TAC de 4 pines + fan dedicado" },
      { label: "Header de expansión", value: "Footprint para el ASIC (BM13xx) e interfaz SPI" },
    ],
    content: [
      "El Bitaxe es un proyecto de hardware libre para minar Bitcoin en solitario con un ASIC dedicado, pensado para aprender cómo funciona la minería a nivel de circuito en lugar de depender de una caja cerrada de fábrica.",
      "En este build armamos la variante Gamma 600x: el ESP32-S3 se encarga del control, la pantalla OLED muestra el hashrate y la temperatura en tiempo real, y el ventilador con conector PWM/TAC mantiene el ASIC dentro de rango térmico.",
      "Más abajo puedes descargar el esquemático completo en PDF, revisar el listado de materiales (BOM) de forma interactiva directamente sobre el PCB, y ver el render 3D de la placa antes de mandarla a fabricar.",
      "Como proyecto complementario incluimos el código de un miner solo por software para ESP32-S3 (sin ASIC dedicado): útil para entender el protocolo Stratum y probar el flujo completo con hardware mucho más económico mientras consigues las piezas del Bitaxe.",
    ],
    gallery: [
      { src: "/posts/bitaxe-gamma-600x/gamma.jpg", alt: "Bitaxe Gamma 600x armado, mostrando hashrate en la pantalla OLED" },
      { src: "/posts/bitaxe-gamma-600x/render.jpg", alt: "Render 3D del PCB del Bitaxe Gamma 600x" },
    ],
    downloads: [
      {
        label: "Esquemático completo",
        description: "PDF con las 5 páginas del esquemático del Bitaxe Gamma 600x.",
        href: "/posts/bitaxe-gamma-600x/bitaxe-gamma-600x-esquematico.pdf",
        fileType: "PDF",
      },
      {
        label: "BOM interactivo",
        description: "Explora cada componente directamente sobre el layout del PCB.",
        href: "/posts/bitaxe-gamma-600x/bitaxe-gamma-600x-bom-interactivo.html",
        fileType: "HTML",
      },
      {
        label: "Código: ESP32-S3 Solo Miner",
        description:
          "Sketch de Arduino del proyecto complementario (recuerda reemplazar tu SSID y clave Wi-Fi antes de subirlo).",
        href: "/posts/bitaxe-gamma-600x/esp32-solo-miner-codigo.zip",
        fileType: "ZIP",
      },
    ],
    relatedVideos: [
      {
        videoId: "g1i_jM2vt4E",
        title: "Medidor de Temperatura con ESP32-C3 y OLED | Proyecto Electrónica DIY",
      },
      {
        videoId: "qOH9mUBeMIM",
        title: "Creando una fuente variable con el LM317",
      },
      {
        videoId: "4QOVZE8M5kw",
        title: 'Probador de Mosfets casero "REMAKE"',
      },
    ],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
