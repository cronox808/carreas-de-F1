const pilotos = [

 { id: 1, nombre: "Max Verstappen", equipo: "Red Bull Racing", rol: "Líder" },

 { id: 2, nombre: "Sergio Pérez", equipo: "Red Bull Racing", rol: "Escudero" },

 { id: 3, nombre: "Lewis Hamilton", equipo: "Mercedes-AMG Petronas", rol: "Líder" },

 { id: 4, nombre: "George Russell", equipo: "Mercedes-AMG Petronas", rol: "Escudero" },

 { id: 5, nombre: "Charles Leclerc", equipo: "Ferrari", rol: "Líder" },

 { id: 6, nombre: "Carlos Sainz", equipo: "Ferrari", rol: "Escudero" },

 { id: 7, nombre: "Lando Norris", equipo: "McLaren", rol: "Líder" },

 { id: 8, nombre: "Oscar Piastri", equipo: "McLaren", rol: "Escudero" },

 { id: 9, nombre: "Fernando Alonso", equipo: "Aston Martin", rol: "Líder" },

 { id: 10, nombre: "Lance Stroll", equipo: "Aston Martin", rol: "Escudero" },

 { id: 11, nombre: "Esteban Ocon", equipo: "Alpine", rol: "Líder" },

 { id: 12, nombre: "Pierre Gasly", equipo: "Alpine", rol: "Escudero" },

 { id: 13, nombre: "Valtteri Bottas", equipo: "Alfa Romeo", rol: "Líder" },

 { id: 14, nombre: "Zhou Guanyu", equipo: "Alfa Romeo", rol: "Escudero" },

 { id: 15, nombre: "Kevin Magnussen", equipo: "Haas", rol: "Líder" },

 { id: 16, nombre: "Nico Hülkenberg", equipo: "Haas", rol: "Escudero" },

 { id: 17, nombre: "Yuki Tsunoda", equipo: "AlphaTauri", rol: "Líder" },

 { id: 18, nombre: "Daniel Ricciardo", equipo: "AlphaTauri", rol: "Escudero" },

 { id: 19, nombre: "Alexander Albon", equipo: "Williams", rol: "Líder" },

 { id: 20, nombre: "Logan Sargeant", equipo: "Williams", rol: "Escudero" }

]



// Lista de equipos con sus pilotos

const equipos = [

 {

  nombre: "Red Bull Racing",

  pais: "Austria",

  motor: "Honda",

  pilotos: [1, 2], // IDs de pilotos

  imagen: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Red_Bull_Racing_Logo.svg"

 },

 {

  nombre: "Mercedes-AMG Petronas",

  pais: "Alemania",

  motor: "Mercedes",

  pilotos: [3, 4],

  imagen: "https://upload.wikimedia.org/wikipedia/commons/3/32/Mercedes_AMG_Petronas_F1_Team_logo.svg"

 },

 {

  nombre: "Ferrari",

  pais: "Italia",

  motor: "Ferrari",

  pilotos: [5, 6],

  imagen: "https://upload.wikimedia.org/wikipedia/en/d/d4/Scuderia_Ferrari_Logo.svg"

 }

];



// Lista de circuitos con estadísticas y ganadores históricos

