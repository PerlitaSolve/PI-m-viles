import * as SQLite from 'expo-sqlite';
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
                grupo TEXT NOT NULL
            );
        `);
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
            CREATE TABLE IF NOT EXISTS publicaciones(
                id_publicacion INTEGER PRIMARY KEY AUTOINCREMENT,
                fecha DATETIME DEFAULT CURRENT_TIMESTAMP,
                cantidadLikes REAL DEFAULT 0,
                id_usuario INTEGER NOT NULL,
                FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario) ON DELETE CASCADE
            );
            CREATE TABLE IF NOT EXISTS comentarios(
                id_comentario INTEGER PRIMARY KEY AUTOINCREMENT,
                contenido TEXT NOT NULL,
                id_publicacion INTEGER NOT NULL,
                id_usuario INTEGER NOT NULL,
                FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario) ON DELETE CASCADE,
                FOREIGN KEY (id_publicacion) REFERENCES publicaciones(id_publicacion) ON DELETE CASCADE,
                imagen TEXT
            );
        `);
    }
    async registrarUsuario(email, password, nombre_usuario, telefono, grupo) {
        await this.db.runAsync(
            `INSERT INTO usuarios (email, password, nombre_usuario, telefono, grupo) VALUES (?,?,?,?,?)`,
            [email, password, nombre_usuario, telefono, grupo]
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


    // ============================================================================================================
    //                                                 EVENTOS
    // ============================================================================================================
    async getAllEventos() {
        return await this.db.getAllAsync(`SELECT * FROM eventos`)
    }
    async getALlEventosUsuario() {
        /* const userId = this.getCurrentUserId();  */
        const userId = 1
        return await this.db.getAllAsync(`SELECT * FROM eventos WHERE id_usuario = ?`, userId)
    }
    // TODO: AGREGAR ID_USUARIO

    async addEvento(nombre, descripcion, ubicacion, fecha, hora, duracion, imagen) {
        /* const userId = this.getCurrentUserId() */
        const userId = 1
        Evento.validarDatos(nombre, descripcion, ubicacion, fecha, hora, duracion, imagen)
        const result = await this.db.runAsync(`INSERT INTO eventos (id_evento, id_usuario, nombre, descripcion, ubicacion, fecha, hora, duracion, imagen)
            VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        userId, nombre, descripcion, ubicacion, fecha, hora, duracion, imagen)
        return { id: result.lastInsertRowId, id_usuario: userId, nombre, descripcion, ubicacion, fecha, hora, duracion, imagen}
    }

    async updateEvento(id_evento, nuevosValores) {
        /* const userId = this.getCurrentUserId();  */
        const userId = 1
        const {nombre, descripcion, ubicacion, fecha, hora, duracion, imagen} = nuevosValores
        Evento.validarDatos(nombre, descripcion, ubicacion, fecha, hora, duracion, imagen)

        await this.db.runAsync(`UPDATE eventos SET
            nombre = ?, descripcion = ?, ubicacion = ?, fecha = ?, hora = ?, duracion = ?, imagen = ?
            WHERE id_evento = ? AND id_usuario = ?`,
            nombre, descripcion, ubicacion, fecha, hora, duracion, imagen, id_evento, userId
        )
        return {id_evento, ...nuevosValores}
    }

    async deleteEvento(id_evento) {
        /* const userId = this.getCurrentUserId();  */
        const userId = 1
        await this.db.runAsync(`DROP FROM eventos WHERE id_evento = ? AND id_usuario = ?`, id_evento, userId)  
        return true      
    }

}
export default new DatabaseService();