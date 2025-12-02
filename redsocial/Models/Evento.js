export class Evento {
    constructor(id_evento, id_usuario, nombre, descripcion, ubicacion, fecha, hora, duracion, imagen) {
        this.id_evento = id_evento
        this.id_usuario = id_usuario
        this.nombre = nombre
        this.descripcion = descripcion
        this.ubicacion = ubicacion
        this.fecha = fecha
        this.hora = hora
        this.duracion = duracion // en hrs o mins no se
        this.imagen = imagen
    }

    static validarDatos(nombre, descripcion, ubicacion, fecha, hora, duracion, imagen) {
        if(nombre.trim() === ""){
            throw new Error('El nombre no puede estar vacío')
        }
        if(descripcion.trim() === ""){
            throw new Error('La descripción no puede estar vacía')
        }
        if(ubicacion.trim() === ""){
            throw new Error('La ubicación no puede estar vacía')
        }
        if(fecha.trim() === ""){
            throw new Error('La fecha no puede estar vacía')
        }
        if(hora.trim() === ""){
            throw new Error('La hora no puede estar vacía')
        }
        if(duracion.trim() === ""){
            throw new Error('La duración no puede estar vacía')
        }
        /* if(imagen.trim() === ""){
            throw new Error('La imagen no puede estar vacía')
        } */

        if(nombre.length > 50){
            throw new Error('El nombre no puede ser más largo que 50 carácteres')
        }
        if(descripcion.length > 500){
            throw new Error('La descripción no puede ser más larga que 500 carácteres')
        }
        if(ubicacion.length > 100){
            throw new Error('La ubicación no puede ser más larga que 100 carácteres')
        }
    }
}