const circuitos = [

 {

  nombre: "Circuito de Mónaco",

  pais: "Mónaco",

  longitud_km: 3.34,

  vueltas: 78,

  descripcion: "Uno de los circuitos más prestigiosos y difíciles del calendario, conocido por sus calles angostas y la falta de zonas de adelantamiento.",

  record_vuelta: { tiempo: "1:10.166", piloto: "Lewis Hamilton", año: 2019 },

  ganadores: [

   { temporada: 2021, piloto: 1 },

   { temporada: 2022, piloto: 2 },

   { temporada: 2023, piloto: 1 }

  ],

  imagen: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Monte_Carlo_Formula_1_track_map.svg"

 },

 {

  nombre: "Silverstone",

  pais: "Reino Unido",

  longitud_km: 5.89,

  vueltas: 52,

  descripcion: "Uno de los circuitos más rápidos del calendario, con curvas de alta velocidad como Maggotts y Becketts.",

  record_vuelta: { tiempo: "1:27.097", piloto: "Max Verstappen", año: 2020 },

  ganadores: [

   { temporada: 2021, piloto: 3 },

   { temporada: 2022, piloto: 5 },

   { temporada: 2023, piloto: 1 }

  ],

  imagen: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Silverstone_Circuit_2020_layout.png"

 },

 {

  nombre: "Circuito de Spa-Francorchamps",

  pais: "Bélgica",

  longitud_km: 7.00,

  vueltas: 44,

  descripcion: "Famoso por la curva Eau Rouge y la larga recta de Kemmel, un circuito donde la potencia del motor es clave.",

  record_vuelta: { tiempo: "1:46.286", piloto: "Valtteri Bottas", año: 2018 },

  ganadores: [

   { temporada: 2021, piloto: 1 },

   { temporada: 2022, piloto: 1 },

   { temporada: 2023, piloto: 1 }

  ],

  imagen: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Circuit_Spa_2018.png"

 },

 {

  nombre: "Circuito de Monza",

  pais: "Italia",

  longitud_km: 5.79,

  vueltas: 53,

  descripcion: "Conocido como 'El Templo de la Velocidad', Monza es el circuito más rápido del calendario con largas rectas y chicanes icónicas.",

  record_vuelta: { tiempo: "1:21.046", piloto: "Rubens Barrichello", año: 2004 },

  ganadores: [

   { temporada: 2021, piloto: 2 },

   { temporada: 2022, piloto: 1 },

   { temporada: 2023, piloto: 1 }

  ],

  imagen: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Monza_track_map.svg"

 },

 {

  nombre: "Interlagos",

  pais: "Brasil",

  longitud_km: 4.31,

  vueltas: 71,

  descripcion: "Interlagos es un circuito legendario con cambios de elevación y un trazado técnico que ha sido sede de algunas de las carreras más emocionantes de la historia.",

  record_vuelta: { tiempo: "1:10.540", piloto: "Valtteri Bottas", año: 2018 },

  ganadores: [

   { temporada: 2021, piloto: 3 },

   { temporada: 2022, piloto: 1 },

   { temporada: 2023, piloto: 1 }

  ],

  imagen: "https://upload.wikimedia.org/wikipedia/commons/2/23/Aut%C3%B3dromo_Jos%C3%A9_Carlos_Pace_%28Interlagos%29.svg"

 },

 {

  nombre: "Circuito de Yas Marina",

  pais: "Emiratos Árabes Unidos",

  longitud_km: 5.28,

  vueltas: 58,

  descripcion: "Ubicado en Abu Dhabi, es famoso por ser el circuito donde se definen muchos campeonatos, con un diseño moderno y una espectacular carrera nocturna.",

  record_vuelta: { tiempo: "1:39.283", piloto: "Lewis Hamilton", año: 2019 },

  ganadores: [

   { temporada: 2021, piloto: 1 },

   { temporada: 2022, piloto: 1 },

   { temporada: 2023, piloto: 3 }

  ],

  imagen: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Yas_Marina_Circuit_2021_layout.svg"

 },

 {

  nombre: "Circuito de Suzuka",

  pais: "Japón",

  longitud_km: 5.81,

  vueltas: 53,

  descripcion: "Un circuito desafiante con un diseño en forma de ocho, famoso por sus curvas de alta velocidad como 130R y la 'S' de Senna.",

  record_vuelta: { tiempo: "1:30.983", piloto: "Lewis Hamilton", año: 2019 },

  ganadores: [

   { temporada: 2021, piloto: 1 },

   { temporada: 2022, piloto: 1 },

   { temporada: 2023, piloto: 1 }

  ],

  imagen: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Suzuka_circuit_map--2005.svg"

 }

];



// Lista de vehículos con rendimiento detallado

const vehiculos = [

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

