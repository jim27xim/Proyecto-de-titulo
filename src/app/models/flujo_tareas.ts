export class Flujo_De_Tareas {
    _id?: number;
    nombre:string;
    descripcion:string;
    //Asignar tarea?

    constructor(nombre:string,descripcion:string){
        this.nombre = nombre;
        this.descripcion = descripcion;
    }
}