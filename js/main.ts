/* Este main servirá para llamar a todas las otras clases.
   Para que esto funcione usaremos systemjs en el index.html
   que detecte cada una de las clases y las junte en este main */

   import { Gato } from './gato'
   import { Perro } from './perro'

   let gato1 = new Gato();
   let perro1 = new Perro();