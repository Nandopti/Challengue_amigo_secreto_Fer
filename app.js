
const listaAmigos = [];
const entradaAmigo = document.getElementById("amigo");
const vistaEntradaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado")


function agregarAmigo() {
    listaAmigos.push(entradaAmigo.value);
    
    vistaEntradaAmigos.innerHTML += `<li>${entradaAmigo.value}</li>`
    if(!entradaAmigo.value){
        alert("inserte un nombre válido")
    }
}
function sortearAmigo(){
  const numeroAleatorio = Math.floor(Math.random()*listaAmigos.length);
  const amigoSecreto = listaAmigos[numeroAleatorio];
  resultado.innerHTML = `<li>Tu amigo secreto es: ${amigoSecreto}</li>`;

}






