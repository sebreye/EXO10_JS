for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) { 
    continue; 
    }
    console.log(i); 
}

let chiffre = 0; 

do {
    chiffre = prompt("saisissez un nombre paire")
    chiffre <= 10;
} while (chiffre % 2 ===1); 



for (let i = 1; i <= 10; i++) {
    console.log(i); 
    if (i === 7) { 
    break; 
    }
}

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 1) { 
    continue; 
    }
    console.log(i); 
}

for (let i = 1; i <= 10; i++) {
    console.log(i); 
    if (i === 5) { 
    alert("la boucle a été intérrompu")
    break;
    }
}
for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0) {
    alert("l'itération a été sauté") 
    continue; 
    }
    console.log(i); 
}
