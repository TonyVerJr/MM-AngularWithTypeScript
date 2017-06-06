"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const ZipCodeValidator_1 = require("../shared/ZipCodeValidator");
const LettersOnlyValidator_1 = require("../shared/LettersOnlyValidator");
let HomeComponent = class HomeComponent {
    constructor() {
        this.isDone = false;
        this.myNumber = 13;
        this.myFirstName = "Tony";
        this.myLastName = 'V';
        this.mySentence = `Hi, my name is ${this.myFirstName} ${this.myLastName}.  What is your name?`;
        this.myArrayOfStrings = ["a", 'b', "c"];
        this.myTuple = ["Hi", 42];
        this.myGreeting = new Greeter("Tony");
        console.log('HomeComponent -> constructor');
        var Color;
        (function (Color) {
            Color[Color["Red"] = 0] = "Red";
            Color[Color["Green"] = 1] = "Green";
            Color[Color["Blue"] = 2] = "Blue";
        })(Color || (Color = {}));
        ;
        let c1 = Color.Red;
        console.log('c1 = ' + c1);
        function classDecorator(constructor) {
            return class extends constructor {
                constructor() {
                    super(...arguments);
                    this.newProperty = "new property";
                    this.hello = "override";
                }
            };
        }
        let Greeter2 = class Greeter2 {
            constructor(m) {
                this.property = "property";
                this.hello = m;
            }
        };
        Greeter2 = __decorate([
            classDecorator,
            __metadata("design:paramtypes", [String])
        ], Greeter2);
        console.log(new Greeter2("world"));
    }
    ngOnInit() {
        console.log('HomeComponent -> ngOnInit');
        var AnotherColor;
        (function (AnotherColor) {
            AnotherColor[AnotherColor["Red"] = 0] = "Red";
            AnotherColor[AnotherColor["Green"] = 1] = "Green";
            AnotherColor[AnotherColor["Blue"] = 2] = "Blue";
        })(AnotherColor || (AnotherColor = {}));
        ;
        let c2 = 2;
        console.log('c2 = ' + c2);
        console.log(greeter.greet());
        function assertNever(x) {
            throw new Error("Unexpected object: " + x);
        }
        function area(s) {
            switch (s.kind) {
                case "square": return s.size * s.size;
                case "rectangle": return s.height * s.width;
                case "circle": return Math.PI * Math.pow(s.radius, 2);
                case "triangle": return 0;
                default: return assertNever(s);
            }
        }
        let strings = ["Hello", "98052", "101"];
        let validators = {};
        validators["ZIP code"] = new ZipCodeValidator_1.ZipCodeValidator();
        validators["Letters only"] = new LettersOnlyValidator_1.LettersOnlyValidator();
        strings.forEach(s => {
            for (let name in validators) {
                console.log(`"${s}" - ${validators[name].isAcceptable(s) ? "matches" : "does not match"} ${name}`);
            }
        });
    }
};
HomeComponent = __decorate([
    core_1.Component({
        selector: 'home',
        templateUrl: 'app/home/home.component.html'
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);
exports.HomeComponent = HomeComponent;
class Greeter {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
let greeter = new Greeter("world");
//# sourceMappingURL=home.component.js.map