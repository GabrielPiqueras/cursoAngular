"use strict";
/* Este main servirá para llamar a todas las otras clases.
   Para que esto funcione usaremos systemjs en el index.html
   que detecte cada una de las clases y las junte en este main */
Object.defineProperty(exports, "__esModule", { value: true });
var gato_1 = require("./gato");
var perro_1 = require("./perro");
var gato1 = new gato_1.Gato();
var perro1 = new perro_1.Perro();
