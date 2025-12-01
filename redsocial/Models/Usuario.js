export class Usuario{
    constructor(id_usuario, email, password, nombre_usuario, telefono, grupo){
        this.id_usuario= id_usuario;
        this.email= email;
        this.password=password;
        this.nombre_usuario=nombre_usuario;
        this.telefono=telefono;
        this.grupo=grupo;
    } //email, password, nombre_usuario, telefono, grupo
    static ValidarDatos(email, password, nombre_usuario, telefono, grupo){
        //let valido= false;
        if(email.trim().length==0){
            throw new Error('Favor de escribir el correo electrónico');
        }else if(password.trim().length===0){
            throw new Error('Llena el campo para la contraseña');
        }else if(nombre_usuario.trim().length===0){
            throw new Error('El nombre no puede estar vacio');
        }else if(nombre_usuario.trim().length>50){
            throw new Error('El nombre no puede ser mas largo que 50 caracteres');
        }else if(telefono.trim().length===0){
            throw new Error('Introduce tu número telefónico');
        }else if(grupo.trim().length==0){
            throw new Error('Escribe tu grupo');
        }
        return true;
    }
}
// CREATE TABLE IF NOT EXISTS usarios(
//                 id_usuario INTEGER PRIMARY KEY AUTOINCREMENT,
//                 email TEXT UNIQUE,
//                 password TEXT,
//                 nombre_usuario TEXT,
//                 telefono TEXT,
//                 grupo TEXT
//             );