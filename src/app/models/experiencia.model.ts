export class Experiencia {
    
    id?:number;
    puesto:string = "";
    descripcion:string = "";
    empresa:string = "";


 constructor(puesto:string, descripcion:string, empresa:string){

    this.puesto = puesto;
    this.descripcion = descripcion;
    this.empresa = empresa;
    
 }

    public get Puesto():string {
        return this.puesto;
    }

    public set Puesto(value:string){
        this.puesto = value;
    }

    public get Descripcion():string {
        return this.descripcion;
            }
        
     public set Descripcion(value:string){
                this.descripcion = value;
            }


public get Empresa():string {
        return this.empresa;
            }
        
     public set Empresa(value:string){
                this.empresa = value;
            }
}