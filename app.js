let numero = 0

function total(Number1 , Number2){
    return Number1 * Number2
}

while (numero != 4) {
    
    numero = Number(prompt("Elija el numero de producto o 4 para salir: \n 1- Papa \n 2- Tomate \n 3- Zanahoria \n 4- Salir"))

        switch (numero) {
            case 1:
                alert("Usted eligio Papa")
                let kiloPapa = Number(prompt("Cuantos kilos va a llevar?"))
                let papaXMenor = 90
                let papaXMayor = 85
                if (kiloPapa < 10) {
                    alert("Precio por menor $ " + papaXMenor + " el kilo \nTotal $ " + total(papaXMenor , kiloPapa))
                } else {
                    alert("Precio por mayor $ " + papaXMayor + " el kilo \nTotal $ " + total(papaXMayor , kiloPapa))
                }
                break;

            case 2:
                alert("Usted eligio Tomate")
                let kiloTomate = Number(prompt("Cuantos kilos va a llevar?"))
                let tomateXMenor = 120
                let tomateXMayor = 110
                if (kiloTomate < 10) {
                    alert("Precio por menor $ " + tomateXMenor + " el kilo \nTotal $ " + total(tomateXMenor , kiloTomate))
                } else {
                    alert("Precio por mayor $ " + tomateXMayor + " el kilo \nTotal $ " + total(tomateXMayor , kiloTomate))
                }
                break;
                
            case 3:
                alert("Usted eligio Zanahoria")
                let kiloZanahoria = Number(prompt("Cuantos kilos va a llevar?"))
                let zanahoriaXMenor = 70
                let zanahoriaXMayor = 60
                if (kiloZanahoria < 10) {
                    alert("Precio por menor $ " + zanahoriaXMenor + " el kilo \nTotal $ " + total(zanahoriaXMenor , kiloZanahoria))
                } else {
                    alert("Precio por mayor $ " + zanahoriaXMayor + " el kilo \nTotal $ " + total(zanahoriaXMayor , kiloZanahoria))
                }
                break;

            case 4:
                alert("Hasta pronto")
                break;

            default:
                alert("Ingrese un numero valido")
                break;
        }
}
