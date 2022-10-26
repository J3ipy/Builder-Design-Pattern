var Vehicle = /** @class */ (function () {
    function Vehicle(Nome,Modelo,Ano,Placa) {
        this.Nome = Nome;
        this.Modelo = Modelo;
        this.Ano = Ano;
        this.Placa = Placa;
    }
    Vehicle.prototype.car = function () {
        console.log("Nome: ".concat(this.Nome));
        console.log("Modelo: ".concat(this.Modelo));
        console.log("Ano: ".concat(this.Ano));
        console.log("Placa: ".concat(this.Placa));
    };
    return Vehicle;
}());
console.log("O cliente aprovado para a compra do novo carro!! \n");
var wolkswagen = new Vehicle('Voyage', 'Wolkswagen', 2022, 'GG1-22O');
var audi = new Vehicle('A3', 'Audi', 2022, 'JK0-22O');
wolkswagen.car();
console.log('\n')
audi.car();
