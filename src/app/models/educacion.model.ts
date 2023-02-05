export class Educacion {
    
    id?:number;
    titulo:string = "";
    institucion:string = "";
    periodo:string = "";


 constructor(titulo:string, institucion:string, periodo:string){

    this.titulo = titulo;
    this.institucion = institucion;
    this.periodo = periodo;
    
 }

    public get Titulo():string {
        return this.titulo;
    }

    public set Titulo(value:string){
        this.titulo = value;
    }

    public get Institucion():string {
        return this.institucion;
            }
        
     public set Institucion(value:string){
                this.institucion = value;
            }


public get Periodo():string {
        return this.periodo;
            }
        
     public set Periodo(value:string){
                this.periodo = value;
            }
}