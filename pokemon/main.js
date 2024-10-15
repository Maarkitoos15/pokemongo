const readlineSync = require('readline-sync');
const type = require('./type');
const Move = require('./move');
const Pokemon = require('./Pokemon');


let impactrueno = new Move("Impactrueno", 90, type.ELECTRICO);
let terremoto = new Move("Terremoto", 100, type.TIERRA);
let hidrobomba = new Move("Hidrobomba", 110, type.AGUA);
let lanzallamas = new Move("Lanzallamas", 90, type.FUEGO);
let rayoHielo = new Move("Rayo Hielo", 90, type.HIELO);
let psicocorte = new Move("Psicocorte", 70, type.PSIQUICO);
let hojaAfilada = new Move("Hoja Afilada", 70, type.PLANTA);
let garrasSombria = new Move("Garra Sombría", 70, type.FANTASMA);
let aereoAsalto = new Move("Aero Asalto", 85, type.VOLADOR);
let golpeKarate = new Move("Golpe Karate", 50, type.LUCHA);
let venenoX = new Move("Veneno X", 90, type.VENENO);


let pikachu = new Pokemon("Pikachu", type.ELECTRICO, 100, 80, 69, [impactrueno], 100);
let charizard = new Pokemon("Charizard", type.FUEGO, 120, 95, 78, [lanzallamas], 120);
let blastoise = new Pokemon("Blastoise", type.AGUA, 110, 90, 88, [hidrobomba], 110);
let venusaur = new Pokemon("Venusaur", type.PLANTA, 100, 85, 80, [hojaAfilada], 100);
let alakazam = new Pokemon("Alakazam", type.PSIQUICO, 90, 110, 70, [psicocorte], 90);
let gengar = new Pokemon("Gengar", type.FANTASMA, 95, 100, 75, [garrasSombria], 95);
let machamp = new Pokemon("Machamp", type.LUCHA, 130, 80, 65, [golpeKarate], 130);
let aerodactyl = new Pokemon("Aerodactyl", type.VOLADOR, 105, 90, 80, [aereoAsalto], 105);
let nidoking = new Pokemon("Nidoking", type.VENENO, 115, 85, 75, [venenoX], 115);
let lapras = new Pokemon("Lapras", type.AGUA, 120, 85, 90, [rayoHielo], 120);
let garchomp = new Pokemon("Garchomp", type.TIERRA, 130, 100, 90, [terremoto], 130);


let chimichanga = [pikachu, charizard, blastoise, venusaur, alakazam, gengar, machamp, aerodactyl, nidoking, lapras, garchomp];
let ramdomjeje = Math.floor(Math.random() * chimichanga.length);
let pokemonMarcos = chimichanga[ramdomjeje];
console.log(pokemonMarcos);

let ramdomjaja = Math.floor(Math.random() * chimichanga.length);
let pokemonHEMILIO = chimichanga[ramdomjaja];
console.log(pokemonHEMILIO);


while (pokemonMarcos.hpActual > 0 && pokemonHEMILIO.hpActual > 0) {
    console.log("\nEstado actual de la batalla:");
    console.log(`${pokemonMarcos.nombre}: HP ${pokemonMarcos.hpActual}/${pokemonMarcos.hpMax}`);
    console.log(`${pokemonHEMILIO.nombre}: HP ${pokemonHEMILIO.hpActual}/${pokemonHEMILIO.hpMax}`);
    console.log("------------------------------");

    let elex = readlineSync.question("1. Atacar 2. Curar: ");
    switch (elex) {
        case '1':
            console.log("Elige un movimiento:");
            pokemonMarcos.movimientos.forEach((movimiento, index) => {
                console.log(`${index + 1}. ${movimiento.nombre} - Poder: ${movimiento.dañoBase}`);
            });

            let eleccion = parseInt(readlineSync.question("Elige un movimiento: ")) - 1;
            let ataqueMarcos = pokemonMarcos.movimientos[eleccion];

           
            pokemonMarcos.atacaaar(pokemonMarcos, pokemonHEMILIO, ataqueMarcos);  
            break;


        case '2':
            
            console.log(`${pokemonMarcos.nombre} decidió curarse.`);
            pokemonMarcos.curanashe();
            break;
        

        default:
            console.log("Opción no válida. Intenta de nuevo.");
    }
    let emilioAtaque=Math.floor(Math.random()*2)+1;
    if(emilioAtaque==1){
        let movimientoHistorico = pokemonHEMILIO.movimientos[Math.floor(Math.random() * pokemonHEMILIO.movimientos.length)];
        pokemonHEMILIO.atacaaar(pokemonHEMILIO, pokemonMarcos, movimientoHistorico);
    }
    if(emilioAtaque==2){
        console.log(`${pokemonHEMILIO.nombre} decidió curarse.`);
        pokemonHEMILIO.curanashe();
    }
    
}
if (pokemonMarcos.hpActual <= 0) {
    console.log(`${pokemonMarcos.nombre} ha sido derrotado!`);
} else if (pokemonHEMILIO.hpActual <= 0) {
    console.log(`${pokemonHEMILIO.nombre} ha sido derrotado!`);
}





