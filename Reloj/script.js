function IR(lugar) {
    if (lugar === 'hora'){
        window.open('hora.html');
    }
    if (lugar === 'cronometro'){
        window.open('cronometro.html');
    }
    if (lugar === 'pomodoro'){
        window.open('pomodoro.html');
    }
    if (lugar === 'temporizador'){
        window.open('temporizador.html');
    }
    if (lugar === 'index'){
        window.open('index.html');
    }
}

function REFRESH() {
    location.reload();
}



function TEMPORIZADOR() {

    const div = document.getElementById('temporizador');
    let input = Number(document.getElementById("tiempo").value);
    let opcionmin = document.getElementById("opcionmin");
    let opcionseg = document.getElementById("opcionseg");
    if (opcionseg.checked) {
        tiempo = input;
    }
    if (opcionmin.checked) {
        tiempo = input * 60; 
    }

    let numeros = document.createElement("p");
    div.appendChild(numeros);
    function CAMBIAR() {
        tiempo = tiempo - 1;
        let divicionint = Math.trunc(tiempo / 60);
        let residuo =  tiempo % 60;
        let residuo2 = String(residuo).padStart(2, "0");
        numeros.innerText = (divicionint + ":" + residuo2);
        numeros.classList.add("texto-hora");
        if (tiempo === 0){
            const sonido = new Audio('temporizador.mp3');
            sonido.play();
            clearInterval(intervalo);
            intervalo = null;
        } 
    }
    let intervalo = setInterval(CAMBIAR, 1000);
}

function CRONOMETRO() {
    let cantidad = 0
    let divcron = document.getElementById("divcron");
    let cuenta = document.createElement("p");
    let detener = document.createElement("button");
    detener.innerText = "Detener"
    detener.onclick = PAUSA;
    detener.classList.add("boton");
    divcron.appendChild(cuenta);
    divcron.appendChild(detener);
    function CAMBIAR(){
        cantidad = cantidad + 1;
        let divicionint = Math.trunc(cantidad / 60);
        let residuo =  cantidad % 60;
        let residuo2 = String(residuo).padStart(2, "0");
        cuenta.innerText = (divicionint + ":" + residuo2);
        cuenta.classList.add("texto-hora");
    }
    let intervalo = setInterval(CAMBIAR, 1000);

    function PAUSA(){
        const sonido = new Audio('temporizador.mp3');
        sonido.play();
        clearInterval(intervalo);
        intervalo = null;
    }

}


function actualizarReloj() {
    const ahora = new Date();

    let horas = ahora.getHours().toString().padStart(2, "0");
    let minutos = ahora.getMinutes().toString().padStart(2, "0");
    let segundos = ahora.getSeconds().toString().padStart(2, "0");

    document.getElementById("reloj").innerText = `${horas}:${minutos}:${segundos}`;
}

function RELOJ() {
    const ahora = new Date();
    const hora = ahora.toLocaleTimeString(); // Formato según el idioma del navegador
    document.getElementById("reloj").innerText = hora;
}

actualizarReloj();
setInterval(actualizarReloj, 1000);

function POMODORO() {
    
    let pomodorodiv = document.getElementById("pomodorodiv");
    let trabajo = 1500;
    let descanso = 300;

    let texto = document.createElement("p");
    pomodorodiv.appendChild(texto);

    let intervalo;
    //let intervalo2;

    function TRABAJO(){
        trabajo = trabajo - 1;
        let divicionint = Math.trunc(trabajo / 60);
        let residuo =  trabajo % 60;
        let residuo2 = String(residuo).padStart(2, "0");
        texto.innerText = (divicionint + ":" + residuo2);
        texto.classList.add("texto-hora");

        if (trabajo === 0){
            const sonido = new Audio('temporizador.mp3');
            sonido.play();
            clearInterval(intervalo2);
            intervalo2 = null;
            intervalo = setInterval(DESCANSO, 1000);
            DESCANSO();
        }
    }
        
    function DESCANSO(){
        descanso = descanso - 1;
        let divicionint = Math.trunc(descanso / 60);
        let residuo =  descanso % 60;
        let residuo2 = String(residuo).padStart(2, "0");
        texto.innerText = (divicionint + ":" + residuo2);
        texto.classList.add("texto-hora")
    
        if (descanso === 0){
            const sonido = new Audio('temporizador.mp3');
            sonido.play();
            clearInterval(intervalo);
            intervalo = null;
        
        }

    }
    let intervalo2 = setInterval(TRABAJO, 1000);

}