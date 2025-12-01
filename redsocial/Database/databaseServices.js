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
            CREATE TABLE IF NOT EXISTS usuarios(
                id_usuario INTEGER PRIMARY KEY AUTOINCREMENT,
                email TEXT UNIQUE,
                password TEXT,
                nombre_usuario TEXT,
                telefono TEXT,
                grupo TEXT
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
            `SELECT * FROM usuarios WHERE email = ?;`,
            [email]
        );
        if (result) {
            return result;
        } else {
            throw new Error('Usuario no encontrado');
        }
    }
}
export default new DatabaseService();