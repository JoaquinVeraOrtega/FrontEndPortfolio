export class Contacto {

    id?: number;
    plataforma: string = "";
    link: string = "";


    constructor(plataforma: string, link: string) {

        this.plataforma = plataforma;
        this.link = link;

    }

    public get Plataforma(): string {
        return this.plataforma;
    }

    public set Plataforma(value: string) {
        this.plataforma = value;
    }



    public get Link(): string {
        return this.link;
    }

    public set Link(value: string) {
        this.link = value;
    }
}