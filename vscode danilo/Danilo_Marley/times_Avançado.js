const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Qual é o turno? (manha/tarde/noite): ", function(turno) {
  if (turno == "manha") {
    console.log("Bom dia!");
  } else if (turno == "tarde") {
    console.log("Boa tarde!");
  } else if (turno == "noite") {
    console.log("Boa noite!");
  } else {
    console.log("Turno inválido!");
  }
  rl.close();
});