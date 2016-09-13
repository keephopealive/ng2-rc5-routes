import { Routes, RouterModule } from '@angular/router';
import { AlphaComponent, BetaComponent, GammaComponent, PageNotFoundComponent } from './app.component';

const appRoutes: Routes = [
    { 
        path: 'alpha-component', 
        component: AlphaComponent },
    { 
        path: 'beta-component',
        component: BetaComponent,
        data: {
            title: 'This is the Beta component.'
        }
    },
    { 
        path: 'gamma-component/:id', 
        component: GammaComponent 
    },
    { 
        path: '**', 
        component: PageNotFoundComponent 
    }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
