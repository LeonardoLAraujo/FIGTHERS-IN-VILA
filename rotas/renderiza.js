const hasgDaUrl = {
    guia: '#guia',
    download: '#download',
    contato: '#contato',
    sobreNos: '#sobreNos',
}

export class Renderiza{
    
    constructor(){
       this.main = document.querySelector("#principal");
       this.rodape = document.querySelector("#rodape");
    }

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
                this.rodape.innerHTML = '<meu-rodape></meu-rodape>';
                break;
            case hasgDaUrl['sobreNos']:
                this.main.innerHTML = '<meu-sobre></meu-sobre>';
                this.rodape.innerHTML = '<meu-rodape></meu-rodape>';
                break;
            default: 
                this.main.innerHTML = '<home-home></home-home>';
                this.rodape.innerHTML = '<meu-rodape></meu-rodape>';
        }
    }

}