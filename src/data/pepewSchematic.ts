export type SchematicPin = {
  pin: string;
  signal: string;
  note?: string;
};

export type SchematicCategory =
  | "power"
  | "tft"
  | "oled"
  | "button"
  | "ethernet"
  | "expansion";

export type SchematicModule = {
  id: string;
  number: string;
  title: string;
  summary: string;
  category?: SchematicCategory;
  pins: SchematicPin[];
  notes?: string[];
};

export const esp32PinGroups: {
  category: SchematicCategory;
  label: string;
  pins: SchematicPin[];
}[] = [
  {
    category: "power",
    label: "Alimentación",
    pins: [
      { pin: "3V3 / EN", signal: "3.3V / Enable" },
      { pin: "5V / GND", signal: "Entrada 5V / Tierra" },
    ],
  },
  {
    category: "tft",
    label: "TFT GC9A01 (SPI)",
    pins: [
      { pin: "IO15", signal: "SCL" },
      { pin: "IO16", signal: "MOSI" },
      { pin: "IO17", signal: "DC" },
      { pin: "IO18", signal: "CS" },
      { pin: "IO21", signal: "RST" },
    ],
  },
  {
    category: "oled",
    label: "OLED SSD1306 (I²C)",
    pins: [
      { pin: "IO41", signal: "SDA (GPIO1)", note: "Remapeado en el header" },
      { pin: "IO42", signal: "SCL (GPIO2)", note: "Remapeado en el header" },
    ],
  },
  {
    category: "button",
    label: "Botón de usuario",
    pins: [{ pin: "IO48", signal: "→ GND" }],
  },
  {
    category: "ethernet",
    label: "Ethernet W5500 (interno)",
    pins: [
      { pin: "GPIO9", signal: "CS" },
      { pin: "GPIO10", signal: "MOSI" },
      { pin: "GPIO11", signal: "MISO" },
      { pin: "GPIO12", signal: "SCK" },
      { pin: "GPIO13", signal: "INT" },
      { pin: "GPIO14", signal: "RST" },
    ],
  },
  {
    category: "expansion",
    label: "Libres / expansión (J5-J6)",
    pins: [
      { pin: "GPIO3", signal: "Libre" },
      { pin: "GPIO4", signal: "Libre" },
      { pin: "GPIO5", signal: "Libre" },
      { pin: "GPIO6", signal: "Libre" },
      { pin: "GPIO7", signal: "Libre" },
      { pin: "GPIO8", signal: "Libre" },
    ],
  },
];

export const esp32Module: SchematicModule = {
  id: "esp32",
  number: "4",
  title: "Waveshare ESP32-S3-ETH",
  summary:
    "ESP32-S3-WROOM-1 de doble núcleo con el chip Ethernet W5500 integrado: es el cerebro del miner.",
  pins: esp32PinGroups.flatMap((g) => g.pins),
  notes: [
    "Core 0 mina nonces impares y Core 1 sostiene el Wi-Fi/Stratum y mina nonces pares, para exprimir el hashrate sin perder la conexión con el pool.",
    "También puede minar por Ethernet (W5500) en vez de Wi-Fi gracias al módulo integrado.",
  ],
};

