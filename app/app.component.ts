import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/Rx';



@Component({
    selector: 'page-not-found',
    template: `
    <h5>Page Not Found</h5>
    `
})
export class PageNotFoundComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}



@Component({
    selector: 'gamma-component',
    template: `
    <h5>I'm the Gamma Component</h5>
    <h5>You passed me the value of: {{ id }}</h5>
    `
})
export class GammaComponent implements OnInit {

    constructor(
        private _router: Router,
        private _route: ActivatedRoute
    ) { }

    ngOnInit() {
        console.log(this._route.snapshot.params['id']);
        var x = this._route.params.subscribe( params => {
            let id = +params['id'];
            // this.serviceName.getThing(id).then( thing => this.thing = thing);
        })   
    }
}


@Component({
    selector: 'beta-component',
    template: `
    <h5>I'm the Beta Component</h5>
    `
})
export class BetaComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}



@Component({
    selector: 'alpha-component',
    template: `
    <h5>I'm the Alpha component</h5>
    <button (click)='onClick()'>From Alpha Navigate to Gamma/12</button>
    `
})
export class AlphaComponent implements OnInit {
    constructor(private _router: Router) { }

    onClick() {
        this._router.navigate(['/gamma-component', 12])
    }

    ngOnInit() { }
}



@Component({
  selector: 'my-app',
  template: `
    <div class='container'>
        <h3>Sample Routing</h3>
        <a routerLink="/alpha-component" routerLinkActive="active">Alpha Component Link</a>
        <a routerLink="/beta-component" routerLinkActive="active">Beta Component Link</a>
        <a routerLink="/gamma-component/7" routerLinkActive="active">Gamma Component Link</a>
        <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent { }
