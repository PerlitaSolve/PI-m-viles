import * as SQLite from 'expo-sqlite';
/* import { Evento } from '../Models/Evento'; */

import { controller } from '../Controllers';

class DatabaseService {
    constructor() {
        this.db = null;
    }
    async initialize() {
        this.db = await SQLite.openDatabaseAsync('redsocial.db');
        //Si ocupas limpiar tu tabla de usuarios, descomentas esta linwa
        // await this.db.execAsync(`DROP TABLE IF EXISTS usuarios`);
        await this.db.execAsync(`
            PRAGMA foreign_keys = ON;
            CREATE TABLE IF NOT EXISTS usuarios(
                id_usuario INTEGER PRIMARY KEY AUTOINCREMENT,
                email TEXT UNIQUE,
                password TEXT,
                nombre_usuario TEXT NOT NULL,
                telefono TEXT,
                grupo TEXT NOT NULL,
                seguridad TEXT
            );
        `);
        // Si la tabla existía antes sin la columna 'seguridad', intentamos agregarla (ignoramos el error si ya existe)
        try{
            await this.db.execAsync(`ALTER TABLE usuarios ADD COLUMN seguridad TEXT`);
        }catch(_){
            // columna ya existente o no aplicable: no hacemos nada
        }
         await this.db.execAsync(`
            CREATE TABLE IF NOT EXISTS eventos(
                id_evento INTEGER PRIMARY KEY AUTOINCREMENT,
                id_usuario INTEGER NOT NULL,
                nombre TEXT,
                descripcion TEXT,
                ubicacion TEXT,
                fecha TEXT,
                hora TEXT,
                duracion TEXT,
                imagen TEXT,
                FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario) ON DELETE CASCADE
            );
        `);
        await this.db.execAsync(`
            CREATE TABLE IF NOT EXISTS publicaciones(
                id_publicacion INTEGER PRIMARY KEY AUTOINCREMENT,
                fecha DATETIME DEFAULT CURRENT_TIMESTAMP,
                cantidadLikes REAL DEFAULT 0,
                id_usuario INTEGER NOT NULL,
                FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario) ON DELETE CASCADE
            );
        `);
          await this.db.execAsync(`
            CREATE TABLE IF NOT EXISTS comentarios(
                id_comentario INTEGER PRIMARY KEY AUTOINCREMENT,
                contenido TEXT NOT NULL,
                id_publicacion INTEGER NOT NULL,
                id_usuario INTEGER NOT NULL,
                FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario) ON DELETE CASCADE,
                FOREIGN KEY (id_publicacion) REFERENCES publicaciones(id_publicacion) ON DELETE CASCADE
            );
        `);
        await this.db.execAsync(`
            CREATE TABLE IF NOT EXISTS participantes(
                id_evento_participante INTEGER PRIMARY KEY AUTOINCREMENT,
                id_evento INTEGER,
                id_usuario INTEGER
            );
        `);
    }
    async registrarUsuario(email, password, nombre_usuario, telefono, grupo, seguridad=null) {
        await this.db.runAsync(
            `INSERT INTO usuarios (email, password, nombre_usuario, telefono, grupo, seguridad) VALUES (?,?,?,?,?,?)`,
            [email, password, nombre_usuario, telefono, grupo, seguridad]
        );
        return await this.obtenerUsuarioPorEmail(email);
    }
    //Reutiliza esto si lo necesitas Bv
    async obtenerUsuarioPorEmail(email) {
        const result = await this.db.getFirstAsync(
            `SELECT * FROM usuarios WHERE email = ?`,
            [email]
        );
        if (result) {
            return result;
        } else {
            throw new Error('Usuario no encontrado');
        }
    }

    // Recupera/actualiza la contraseña verificando la respuesta de seguridad
    async recuperarContrasena(email, respuestaSeguridad, nuevaPassword){
        const usuario = await this.obtenerUsuarioPorEmail(email);
        const seguridadGuardada = usuario.seguridad || '';
        // Comparamos normalizando a mayúsculas para evitar problemas de casing
        if(String(seguridadGuardada).toUpperCase() === String(respuestaSeguridad || '').toUpperCase()){
            await this.db.runAsync(`UPDATE usuarios SET password = ? WHERE email = ?`, nuevaPassword, email);
            return await this.obtenerUsuarioPorEmail(email);
        }else{
            throw new Error('Respuesta de seguridad incorrecta');
        }
    }


