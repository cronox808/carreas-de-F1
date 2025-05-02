function initCanvas(){
    const  canvas = document.getElementById('pista')
    const ctx = canvas.getContext('2d')

    //dibujar pista
    ctx.beginPath()
    ctx.arc(400, 200, 150, 0, Math.PI * 2)
    ctx.strokeStyle = 'white'
    ctx.lineWidth = 5
    ctx.stroke()

    //Dibujar auto
    ctx.fillStyle = 'red'
    ctx.fillRect(250, 200, 40, 20)
}