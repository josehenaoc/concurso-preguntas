window.onload = function(){

    let base_preguntas = readText("preguntas.json")
    let interprete_bp = JSON.parse(base_preguntas)
    escojerPreguntaAleatoria()
   
}

let pregunta
let posibles_respuestas
btn_correspondiente = [
    select.id("btn1"), select_id("btn2"),
    select_id("btn3"), select_id("btn4")
]
npreguntas = []

let preguntas_hechas = 0
let preguntas_correctas = 0

function escogerPreguntaAleatoria() {
    let n = Math.floor(Math.random() * interprete_bp.length)
    // n = 0
  
    while (npreguntas.includes(n)) {
      n++
      if (n >= interprete_bp.length) {
        n = 0
      }
      if (npreguntas.length == interprete_bp.length) {
        npreguntas = []
      }
    }
    npreguntas.push(n)
    preguntas_hechas++
    
}