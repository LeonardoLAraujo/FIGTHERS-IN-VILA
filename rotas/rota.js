import { Renderiza } from "./renderiza.js";

export class Rota{

    constructor(){
        this.renderizarRota = new Renderiza();

        this.renderizarRota.renderizarRota();

        window.addEventListener('hashchange', () => {
            this.renderizarRota.renderizarRota();
        });


    }

    // localDaRotaAtual(){
        

    //     this.renderizarRota.renderizarRota();
    // }


}