import { Component, OnInit } from '@angular/core';
import { StringValidator } from "../shared/StringValidator";
import { ZipCodeValidator } from "../shared/ZipCodeValidator";
import { LettersOnlyValidator } from "../shared/LettersOnlyValidator";

@Component({
    selector: 'home',
    templateUrl: 'app/home/home.component.html'
    //template: `
    //    <h1>Welcome Home!</h1>
    //    <p>How are you doing?</p>
    //`
})

export class HomeComponent implements OnInit {

    // These are all properties
    isDone: boolean = false;
    myNumber: number = 13;
    myFirstName: string = "Tony";
    myLastName: string = 'V';
    mySentence = `Hi, my name is ${this.myFirstName} ${this.myLastName}.  What is your name?`;
    myArrayOfStrings: string[] = ["a", 'b', "c"]
    myTuple: [string, number] = ["Hi", 42];

    myGreeting = new Greeter("Tony");

    
    constructor() {
        console.log('HomeComponent -> constructor');

        // this had to be declared in a func as opposed to outside of it.
        enum Color { Red, Green, Blue };
        let c1: Color = Color.Red;
        console.log('c1 = ' + c1);
    }

    ngOnInit() {
        console.log('HomeComponent -> ngOnInit');

        // Could set isDone inside by referencing via the this keyword
        //this.isDone = true;

        enum AnotherColor { Red, Green, Blue };
        let c2: AnotherColor = 2;
        console.log('c2 = ' + c2);

        console.log(greeter.greet());

        type Shape = Square | Rectangle | Circle | Triangle;

        function assertNever(x: never): never {
            throw new Error("Unexpected object: " + x);
        }

        function area(s: Shape) {
            switch (s.kind) {
                case "square": return s.size * s.size;
                case "rectangle": return s.height * s.width;
                case "circle": return Math.PI * s.radius ** 2;
                case "triangle": return 0;
                default: return assertNever(s); // error here if there are missing cases
            }
        }

        // Some samples to try
        let strings = ["Hello", "98052", "101"];

        // Validators to use
        let validators: { [s: string]: StringValidator; } = {};
        validators["ZIP code"] = new ZipCodeValidator();
        validators["Letters only"] = new LettersOnlyValidator();

        // Show whether each string passed each validator
        strings.forEach(s => {
            for (let name in validators) {
                console.log(`"${s}" - ${validators[name].isAcceptable(s) ? "matches" : "does not match"} ${name}`);
            }
        });

    }
}

interface Square {
    kind: "square";
    size: number;
}
interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}
interface Circle {
    kind: "circle";
    radius: number;
}
interface Triangle {
    kind: "triangle";
}

class Greeter {
    private greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");