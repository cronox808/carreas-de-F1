const STORAGE_KEY = 'f1_pilotos';

export function getPilotos() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

export function savePilotos(pilotos) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(pilotos));
}

export const pilotos = [
  { id: 1, nombre: "Max Verstappen", equipo: "Red Bull Racing", rol: "Líder", imagen: "https://upload.wikimedia.org/wikipedia/commons/8/89/Max_Verstappen_2023_Austria_FP2_%28cropped%29.jpg" },

  { id: 2, nombre: "Sergio Pérez", equipo: "Red Bull Racing", rol: "Escudero", imagen: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Sergio_P%C3%A9rez_2022.jpg" },

  { id: 3, nombre: "Lewis Hamilton", equipo: "Mercedes-AMG Petronas", rol: "Líder", imagen: "https://upload.wikimedia.org/wikipedia/commons/8/87/Lewis_Hamilton_2022_Imola.jpg" },

  { id: 4, nombre: "George Russell", equipo: "Mercedes-AMG Petronas", rol: "Escudero", imagen: "https://upload.wikimedia.org/wikipedia/commons/2/2a/George_Russell_2022.jpg" },

  { id: 5, nombre: "Charles Leclerc", equipo: "Ferrari", rol: "Líder", imagen: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Charles_Leclerc_2022.jpg" },

  { id: 6, nombre: "Carlos Sainz", equipo: "Ferrari", rol: "Escudero", imagen: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Carlos_Sainz_2022.jpg" },

  { id: 7, nombre: "Lando Norris", equipo: "McLaren", rol: "Líder", imagen: "https://upload.wikimedia.org/wikipedia/commons/6/66/Lando_Norris_2022.jpg" },

  { id: 8, nombre: "Oscar Piastri", equipo: "McLaren", rol: "Escudero", imagen: "https://upload.wikimedia.org/wikipedia/commons/1/13/Oscar_Piastri_2023.jpg" },

  { id: 9, nombre: "Fernando Alonso", equipo: "Aston Martin", rol: "Líder", imagen: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Fernando_Alonso_2023.jpg" },

  { id: 10, nombre: "Lance Stroll", equipo: "Aston Martin", rol: "Escudero", imagen: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Lance_Stroll_2022.jpg" },

  { id: 11, nombre: "Esteban Ocon", equipo: "Alpine", rol: "Líder", imagen: "https://upload.wikimedia.org/wikipedia/commons/2/25/Esteban_Ocon_2022.jpg" },

  { id: 12, nombre: "Pierre Gasly", equipo: "Alpine", rol: "Escudero", imagen: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Pierre_Gasly_2022.jpg" },

  { id: 13, nombre: "Valtteri Bottas", equipo: "Alfa Romeo", rol: "Líder", imagen: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Valtteri_Bottas_2022.jpg" },

  { id: 14, nombre: "Zhou Guanyu", equipo: "Alfa Romeo", rol: "Escudero", imagen: "https://upload.wikimedia.org/wikipedia/commons/6/68/Zhou_Guanyu_2022.jpg" },

  { id: 15, nombre: "Kevin Magnussen", equipo: "Haas", rol: "Líder", imagen: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Kevin_Magnussen_2022.jpg" },

  { id: 16, nombre: "Nico Hülkenberg", equipo: "Haas", rol: "Escudero", imagen: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Nico_H%C3%BClkenberg_2022.jpg" },

  { id: 17, nombre: "Yuki Tsunoda", equipo: "AlphaTauri", rol: "Líder", imagen: "https://upload.wikimedia.org/wikipedia/commons/3/36/Yuki_Tsunoda_2022.jpg" },

  { id: 18, nombre: "Daniel Ricciardo", equipo: "AlphaTauri", rol: "Escudero", imagen: "https://upload.wikimedia.org/wikipedia/commons/8/83/Daniel_Ricciardo_2022.jpg" },

  { id: 19, nombre: "Alexander Albon", equipo: "Williams", rol: "Líder", imagen: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Alexander_Albon_2022.jpg" },
  
  { id: 20, nombre: "Logan Sargeant", equipo: "Williams", rol: "Escudero", imagen: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Logan_Sargeant_2023.jpg" }
];

export const vehiculos = [

 {

  equipo: "Red Bull Racing",

  modelo: "RB20",

  motor: "Honda",

  velocidad_maxima_kmh: 360,

  aceleracion_0_100: 2.5,

  pilotos: [1, 2], // Max Verstappen y Sergio Pérez

  rendimiento: {

   conduccion_normal: {

    velocidad_promedio_kmh: 320,

    consumo_combustible: { seco: 1.9, lluvioso: 2.1, extremo: 2.4 },

    desgaste_neumaticos: { seco: 1.5, lluvioso: 0.8, extremo: 2.5 }

   },

   conduccion_agresiva: {

    velocidad_promedio_kmh: 340,

    consumo_combustible: { seco: 2.4, lluvioso: 2.6, extremo: 3.0 },

    desgaste_neumaticos: { seco: 2.2, lluvioso: 1.2, extremo: 3.5 }

   },

   ahorro_combustible: {

    velocidad_promedio_kmh: 300,

    consumo_combustible: { seco: 1.6, lluvioso: 1.8, extremo: 2.1 },

    desgaste_neumaticos: { seco: 1.0, lluvioso: 0.5, extremo: 1.8 }

   }

  },

  imagen: "https://upload.wikimedia.org/wikipedia/commons/8/89/Max_Verstappen_2023_Austria_FP2_%28cropped%29.jpg"

 },

 {

  equipo: "Mercedes-AMG Petronas",

  modelo: "W15",

  motor: "Mercedes",

  velocidad_maxima_kmh: 355,

  aceleracion_0_100: 2.6,

  pilotos: [3, 4], // Lewis Hamilton y George Russell

  rendimiento: {

   conduccion_normal: {

    velocidad_promedio_kmh: 315,

    consumo_combustible: { seco: 2.0, lluvioso: 2.2, extremo: 2.5 },

    desgaste_neumaticos: { seco: 1.6, lluvioso: 0.9, extremo: 2.6 }

   },

   conduccion_agresiva: {

    velocidad_promedio_kmh: 335,

    consumo_combustible: { seco: 2.6, lluvioso: 2.8, extremo: 3.2 },

    desgaste_neumaticos: { seco: 2.3, lluvioso: 1.4, extremo: 3.8 }

   },

   ahorro_combustible: {

    velocidad_promedio_kmh: 295,

    consumo_combustible: { seco: 1.7, lluvioso: 1.9, extremo: 2.2 },

    desgaste_neumaticos: { seco: 1.1, lluvioso: 0.6, extremo: 1.9 }

   }

  },

  imagen: "https://upload.wikimedia.org/wikipedia/commons/8/87/Lewis_Hamilton_2022_Imola.jpg"

 }

]