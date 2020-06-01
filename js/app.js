// VARIABLES

const presupuestoUsuario = prompt('Cual es tu presupuesto semanal?');
let cantidadPresupuesto;



// CLASES

// Clase de presupuesto
class Presupuesto {
  constructor(presupuesto){
    this.presupuesto = Number(presupuesto);
    this.restante = Number(presupuesto);
  }
  // Método para ir restando del presupuesto actual
  presupuestoRestante(cantidad = 0){
    return this.restante -= Number(cantidad);
  }
}


// Clase de Interfaz, maneja todo lo relacionado al HTML
class Interfaz{
  insertarPresupuesto(cantidad){
    const presupuestoSpan = document.querySelector('span#total');
    const restanteSpan = document.querySelector('span#restante');

    // Insertar al HTML
    presupuestoSpan.innerHTML = `${cantidad}`;
    restanteSpan.innerHTML = `${cantidad}`;
  }
}



// EVENT LISTENERS

document.addEventListener('DOMContentLoaded', function(){
  if(presupuestoUsuario === null || presupuestoUsuario === ''){
    window.location.reload();
  }else{
    // Instanciar un presupuesto
    cantidadPresupuesto = new Presupuesto(presupuestoUsuario);
    // Instanciar la clase de interfaz
    const ui = new Interfaz();
    ui.insertarPresupuesto(cantidadPresupuesto.presupuesto);
  }
});