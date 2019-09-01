"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const Observable_1 = require("rxjs/Observable");
require("rxjs/Rx");
// import { of } from 'rxjs';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/delay';
let AuthService = class AuthService {
    // import { of } from 'rxjs';
    // import 'rxjs/add/operator/do';
    // import 'rxjs/add/operator/delay';
    constructor() {
        this.isLoggedIn = false; // L'utilisateur est-il connecté ?
    }
    // Une méthode de connexion
    login(name, password) {
        // Faites votre appel à un service d'authentification...
        let isLoggedIn = (name === 'admin' && password === 'admin');
        return Observable_1.Observable.of(true).delay(1000).do(val => this.isLoggedIn = isLoggedIn);
    }
    // Une méthode de déconnexion
    logout() {
        this.isLoggedIn = false;
    }
};
AuthService = __decorate([
    core_1.Injectable()
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map