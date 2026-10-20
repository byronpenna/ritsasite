export type PostDownload = {
  label: string;
  description: string;
  href: string;
  fileType: "PDF" | "HTML" | "ZIP";
};

export type PostImage = {
  src: string;
  alt: string;
  exploreLink?: {
    href: string;
    label: string;
  };
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
  githubRepo?: {
    repo: string; // "owner/name"
    branch?: string;
    file: string; // main file to preview, path within the repo
  };
  pdfEmbed?: {
    label: string;
    href: string;
    pages?: number;
  };
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
          "Sketch de Arduino del proyecto complementario (recuerda reemplazar tu SSID y clave Wi-Fi antes de subirlo). También disponible en GitHub, más abajo.",
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
    githubRepo: {
      repo: "byronpenna/minador-esp32",
      branch: "main",
      file: "README.md",
    },
    pdfEmbed: {
      label: "Esquemático completo",
      href: "/posts/bitaxe-gamma-600x/bitaxe-gamma-600x-esquematico.pdf",
      pages: 5,
    },
  },
  {
    slug: "pepew-miner-esp32-s3",
    title: "PEPEW Miner: armamos un minero casero para PEPEW con ESP32-S3-ETH",
    excerpt:
      "Carrier board, firmware dual-core y case impreso en 3D para minar PEPEW (algoritmo HooHash) solo con un ESP32-S3-ETH, pantallas TFT/OLED y un botón.",
    category: "Proyectos DIY",
    publishedAt: "2026-10-20",
    coverImage: "/posts/pepew-miner-esp32-s3/pepew-miner-cover.png",
    // TODO: el video de este build aún no está publicado en el canal.
    // Cuando salga, reemplaza youtubeVideoId por el ID real y pon videoIsPlaceholder en false.
    youtubeVideoId: "wVh9JkCw950",
    videoIsPlaceholder: true,
    specs: [
      { label: "Módulo", value: "Waveshare ESP32-S3-ETH (ESP32-S3-WROOM-1 + Ethernet W5500)" },
      { label: "Pantalla principal", value: "TFT GC9A01 1.28\" 240x240 (SPI) — hashrate en vivo" },
      { label: "Pantalla secundaria", value: "OLED SSD1306 0.96\" 128x64 (I²C) — páginas de estado" },
      { label: "Control", value: "1 botón (GPIO48): clic cambia de página, doble clic fuerza envío, 5 s reinicia estadísticas" },
      { label: "Alimentación", value: "USB-C 5V → regulador AMS1117-3.3" },
      { label: "Algoritmo / Pool", value: "HooHash vía Stratum en pool.pepepow.net:39333" },
      { label: "Firmware", value: "Dual-core: Core 0 minando nonces impares, Core 1 en Wi-Fi/Stratum + nonces pares" },
      { label: "Case", value: "Impreso en 3D, en piezas separadas para el cuerpo y las letras" },
    ],
    content: [
      "PEPEW Miner es nuestro minero casero para la red PEPEW (algoritmo HooHash): nada de ASIC dedicado, todo corre en un único Waveshare ESP32-S3-ETH, que ya trae el chip Ethernet W5500 a bordo para minar por cable además de por Wi-Fi.",
      "Diseñamos un carrier board propio (RITSA PEPEW Miner Carrier V1.0) que conecta el módulo con una pantalla TFT circular GC9A01 de 1.28\" para mostrar el hashrate, los shares y el uptime en tiempo real, una OLED de 0.96\" con páginas de estado adicionales, y un solo botón físico para controlarlo todo.",
      "El firmware (V8.2) reparte el trabajo entre los dos núcleos del ESP32-S3: uno se dedica exclusivamente a minar nonces pares e impares mientras el otro sostiene la conexión Wi-Fi y el protocolo Stratum contra el pool, para exprimir el hashrate sin perder la conexión. Además levanta su propio servidor web en una tarea dedicada (ritsaWeb) que sirve un dashboard completo desde una microSD, con una gráfica de hashrate que se procesa en el navegador para no sobrecargar al ESP32.",
      "Si el equipo no tiene una red Wi-Fi guardada, arranca automáticamente un portal cautivo de emergencia (\"RITSA-MINER-SETUP\", 192.168.4.1) para configurar la conexión desde el celular sin necesidad de reflashear nada.",
      "Más abajo puedes revisar el esquemático completo y el diagrama de conexiones, descargar el firmware completo (listo para Arduino IDE) y los modelos STL del case impreso en 3D para montar tu propia unidad.",
    ],
    gallery: [
      {
        src: "/posts/pepew-miner-esp32-s3/pepew-miner-esquematico.png",
        alt: "Esquemático completo del RITSA PEPEW Miner Carrier V1.0",
        exploreLink: {
          href: "/posts/pepew-miner-esp32-s3/esquematico",
          label: "Explora los componentes y el pinout en una pantalla interactiva",
        },
      },
      {
        src: "/posts/pepew-miner-esp32-s3/pepew-miner-conexiones.png",
        alt: "Diagrama de conexiones entre el ESP32-S3-ETH, la TFT GC9A01, la OLED SSD1306 y el botón",
      },
    ],
    downloads: [
      {
        label: "Firmware completo (V8.2 Web Stable)",
        description:
          "Sketch de Arduino, librerías HooHash/Blake3 y el dashboard web (HTML/CSS/JS) para copiar a la microSD.",
        href: "/posts/pepew-miner-esp32-s3/pepew-miner-firmware-v8.2.zip",
        fileType: "ZIP",
      },
      {
        label: "Modelos 3D del case (STL)",
        description:
          "Case completo, versión sin letras y las letras por separado, listos para imprimir en 3D.",
        href: "/posts/pepew-miner-esp32-s3/pepew-miner-case-3d.zip",
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
