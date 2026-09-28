export type VideoCategory =
  | "Reparación"
  | "Proyectos DIY"
  | "Herramientas"
  | "Canal";

export type Video = {
  id: string;
  title: string;
  views: string;
  published: string;
  category: VideoCategory;
  featured?: boolean;
};

// Datos reales tomados del canal de YouTube @RITSAelectronica.
// Para agregar un video nuevo solo hace falta el ID (lo que va después de v= en la URL de YouTube).
export const videos: Video[] = [
  {
    id: "wVh9JkCw950",
    title:
      "¿Por qué no carga? ⚡ Reparamos un cargador inalámbrico y explicamos cómo funciona",
    views: "683 vistas",
    published: "hace 13 días",
    category: "Reparación",
    featured: true,
  },
  {
    id: "g1i_jM2vt4E",
    title: "Medidor de Temperatura con ESP32-C3 y OLED | Proyecto Electrónica DIY",
    views: "1.4K vistas",
    published: "hace 1 año",
    category: "Proyectos DIY",
    featured: true,
  },
  {
    id: "IzhzjqgWnT4",
    title: "¡Construye tu propia bocina MP3 con lector de tarjetas SD de forma súper fácil!",
    views: "841 vistas",
    published: "hace 1 año",
    category: "Proyectos DIY",
    featured: true,
  },
  {
    id: "HcOPzXLYMy4",
    title: "Reparación fácil de un TV LG de 65 pulgadas: solucionando el problema de la pantalla dividida",
    views: "7.2K vistas",
    published: "hace 2 años",
    category: "Reparación",
    featured: true,
  },
  {
    id: "PNaEjg1-kTM",
    title: "Descubriendo el poder del Flipper Zero: RF Scan y Signal Generator en acción",
    views: "1.7K vistas",
    published: "hace 2 años",
    category: "Herramientas",
    featured: true,
  },
  {
    id: "w8NYZUeoj5k",
    title: 'Repara las pistas dañadas de tus tarjetas electrónicas "uso de puentes de cobre"',
    views: "8.1K vistas",
    published: "hace 3 años",
    category: "Reparación",
    featured: true,
  },
  {
    id: "4QOVZE8M5kw",
    title: 'Probador de Mosfets casero "REMAKE"',
    views: "1.7K vistas",
    published: "hace 2 años",
    category: "Proyectos DIY",
  },
  {
    id: "IX1Tf-Vp9H4",
    title: "🔧 Cómo personalizar tu TV LG: coloca tu propio logo al encenderla",
    views: "5.2K vistas",
    published: "hace 2 años",
    category: "Reparación",
  },
  {
    id: "7EaFHtlUBLM",
    title: "Accede al menú de servicio TV LG con tu circuito (remasterizado) + alternativa con Flipper Zero",
    views: "5K vistas",
    published: "hace 2 años",
    category: "Reparación",
  },
  {
    id: "Hf0zX3Ttzok",
    title: "Flipper Zero vs. multímetro digital | Prueba de continuidad y diodos",
    views: "1.4K vistas",
    published: "hace 2 años",
    category: "Herramientas",
  },
  {
    id: "qx53MIQOSDc",
    title: "Samsung UN65TU7000F: reparación detallada de la etapa de fuente",
    views: "4.7K vistas",
    published: "hace 2 años",
    category: "Reparación",
  },
  {
    id: "381CR1hZyDE",
    title: "Comprueba las tiras LED de tu TV haciendo uso de fuente externa",
    views: "3.7K vistas",
    published: "hace 2 años",
    category: "Reparación",
  },
  {
    id: "LEG086zgGM8",
    title: "Cómo calcular el voltaje máximo para tus pruebas en tiras LED de smart TVs",
    views: "4.9K vistas",
    published: "hace 2 años",
    category: "Reparación",
  },
  {
    id: "qOH9mUBeMIM",
    title: "Creando una fuente variable con el LM317",
    views: "2.5K vistas",
    published: "hace 2 años",
    category: "Proyectos DIY",
  },
  {
    id: "iXppna1gIes",
    title: "¿Qué hay dentro de un capacitor? ¿Será peligroso?",
    views: "4.2K vistas",
    published: "hace 3 años",
    category: "Herramientas",
  },
  {
    id: "VPiBrYB_DNg",
    title: "Un potenciómetro era el problema: un elemento echa a perder todo un equipo (Sanyo CWM-460)",
    views: "4.6K vistas",
    published: "hace 3 años",
    category: "Reparación",
  },
  {
    id: "y7Mg9E4zmWA",
    title: "Samsung Galaxy A71 5G no carga: ¿cambio de conector USB? (parte 2/2)",
    views: "2.4K vistas",
    published: "hace 3 años",
    category: "Reparación",
  },
  {
    id: "Oz5O2s9OAg4",
    title: "Samsung Galaxy A71 5G no carga: ¿cambio de conector USB? (parte 1/2)",
    views: "5K vistas",
    published: "hace 4 años",
    category: "Reparación",
  },
  {
    id: "sasNR5zloNc",
    title: "Osciloscopio HO52 portátil para taller",
    views: "14K vistas",
    published: "hace 4 años",
    category: "Herramientas",
  },
  {
    id: "b1qj1-L_gEY",
    title: "Barra de sonido modificada 🔊 con módulo Bluetooth",
    views: "43K vistas",
    published: "hace 5 años",
    category: "Proyectos DIY",
  },
  {
    id: "Oh68w5tl1rc",
    title: "Trae de nuevo a la vida la batería de tu tablet con esta técnica",
    views: "7.1K vistas",
    published: "hace 5 años",
    category: "Reparación",
  },
  {
    id: "I_IIsxY8-MM",
    title: "Video y audio modificados en NES Mini: ¡muy económico de hacer!",
    views: "4.1K vistas",
    published: "hace 5 años",
    category: "Proyectos DIY",
  },
];

export const featuredVideos = videos.filter((v) => v.featured);
