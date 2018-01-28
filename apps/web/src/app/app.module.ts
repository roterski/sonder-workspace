import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { RouterModule, Route } from '@angular/router';
import { partiesRoutes, PartiesModule } from '@sonder-workspace/parties';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { appReducer } from './+state/app.reducer';
import { appInitialState } from './+state/app.init';
import { AppEffects } from './+state/app.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule, routerReducer, RouterStateSerializer } from '@ngrx/router-store';
import { authRoutes, AuthModule } from '@sonder-workspace/auth';
import { AppRouterModule, CustomSerializer } from "@sonder-workspace/router";

const routes: Route[] = [
  { path: "", pathMatch: "full", redirectTo: "parties" },
  { path: "login", children: authRoutes },
  { path: "parties", children: partiesRoutes }
];

@NgModule({
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot(routes, { initialNavigation: "enabled" }),
    AuthModule,
    PartiesModule,
    AppRouterModule,
    StoreModule.forRoot(
      { app: appReducer, router: routerReducer }
    ),
    EffectsModule.forRoot([AppEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot({
      stateKey: "router"
    })
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [
    AppEffects,
    { provide: RouterStateSerializer, useClass: CustomSerializer }
  ]
})
export class AppModule {}
