import { Evento } from "../Models/Evento";
import databaseServices from "../Database/databaseServices";

export class eventoController {
    constructor(){
        this.listeners=[]
    }
    /* async initialize() {
        await databaseServices.initialize()
    } */

    async obtenerEventos() {
        try{
            const data = await databaseServices.getAllEventos()
            return data.map(e => new Evento(
                e.id_evento,
                e.id_usuario,
                e.nombre,
                e.descripcion,
                e.ubicacion,
                e.fecha,
                e.hora,
                e.duracion,
                e.imagen
            ))
        }
        catch(error) {
            console.error('Error al obtener eventos: ', error)
            throw new Error('No se pudieron cargar los eventos')
        }
    }
    async obtenerEventosUsuario() {
        try{
            const data = await databaseServices.getAllEventosUsuario()
            return data.map(e => new Evento(
                e.id_evento,
                e.id_usuario,
                e.nombre,
                e.descripcion,
                e.ubicacion,
                e.fecha,
                e.hora,
                e.duracion,
                e.imagen
            ))
        }
        catch (error) {
            console.error('Error al obtener eventos: ', error)
            throw new Error('No se pudieron cargar los eventos')
        }
    }

    async crearEvento(nombre, descripcion, ubicacion, fecha, hora, duracion, imagen) {
        try {
            Evento.validarDatos(nombre, descripcion, ubicacion, fecha, hora, duracion, imagen)

            const nuevo = await databaseServices.addEvento(nombre, descripcion, ubicacion, fecha, hora, duracion, imagen)

            this.notifyListeners()

            return new Evento(
                nuevo.id_evento,
                nuevo.id_usuario,
                nuevo.nombre,
                nuevo.descripcion,
                nuevo.ubicacion,
                nuevo.fecha,
                nuevo.hora,
                nuevo.duracion,
                nuevo.imagen
            )
        } catch (error) {
            console.error('Error crear evento: ', error)
            throw new Error('No se pudo crear el evento')
        }
    }

    async updateEvento(id_evento, nuevosValores){
        try {
            const {nombre, descripcion, ubicacion, fecha, hora, duracion, imagen} = nuevosValores

            Evento.validarDatos(nombre, descripcion, ubicacion, fecha, hora, duracion, imagen)

            const nuevo = await databaseServices.updateEvento(id_evento, nuevosValores)

            this.notifyListeners()

            return new Evento(
                nuevo.id_evento,
                nuevo.id_usuario,
                nuevo.nombre,
                nuevo.descripcion,
                nuevo.ubicacion,
                nuevo.fecha,
                nuevo.hora,
                nuevo.duracion,
                nuevo.imagen
            )
        } catch (error) {
            console.error('Error al actualizar evento: ', error)
            throw new Error('No se pudo actualizar el evento')
        }
    }

    async deleteEvento(id_evento){
        try {
            await databaseServices.deleteEvento(id_evento)

            this.notifyListeners()

            return true
        } catch (error) {
            console.error('Error al eliminar evento: ', error)
            throw new Error('No se pudo eliminar el evento')
        }
    }

    addListener(callback) {
        this.listeners.push(callback)
    }

    removeListener(callback) {
        this.listeners = this.listeners.filter(l => l !== callback)
    }

    notifyListeners() {
        this.listeners.forEach(callback => callback())
    }
}