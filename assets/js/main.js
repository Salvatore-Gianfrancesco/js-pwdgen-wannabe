const userName = prompt("Inserisci il tuo nome");
const userLastname = prompt("Inserisci il tuo cognome");
const userColor = prompt("Inserisci il tuo colore preferito");

document.getElementById("password").innerHTML = `La tua password super sicura è: ${userName}${userLastname}${userColor}22`