export interface Aluguel{
    id?: number,
    dataSaida: any,
    dataEntrega: any,
    valor: number,
    dia: number,
    cliente: {
            id:number;
            nome?: String;
            cpf?: String;
            email?:string;
            senha?:string;
            dataN?:any;
    },
    carro: {
        id:number;
        marca?:string;
        placa?:string;
        preco?:any;
        cor?:string;
    },
        
}