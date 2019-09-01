"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const auth_service_1 = require("./auth.service");
let LoginComponent = class LoginComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.message = 'Vous êtes déconnecté.';
    }
    // Informe l'utilisateur sur son authentfication.
    setMessage() {
        this.message = this.authService.isLoggedIn ?
            'Vous êtes connecté.' : 'Identifiant ou mot de passe incorrect.';
    }
    // Connecte l'utilisateur auprès du Guard
    login() {
        this.message = 'Tentative de connexion en cours ...';
        this.authService.login(this.name, this.password).subscribe(() => {
            this.setMessage();
            if (this.authService.isLoggedIn) {
                // Récupère l'URL de redirection depuis le service d'authentification
                // Si aucune redirection n'a été définis, redirige l'utilisateur vers la liste des pokemons.
                let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/pokemon/all';
                // Redirige l'utilisateur
                this.router.navigate([redirect]);
            }
            else {
                this.password = '';
            }
        });
    }
    // Déconnecte l'utilisateur
    logout() {
        this.authService.logout();
        this.setMessage();
    }
};
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login',
        template: `
    <div class='row'>
        <div class="col s12 m4 offset-m4">
            <div class="card hoverable">
                <div class="card-content center">
                    <span class="card-title">Page de connexion</span>
                    <p><em>{{message}}</em></p>
                </div>
                <form #loginForm="ngForm">
                    <div>
                        <label for="name">Name</label>
                        <input type="text" id="name" [(ngModel)]="name" name="name" required>
                    </div>
                    <div>
                        <label for="password">Password</label>
                        <input type="password" id="password" [(ngModel)]="password" name="password" required>
                    </div>
                </form>
                <div class="card-action center">
                    <a (click)="login()" 
                        class="waves-effect waves-light btn"  *ngIf="!authService.isLoggedIn">
                        Se connecter
                    </a>
                    <a (click)="logout()" *ngIf="authService.isLoggedIn">
                        Se déconnecter
                    </a>
                </div>
            </div>
        </div>
    </div>
  `
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map