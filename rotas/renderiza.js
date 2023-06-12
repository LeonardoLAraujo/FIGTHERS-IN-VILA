/**
* @object
* @static
*/
const hasgDaUrl = {
    guia: '#guia',
    download: '#download',
    contato: '#contato',
    sobreNos: '#sobreNos',
}

/***
 * @class
 */
export class Renderiza{
    
    /***
     * @constructor
     */
    constructor(){
       this.main = document.querySelector("#principal");
       this.rodape = document.querySelector("#rodape");
    }

    /**
     * @method
     */
    renderizarRota(){
        switch(window.location.hash){
            case hasgDaUrl['guia']:
                this.main.innerHTML = '<guia-guia></guia-guia>';
                this.rodape.innerHTML = '<meu-rodape></meu-rodape>';
                break;
            case hasgDaUrl['download']:
                this.main.innerHTML = '<meu-download></meu-download>';
                this.rodape.innerHTML = '<meu-rodape></meu-rodape>';
                break;
            case hasgDaUrl['contato']:
                this.main.innerHTML = '<meu-contato></meu-contato>';
                this.rodape.innerHTML = '<meu-rodape class="rodape-contato"></meu-rodape>';
                break;
            case hasgDaUrl['sobreNos']:
                this.main.innerHTML = '<meu-sobre></meu-sobre>';
                this.rodape.innerHTML = '<meu-rodape class="rodape-sobre"></meu-rodape>';
                break;
            default: 
                this.main.innerHTML = '<home-home></home-home>';
                this.rodape.innerHTML = '<meu-rodape></meu-rodape>';
        }
    }

}