export const schematicModules: SchematicModule[] = [
  {
    id: "power",
    number: "1",
    title: "Alimentación",
    summary: "Entrada USB-C de 5V y regulador a 3.3V para toda la placa.",
    category: "power",
    pins: [
      { pin: "J1 (USB-C)", signal: "5V_IN", note: "5V por USB-C o fuente externa" },
      { pin: "U1 AMS1117-3.3", signal: "IN → OUT", note: "Regulador lineal de 5V a 3.3V" },
      { pin: "C1 / C2", signal: "10µF / 0.1µF", note: "Filtrado en la entrada de 5V" },
      { pin: "C3 / C4", signal: "10µF / 0.1µF", note: "Filtrado en la salida de 3.3V" },
    ],
    notes: ["Todos los módulos de la placa (TFT, OLED, W5500) trabajan a 3.3V."],
  },
  {
    id: "button",
    number: "5",
    title: "Botón de usuario",
    summary: "Un solo botón para controlar las pantallas y el minero.",
    category: "button",
    pins: [
      { pin: "SW1", signal: "GPIO48 → GND", note: "Tact switch, usa INPUT_PULLUP interno" },
    ],
    notes: [
      "1 clic: cambia de página en la pantalla OLED",
      "2 clics: fuerza el envío de un trabajo (nonce) al pool",
      "Mantener 5 segundos: reinicia las estadísticas",
    ],
  },
  {
    id: "expansion",
    number: "6",
    title: "Conectores / expansión",
    summary: "Headers opcionales para sumar sensores o periféricos I²C.",
    category: "expansion",
    pins: [
      {
        pin: "J5 (GPIO expansión)",
        signal: "3.3V, GPIO3-8, GND",
        note: "Pines libres del ESP32-S3, sin uso por el miner",
      },
      {
        pin: "J6 (I²C extra)",
        signal: "3.3V, SDA (GPIO1), SCL (GPIO2), GND",
        note: "Comparte el bus I²C con la OLED",
      },
    ],
  },
  {
    id: "oled",
    number: "2",
    title: "OLED SSD1306",
    summary: "Pantalla secundaria 0.96\" 128x64 (I²C) con páginas de estado.",
    category: "oled",
    pins: [
      { pin: "VCC", signal: "3.3V" },
      { pin: "GND", signal: "GND" },
      { pin: "SCL", signal: "GPIO2", note: "Pin físico IO42 del módulo" },
      { pin: "SDA", signal: "GPIO1", note: "Pin físico IO41 del módulo" },
      { pin: "C5", signal: "0.1µF", note: "Desacoplo cerca del módulo" },
    ],
  },
  {
    id: "ethernet",
    number: "7",
    title: "Ethernet W5500",
    summary: "Chip Ethernet integrado en el módulo Waveshare, por SPI interno.",
    category: "ethernet",
    pins: [
      { pin: "CS", signal: "GPIO9" },
      { pin: "MOSI", signal: "GPIO10" },
      { pin: "MISO", signal: "GPIO11" },
      { pin: "SCK", signal: "GPIO12" },
      { pin: "INT", signal: "GPIO13" },
      { pin: "RST", signal: "GPIO14" },
    ],
    notes: [
      "GPIO9 a GPIO14 quedan reservados para el W5500: no se pueden reutilizar en el header de expansión.",
    ],
  },
  {
    id: "tft",
    number: "3",
    title: "TFT GC9A01",
    summary: "Pantalla circular 1.28\" 240x240 (SPI) con el hashrate en vivo.",
    category: "tft",
    pins: [
      { pin: "VCC", signal: "3.3V" },
      { pin: "GND", signal: "GND" },
      { pin: "SCL", signal: "GPIO15" },
      { pin: "SDA / MOSI", signal: "GPIO16" },
      { pin: "DC", signal: "GPIO17" },
      { pin: "CS", signal: "GPIO18" },
      { pin: "RST", signal: "GPIO21" },
      { pin: "BL", signal: "3.3V", note: "Retroiluminación" },
      { pin: "C6", signal: "0.1µF", note: "Desacoplo cerca del módulo" },
    ],
  },
  {
    id: "gpio",
    number: "—",
    title: "Resumen de GPIO",
    summary: "Tabla con todos los GPIO usados en la placa, de un vistazo.",
    pins: [
      { pin: "OLED SDA", signal: "GPIO1", note: "I²C" },
      { pin: "OLED SCL", signal: "GPIO2", note: "I²C" },
      { pin: "TFT SCL", signal: "GPIO15", note: "SPI" },
      { pin: "TFT MOSI", signal: "GPIO16", note: "SPI" },
      { pin: "TFT DC", signal: "GPIO17", note: "SPI" },
      { pin: "TFT CS", signal: "GPIO18", note: "SPI" },
      { pin: "TFT RST", signal: "GPIO21", note: "SPI" },
      { pin: "Botón", signal: "GPIO48", note: "A GND" },
      { pin: "W5500 CS", signal: "GPIO9", note: "Reservado (Ethernet)" },
      { pin: "W5500 MOSI", signal: "GPIO10", note: "Reservado (Ethernet)" },
      { pin: "W5500 MISO", signal: "GPIO11", note: "Reservado (Ethernet)" },
      { pin: "W5500 SCK", signal: "GPIO12", note: "Reservado (Ethernet)" },
      { pin: "W5500 INT", signal: "GPIO13", note: "Reservado (Ethernet)" },
      { pin: "W5500 RST", signal: "GPIO14", note: "Reservado (Ethernet)" },
    ],
  },
  {
    id: "decoupling",
    number: "8",
    title: "Desacoplo y filtros",
    summary: "Capacitores de desacoplo en el riel de 3.3V.",
    category: "power",
    pins: [
      { pin: "C9 / C12", signal: "10µF 3.3V" },
      { pin: "C10 / C11", signal: "0.1µF" },
    ],
    notes: ["Se recomienda colocarlos lo más cerca posible de cada módulo."],
  },
  {
    id: "mounting",
    number: "9",
    title: "Conectores de montaje",
    summary: "Huecos de montaje opcionales, conectados a tierra.",
    pins: [
      { pin: "J7", signal: "MOUNT_HOLE → GND" },
      { pin: "J8", signal: "MOUNT_HOLE → GND" },
    ],
  },
  {
    id: "notes",
    number: "—",
    title: "Notas de diseño",
    summary: "Las notas generales anotadas en el esquemático original.",
    pins: [],
    notes: [
      "Alimentación: 5V por USB-C o 5V externo.",
      "OLED SSD1306 en I²C: GPIO1 (SDA), GPIO2 (SCL).",
      "TFT GC9A01 en SPI: GPIO15, 16, 17, 18, 21.",
      "Botón de usuario: GPIO48 → GND.",
      "El W5500 (Ethernet) usa GPIO9-14 (reservados).",
      "Todos los módulos trabajan a 3.3V.",
      "Colocar capacitores de desacoplo cerca de cada módulo.",
      "Verificar las dimensiones físicas del módulo Waveshare.",
    ],
  },
];

export const categoryColors: Record<SchematicCategory, string> = {
  power: "border-amber-400 bg-amber-400/15 text-amber-700",
  tft: "border-sky-400 bg-sky-400/15 text-sky-700",
  oled: "border-violet-400 bg-violet-400/15 text-violet-700",
  button: "border-rose-400 bg-rose-400/15 text-rose-700",
  ethernet: "border-emerald-400 bg-emerald-400/15 text-emerald-700",
  expansion: "border-slate-400 bg-slate-400/15 text-slate-700",
};
