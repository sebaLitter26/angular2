System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AutorService;
    return {
        setters:[],
        execute: function() {
            AutorService = (function () {
                function AutorService() {
                }
                AutorService.prototype.getAutores = function () {
                    return ["Autor1", "Autor2", "Autor3"];
                };
                return AutorService;
            }());
            exports_1("AutorService", AutorService);
        }
    }
});
//# sourceMappingURL=autor.service.js.map