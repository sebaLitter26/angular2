System.register(['angular2/core', './autor.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, autor_service_1;
    var AutoresComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (autor_service_1_1) {
                autor_service_1 = autor_service_1_1;
            }],
        execute: function() {
            AutoresComponent = (function () {
                function AutoresComponent(autorService) {
                    this.title = "El titulo de la pagina de Autores";
                    this.autores = autorService.getAutores();
                }
                ;
                AutoresComponent = __decorate([
                    core_1.Component(//function 
                    {
                        selector: 'autores',
                        template: " <h2>Autores</h2>     \n                {{title}}\n                <ul>\n                    <li *ngFor=\"#autor of autores\">\n                    {{ autor }}\n                    </li>\n                </ul>\n                ",
                        providers: [autor_service_1.AutorService]
                    }), 
                    __metadata('design:paramtypes', [autor_service_1.AutorService])
                ], AutoresComponent);
                return AutoresComponent;
            }());
            exports_1("AutoresComponent", AutoresComponent);
        }
    }
});
//# sourceMappingURL=autores.component.js.map