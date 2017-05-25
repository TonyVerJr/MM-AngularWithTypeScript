import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
    //template: `
    //    <div class="container">
    //        <h1>{{title}}</h1>
    //        <h2>Made with ASP.NET Core and Visual Studio 2017</h2>

    //        <nav>
    //            <a routerLink="home" routerLinkActive="active">Home</a>
    //            <a routerLink="about" routerLinkActive="active">About</a>
    //        </nav>

    //        <router-outlet></router-outlet>
    //    </div>
    //`
})

export class AppComponent implements OnInit {
    title = "Angular 2 & TypeScript web application";
    
    constructor() {
        console.log('AppComponent -> constructor');
    }

    ngOnInit() {
        console.log('AppComponent -> ngOnInit');
    }
}