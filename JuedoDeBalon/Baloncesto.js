let jugadorDeBaloncesto = {
    nombre: "Juan Pérez",
    edad: 28,
    equipo: "Los Titanes",
    puntosPorPartido: 25.3,

    actualizarPuntos: function(nuevosPuntos) {
        this.puntosPorPartido = nuevosPuntos;
    }
};

console.log(`Puntos por partido antes de actualizar: ${jugadorDeBaloncesto.puntosPorPartido}`);
jugadorDeBaloncesto.actualizarPuntos(30.5);
console.log(`Puntos por partido después de actualizar: ${jugadorDeBaloncesto.puntosPorPartido}`);