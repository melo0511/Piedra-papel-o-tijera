const piedra = document.getElementById('piedra')
const papel = document.getElementById('papel')
const tijera = document.getElementById('tijera')

const resultado = document.getElementById('resultado')
const resultMaquina = document.getElementById('resultMaquina')
const resultUsuario = document.getElementById('resultUsuario')

const puntosUsuario = document.getElementById('puntosUsuario')
const puntosMaquina = document.getElementById('puntosMaquina')

const reiniciar = document.getElementById('reiniciar')

let puntosU = 0
let puntosM = 0

piedra.addEventListener('click',Fpiedra)
papel.addEventListener('click',Fpapel)
tijera.addEventListener('click',Ftijera)

reiniciar.addEventListener('click',reinicio)

let uno = "👊"
let dos = "✋"
let tres = "✌"

let maquina = ""
let usuario=""

function PC() {

    //AZAR

    let random = Math.random()*10
    let azar= Math.round(random)
    console.log(azar);
    
    if(azar<4){
        maquina = "piedra"
    }else if(azar>=4 && azar <7){
        maquina = "papel"
    }else if(azar>=7 && azar <=10){
        maquina = "tijera"
    }

    // EMPATES

    if(usuario === "piedra" && maquina === "piedra"){
        resultUsuario.textContent = "Usuario: "+uno
        resultMaquina.textContent = "Maquina: "+uno
        resultado.textContent = "EMPATE"
    }else if(maquina === "papel" && usuario === "papel"){
        resultUsuario.textContent = "Usuario: "+dos
        resultMaquina.textContent = "Maquina: "+dos
        resultado.textContent = "EMPATE"
    }else if(maquina === "tijera" && usuario === "tijera"){
        resultUsuario.textContent = "Usuario: "+tres
        resultMaquina.textContent = "Maquina: "+tres
        resultado.textContent = "EMPATE"
    }

    //POSIBLIDADES HETEROGENEAS

    if(usuario === "piedra" && maquina === "papel"){
        resultUsuario.textContent = "Usuario: "+uno
        resultMaquina.textContent = "Maquina: "+dos
        resultado.textContent = "GANA MAQUINA"
        puntosM++
    }else if(usuario === "piedra" && maquina === "tijera"){
        resultUsuario.textContent = "Usuario: "+uno
        resultMaquina.textContent = "Maquina: "+tres
        resultado.textContent = "GANA USUARIO"
        puntosU++
    }else if(usuario === "papel" && maquina === "piedra"){
        resultUsuario.textContent = "Usuario: "+dos
        resultMaquina.textContent = "Maquina: "+uno
        resultado.textContent = "GANA USUARIO"
        puntosU++
    }else if(usuario === "papel" && maquina === "tijera"){
        resultUsuario.textContent = "Usuario: "+dos
        resultMaquina.textContent = "Maquina: "+tres
        resultado.textContent = "GANA MAQUINA"
        puntosM++
    }else if(usuario === "tijera" && maquina === "piedra"){
        resultUsuario.textContent = "Usuario: "+tres
        resultMaquina.textContent = "Maquina: "+uno
        resultado.textContent = "GANA MAQUINA"
        puntosM++
    }else if(usuario === "tijera" && maquina == "papel"){
        resultUsuario.textContent = "Usuario: "+tres
        resultMaquina.textContent = "Maquina: "+dos
        resultado.textContent = "GANA USUARIO"
        puntosU++
    }
    puntosMaquina.textContent = puntosM
    puntosUsuario.textContent = puntosU
    console.log(maquina);
}



function Fpiedra() {
    usuario="piedra"
    console.log(usuario); 
    PC()
}

function Fpapel() {
    
    usuario="papel"
    console.log(usuario);
    PC()
}

function Ftijera(){
   
    usuario="tijera"
    console.log(usuario);
    PC()
}

function reinicio() {
    puntosMaquina.textContent = 0
    puntosUsuario.textContent = 0
    resultUsuario.textContent = "Usuario: "
    resultMaquina.textContent = "Maquina: "
}
