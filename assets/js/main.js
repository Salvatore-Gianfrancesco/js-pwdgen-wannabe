const user_name = prompt("Inserisci il tuo nome");
const user_lastname = prompt("Inserisci il tuo cognome");
const user_color = prompt("Inserisci il tuo colore preferito");

document.getElementById("password").innerHTML = `La tua password super sicura è: ${user_name}${user_lastname}${user_color}22`