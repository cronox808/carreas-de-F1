import "../js/components/navbar.js"
import "../js/components/piloto-card.js"
import { pilotos } from "./data/pilotos.js"

const contenedor = document.getElementById("contenido-principal")

pilotos.forEach(piloto =>{
    const card = document.createElement("piloto-card")
    card.setAttribute("nombre", piloto.nombre)
    card.setAttribute("equipo", piloto.equipo)
    card.setAttribute("rol", piloto.rol)
    contenedor.appendChild
})