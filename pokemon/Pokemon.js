class Pokemon {
  constructor(nombre, tipo, hpMax, ataque, defensa, movimientos, hpActual) {
    this.nombre = nombre; 
    this.tipo = tipo; 
    this.hpMax = hpMax; 
    this.ataque = ataque; 
    this.defensa = defensa; 
    this.movimientos = movimientos; 
    this.hpActual = hpActual; 
  }

  atacaaar(uno, dos, tres) {
    let aleatorio = Math.random() * (1 - 0.85) + 0.85; 
    let damage = (uno.ataque / dos.defensa) * tres.dañoBase * aleatorio; 
    damage = Math.max(0, Math.round(damage)); 
    dos.hpActual = dos.hpActual - damage; 
    console.log(
      `${uno.nombre} usó ${tres.nombre} y causó ${damage} de daño a ${dos.nombre}`
    );
  }
  curanashe() {
    let curandera = this.hpMax * 0.5;
    this.hpActual=this.hpActual + curandera;
    if(this.hpActual>this.hpMax){
        this.hpActual=this-this.hpMax;
    }
  }
}

module.exports = Pokemon;
