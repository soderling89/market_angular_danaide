export class Pedido{    
    idusuario : number;
    fecha : Date;
    total : number;

    constructor(idusuario: number, fecha: Date, total: number){        
        this.idusuario = idusuario;
        this.fecha = fecha;
        this.total = total;
    }
}