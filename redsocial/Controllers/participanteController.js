import { evento_Participantes } from "../Models/Evento_Participantes";
import databaseServices from "../Database/databaseServices";

export class participanteController {
    constructor(){
        this.listeners=[]
    }
    /* async initialize() {
        await databaseServices.initialize()
    } */

    async obtenerParticipantes(id_evento) {
        try {
            const data = await databaseServices.getAllParticipantes(id_evento)

            return data.map(e => new evento_Participantes(
                e.id_evento_participante,
                e.id_evento,
                e.id_usuario,
            ))
        } catch (error) {
            console.error('Error al obtener participantes: ', error)
            throw new Error('No se pudieron obtener los participantes')
        }
    }

    async addParticipante(id_evento) {
        try {
            const nuevo = await databaseServices.addParticipante(id_evento)

            this.notifyListeners()

            return new evento_Participantes(nuevo.id_evento_participante, nuevo.id_evento, nuevo.id_usuario)
        } catch (error) {
            console.error('Error al agregar participante: ', error)
            throw new Error('No se pudo agregar el participante')
        }
    }

    async deleteParticipante(id_evento) {
        try {
            await databaseServices.deleteParticipante(id_evento)
            this.notifyListeners()
        } catch (error) {
            console.error('Error al eliminar participante: ', error)
            throw new Error('No se pudo eliminar el participante')
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