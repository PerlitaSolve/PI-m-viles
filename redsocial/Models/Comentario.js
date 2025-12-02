export class Comentario {
    constructor(id_comentario, contenido, id_publicacion, id_comentador){
        this.id_comentario = id_comentario
        this.contenido = contenido
        this.id_publicacion = id_publicacion
        this.id_comentador = id_comentador
    }

    static validarDatos(contenido) {
        if (!contenido) {
            throw new Error('El comentario no puede estar vacío')
        } else if (contenido.trim().length > 300) {
            throw new Error('El comentario no puede ser más largo que 300 carácteres')
        }
    }
}