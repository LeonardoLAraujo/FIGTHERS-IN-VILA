import { Renderiza } from "./renderiza.js";

/***
 * @class
 */
export class Rota{

    /***
     * @constructor
     */
    constructor(){
        this.renderizarRota = new Renderiza();

        this.renderizarRota.renderizarRota();
        
        /***
         * @static
         */
        window.addEventListener('hashchange', () => {
            this.renderizarRota.renderizarRota();
        });
    }

}