import {Usuario} from '../Models/Usuario.js';
import DatabaseService from '../Database/databaseServices.js';
import { Alert } from 'react-native';
// import { controller } from './index.js';
export class LoginController{
    constructor(){
        this.listeners=[];
        this.currentUser=null;
    }
    async initialize(){
        await DatabaseService.initialize();
    }
    async usuarioExiste(email){
        try{
            const usuarioBD= await DatabaseService.obtenerUsuarioPorEmail(email);
            return usuarioBD!= null;
        }catch(error){
            return false;
            // Alert.alert('Usuario no encontrado');
        }
    }
    async registrarUsuario(email, password, nombre_usuario, telefono, grupo){
        try{
            Usuario.ValidarDatos(email, password, nombre_usuario, telefono, grupo);
            // La respuesta de seguridad (nombre de la primera mascota) debe guardarse en MAYÚSCULAS
            const seguridadArg = arguments.length >= 6 ? String(arguments[5]).trim().toUpperCase() : null;
            const nuevoUsuario= await DatabaseService.registrarUsuario(email.trim(), password.trim(), nombre_usuario.trim(), telefono.trim(), grupo.trim(), seguridadArg);
            this.notifyListeners();
            return new Usuario(
                nuevoUsuario.id_usuario,
                nuevoUsuario.email,
                nuevoUsuario.password,
                nuevoUsuario.nombre_usuario,
                nuevoUsuario.telefono,
                nuevoUsuario.grupo,
            )            
        }catch(error){
            console.log(error);
            throw new Error('Error al completar el registro: '+ error.message);

        }
    }
   
    async iniciarSesion(email, password){
        try{
            const usuarioBD= await DatabaseService.obtenerUsuarioPorEmail(email);
            if(usuarioBD.password=== password){
                const usuario= new Usuario(usuarioBD.id_usuario, usuarioBD.email, usuarioBD.password, usuarioBD.nombre_usuario, usuarioBD.telefono, usuarioBD.grupo);
                this.currentUser= usuario;
                this.notifyListeners(`¡Bienvenido de new, ${usuario.nombre_usuario}!`);
                return usuario;
            }else{
                throw new Error('Contraseña incorrecta');
            }
        }catch(error){
            throw new Error(error.message);
        }
    }
    async recuperarContrasena(email, nuevaPassword, respuestaSeguridad){
        try{
            if(!email || !nuevaPassword || !respuestaSeguridad) throw new Error('Faltan datos para recuperar la contraseña');
            const respuesta = String(respuestaSeguridad).trim().toUpperCase();
            const usuarioActualizado = await DatabaseService.recuperarContrasena(email.trim(), respuesta, nuevaPassword.trim());
            return usuarioActualizado;
        }catch(error){
            throw new Error(error.message);
        }
    }
    addListener(callback){
        this.listeners.push(callback);
    }
    removeListener(callback){
        this.listeners= this.listeners.filter(cb=> cb!== callback);
    }
    notifyListeners(mensaje){
        this.listeners.forEach(callback=>callback(mensaje));
    }
    getCurrentUserId(){
        return this.currentUser? this.currentUser.id_usuario: null;
    }
    getCurrentNombre(){
        return this.currentUser? this.currentUser.nombre_usuario: null;
    }
    getCurrentUser(){
        return this.currentUser?this.currentUser: null;
    }
    
}
export const loginController = new LoginController();