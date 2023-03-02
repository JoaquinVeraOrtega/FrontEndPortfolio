export class Persona {

    id?: number;
    nombre: string = "";
    acercaDe: string = "";
    titulo: string = "";

    constructor(nombre: string, acercaDe: string, titulo: string) {

        this.nombre = nombre;
        this.acercaDe = acercaDe;
        this.titulo = titulo;

    }

    public get Nombre(): string {
        return this.nombre;
    }

    public set Nombre(value: string) {
        this.nombre = value;
    }

    public get AcercaDe(): string {
        return this.acercaDe;
    }

    public set AcercaDe(value: string) {
        this.acercaDe = value;
    }

    public get Titulo(): string {
        return this.titulo;
    }

    public set Titulo(value: string) {
        this.titulo = value;
    }

}