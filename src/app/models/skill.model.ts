export class Skill {

    id?: number;
    nombre: string = "";
    porcentaje: number;

    constructor(nombre: string, porcentaje: number) {

        this.nombre = nombre;
        this.porcentaje = porcentaje;

    }

    public get Nombre(): string {
        return this.nombre;
    }

    public set Nombre(value: string) {
        this.nombre = value;
    }

    public get Porcentaje(): number {
        return this.porcentaje;
    }

    public set Porcentaje(value: number) {
        this.porcentaje = value;
    }

}