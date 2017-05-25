import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'about',
    templateUrl: 'app/about/about.component.html'
    //template: `
    //    <h1>About Page!</h1>
    //    <p>This is the about page.</p>
    //`
})

export class AboutComponent implements OnInit {
    constructor() {
        console.log('AboutComponent -> constructor');
    }

    ngOnInit() {
        console.log('AboutComponent -> ngOnInit');
    }
}