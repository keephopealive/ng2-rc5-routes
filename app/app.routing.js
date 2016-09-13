"use strict";
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
var appRoutes = [
    {
        path: 'alpha-component',
        component: app_component_1.AlphaComponent },
    {
        path: 'beta-component',
        component: app_component_1.BetaComponent,
        data: {
            title: 'This is the Beta component.'
        }
    },
    {
        path: 'gamma-component/:id',
        component: app_component_1.GammaComponent
    },
    {
        path: '**',
        component: app_component_1.PageNotFoundComponent
    }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map