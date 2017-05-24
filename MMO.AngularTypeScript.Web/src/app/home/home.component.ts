import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home',
    //templateUrl: './home.component.html'
    template: `
        <h1>Welcome Home!</h1>
        <p>How are you doing?</p>
    `
})

export class HomeComponent implements OnInit {
    constructor() {
        console.log('HomeComponent -> constructor');
    }

    ngOnInit() {
        console.log('HomeComponent -> ngOnInit');
    }
}