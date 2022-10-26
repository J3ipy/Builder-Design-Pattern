class Vehicle {
    Nome: string;
    Modelo: string;
    Ano: number;
    Placa: string;


    constructor(Nome: string, Modelo: string, Ano: number, Placa: string){
        this.Nome = Nome;
        this.Modelo = Modelo;
        this.Ano = Ano;
        this.Placa = Placa;
    }

    car(){
        console.log(`Nome: ${this.Nome}`);
        console.log(`Modelo: ${this.Modelo}`);
        console.log(`Ano: ${this.Ano}`);
        console.log(`Placa: ${this.Placa}`);
    }
}
console.log("O cliente aprovado para a compra do novo carro!! \n");
let wolkswagen: Vehicle = new Vehicle('Voyage','Wolkswagen',2022, 'GG1-22O');
var audi = new Vehicle('A3', 'Audi', 2022, 'JK0-22O');
wolkswagen.car();
console.log('\n');
audi.car();