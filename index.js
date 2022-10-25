/**
 * Criação do concrete do builder
 */
var ConcreteBuilder = /** @class */ (function () {
    function ConcreteBuilder() {
        this.reset();
    }
    ConcreteBuilder.prototype.reset = function () {
        this.car = new Carro();
    };
    ConcreteBuilder.prototype.carMotor = function () {
        this.car.parts.push('Motor');
    };
    ConcreteBuilder.prototype.carWheels = function () {
        this.car.parts.push('Roda');
    };
    ConcreteBuilder.prototype.carDoors = function () {
        this.car.parts.push('Portas');
    };
    ConcreteBuilder.prototype.carBody = function () {
        this.car.parts.push('Carcaça do Carro');
    };
    ConcreteBuilder.prototype.getCar = function () {
        var result = this.car;
        this.reset();
        return result;
    };
    return ConcreteBuilder;
}());
var Carro = /** @class */ (function () {
    function Carro() {
        this.parts = [];
    }
    Carro.prototype.listParts = function () {
        console.log("Partes do carro: ".concat(this.parts.join(', '), "\n"));
    };
    return Carro;
}());
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.setBuilder = function (builder) {
        this.builder = builder;
    };
    Director.prototype.buildMinimalViableProduct = function () {
        this.builder.carMotor();
        this.builder.carBody();
    };
    Director.prototype.buildFullFeaturedProduct = function () {
        this.builder.carMotor();
        this.builder.carWheels();
        this.builder.carDoors();
    };
    return Director;
}());
function clientCode(director) {
    var builder = new ConcreteBuilder();
    director.setBuilder(builder);
    console.log('Carro base:');
    director.buildMinimalViableProduct();
    builder.getCar().listParts();
    console.log('Carro com todas as peças:');
    director.buildFullFeaturedProduct();
    builder.getCar().listParts();
    // Remember, the Builder pattern can be used without a Director class.
    console.log('Carro Personalizado: ');
    builder.carMotor();
    builder.carDoors();
    builder.getCar().listParts();
}
var director = new Director();
clientCode(director);
