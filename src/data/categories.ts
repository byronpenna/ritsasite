export type Category = {
  title: string;
  description: string;
  image: string;
  href: string;
};

export const categories: Category[] = [
  {
    title: "Reparación de electrónicos",
    description:
      "TVs, celulares, tablets y fuentes de poder: diagnóstico paso a paso y soluciones reales de taller.",
    image: "/images/taller-reparacion.jpg",
    href: "/tutoriales?categoria=Reparación",
  },
  {
    title: "Arduino y microcontroladores",
    description:
      "Proyectos con Arduino, ESP32 y sensores para aprender electrónica y programación desde cero.",
    image: "/images/arduino.jpg",
    href: "/tutoriales?categoria=Proyectos DIY",
  },
  {
    title: "Proyectos DIY",
    description:
      "Bocinas, fuentes variables, mods y builds caseras explicadas con planos y lista de materiales.",
    image: "/images/proyecto-arduino.jpg",
    href: "/tutoriales?categoria=Proyectos DIY",
  },
];
