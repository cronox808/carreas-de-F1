class PilotoCard extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode: open})
    }

    ConnectedCallback(){
        const nombre = this.getAttribute("nombre")
        const equipo = this.getAttribute("equipo") 
        const rol = this.getAttribute("rol")

        this.shadowRoot.innertHTML = `
        <div class="bg-white p-4 rounded-xl shadow-md border hover:scale-105 transition-all">
        <h2 class="text-xl font-bold">${nombre}</h2>
        <p class="text-sm">Equipo: ${equipo}</p>
        <p class="text-sm">Rol: ${rol}</p>
        `
    }
}

customElements.define("piloto-card", PilotoCard)