    // ============================================================================================================
    //                                                 EVENTOS
    // ============================================================================================================
    async getAllEventos() {
        return await this.db.getAllAsync(`SELECT * FROM eventos`)
    }
    async getAllEventosUsuario() {
        const userId = controller.getCurrentUserId();  
        ///* const userId = 1 */
        const userID= controller.getCurrentUserId();
        return await this.db.getAllAsync(`SELECT * FROM eventos WHERE id_usuario = ?`, userID)
    }
    // TODO: AGREGAR ID_USUARIO

    async addEvento(nombre, descripcion, ubicacion, fecha, hora, duracion, imagen) {
        const userId = controller.getCurrentUserId();
        /* const userId = 1 */
        /* Evento.validarDatos(nombre, descripcion, ubicacion, fecha, hora, duracion, imagen) */
        const result = await this.db.runAsync(`INSERT INTO eventos (id_usuario, nombre, descripcion, ubicacion, fecha, hora, duracion, imagen)
            VALUES(?, ?, ?, ?, ?, ?, ?, ?)`,
        userId, nombre, descripcion, ubicacion, fecha, hora, duracion, imagen)
        return { id_evento: result.lastInsertRowId, id_usuario: userId, nombre, descripcion, ubicacion, fecha, hora, duracion, imagen}
    }

    async updateEvento(id_evento, nuevosValores) {
        const userId = controller.getCurrentUserId(); 
        /* const userId = 1 */
        const {nombre, descripcion, ubicacion, fecha, hora, duracion, imagen} = nuevosValores
        /* Evento.validarDatos(nombre, descripcion, ubicacion, fecha, hora, duracion, imagen) */

        await this.db.runAsync(`UPDATE eventos SET
            nombre = ?, descripcion = ?, ubicacion = ?, fecha = ?, hora = ?, duracion = ?, imagen = ?
            WHERE id_evento = ? AND id_usuario = ?`,
            nombre, descripcion, ubicacion, fecha, hora, duracion, imagen, id_evento, userId
        )
        return {id_evento, ...nuevosValores}
    }

    async deleteEvento(id_evento) {
        const userId = controller.getCurrentUserId(); 
        /* const userId = 1 */
        await this.db.runAsync(`DELETE FROM eventos WHERE id_evento = ? AND id_usuario = ?`, id_evento, userId)  
        return true      
    }


    // ============================================================================================================
    //                                                 PARTICIPANTES
    // ============================================================================================================


    async getAllParticipantes(id_evento){
        return await this.db.getAllAsync(`SELECT * FROM participantes WHERE id_evento = ?`, id_evento)
    }
    async getCantidadParticipantes(id_evento){
        const result= await this.db.getAllAsync(`SELECT COUNT(*) as cantidad FROM participantes WHERE id_evento = ?`, [id_evento]);
        return result[0]?.cantidad||0;
    }

    async getParticipacionesUsuario() {
        const userId = controller.getCurrentUserId(); 
        return await this.db.getAllAsync(
            `SELECT * FROM participantes WHERE id_usuario = ?`,
            [userId]
        )
    }

    async addParticipante(id_evento) {
        const userId = controller.getCurrentUserId(); 
        /* const userId = 1 */
        const result = await this.db.runAsync(`INSERT INTO participantes (id_evento, id_usuario)
            VALUES(?,?)`,
            id_evento, userId
        )
        return {id_evento_participante: result.lastInsertRowId, id_usuario: userId, id_evento: id_evento}
    }

    async deleteParticipante(id_evento) {
        const userId = controller.getCurrentUserId(); 
        /* const userId = 1 */
        await this.db.runAsync(`DELETE FROM participantes WHERE id_evento = ? AND id_usuario = ?`,
            id_evento, userId
        )
        return true
    }



}
export default new DatabaseService();