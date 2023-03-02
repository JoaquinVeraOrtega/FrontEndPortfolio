export class Proyecto {

    id?: number;
    nombre: string = "";
    cliente: string = "";
    link: string = "";

    constructor(nombre: string, cliente: string, link: string) {

        this.nombre = nombre;
        this.cliente = cliente;
        this.link = link;

    }

    public get Nombre(): string {
        return this.nombre;
    }

    public set Nombre(value: string) {
        this.nombre = value;
    }

    public get Cliente(): string {
        return this.cliente;
    }

    public set Cliente(value: string) {
        this.cliente = value;
    }

    public get Link(): string {
        return this.link;
    }

    public set Link(value: string) {
        this.link = value;
    }

}