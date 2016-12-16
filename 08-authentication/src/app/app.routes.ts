import { RouterModule, Routes } from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

import {SignupComponent} from "./unprotected/signup.component";
import {SigninComponent} from "./unprotected/signin.component";
import {ProtectedComponent} from "./protected/protected.component";

const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/signup', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'protected', component: ProtectedComponent }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
