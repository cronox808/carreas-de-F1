# carreas-de-F1

## Introducción


La Fórmula 1 es una disciplina que combina velocidad, estrategia y tecnología de vanguardia, generando una experiencia emocionante tanto para los espectadores como para los equipos involucrados. Este proyecto tiene como objetivo desarrollar una simulación interactiva de Fórmula 1 basada en tecnologías web modernas, permitiendo a los usuarios gestionar y personalizar su experiencia de carrera a través de un sistema dinámico de administración de circuitos, pilotos y vehículos.



La aplicación estará construida utilizando HTML, JavaScript y Web Components, y css (Es posible utilizar frameworks CSS como Bootstrap o Tailwind si el trainer lo indica), para garantizar un diseño moderno y responsivo. Además, contará con funcionalidades de administración que permitirán a los usuarios agregar, editar, eliminar y buscar circuitos, pilotos y vehículos, facilitando la personalización y el desarrollo de múltiples escenarios de carrera.



##Objetivos del Proyecto


Este proyecto busca ofrecer una plataforma interactiva donde los usuarios puedan:

- **Administrar circuitos de carrera** agregando nuevas pistas con características específicas, editando sus datos, eliminándolas o buscándolas en un listado.
- **Gestionar pilotos y vehículos** con atributos personalizados como velocidad, aceleración, resistencia al desgaste de neumáticos y estrategias de carrera.
- **Configurar y personalizar la simulación**, ajustando condiciones climáticas, reglajes de los vehículos y estrategias de equipo.
- **Visualizar carreras en tiempo real** mediante animaciones interactivas usando Canvas **API o WebGL**.
- **Implementar un sistema de persistencia** utilizando LocalStorage o IndexedDB para guardar y recuperar datos de circuitos, pilotos y vehículos.


## Tecnologías Utilizadas
Para desarrollar una simulación eficiente y con una interfaz modular y escalable, se emplearán las siguientes tecnologías:

### Frontend
- **HTML5 y CSS3:** Para la estructura y el diseño responsivo (utilizando **Bootstrap o Tailwind CSS** si el trainer lo indica).
- **JavaScript (ES6+):** Desarrollo de la lógica de simulación y gestión de datos.
- **Web Components (Lit o Vanilla JS):** Modularización de la interfaz para una mayor escalabilidad y reutilización del código.
- **Canvas API o WebGL:** Representación gráfica de los autos y circuitos con animaciones dinámicas(Bonus +15 ptos).

## Gestión de Datos
- **Sistemas de almacenamiento en navegadores como Local Storage, Session Storage, etc.** (Si el trainer lo indica se deberá usar JSON Server: Persistencia de datos para circuitos, pilotos y vehículos).
- **Fetch API** Posibilidad de integración con una API REST para futuras mejoras.

## Funcionalidades CRUD
- **Circuitos:**
Agregar nuevos circuitos con nombre, ubicación, distancia y condiciones de pista.
Editar y actualizar datos de los circuitos existentes.
Eliminar circuitos del sistema.
Buscar circuitos por nombre o ubicación.
- **Pilotos:**
Agregar pilotos con nombre, equipo, experiencia y habilidades.
Modificar atributos del piloto.
Eliminar pilotos.
Buscar pilotos en el sistema.
- **Vehículos:**
Crear y personalizar autos con velocidad máxima, aceleración y consumo de neumáticos.
Editar y optimizar configuraciones de los vehículos.
Eliminar vehículos del sistema.
Buscar vehículos según características.
