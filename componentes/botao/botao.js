import {LitElement, html, css} from 'https://unpkg.com/lit-element@latest/lit-element.js?module';

export class Botao extends LitElement{

    static get properties(){
        return{
            texto: {type: String},
            tipoDeEnvio: {type: String},
        }
    }

    constructor(){
        super();
    }

    static get styles(){
        return css`
            @font-face {
                font-family: HappyChaves;
                src: url("./fonte/Happy\ Sans.ttf");
            }

            button{
                font-family: HappyChaves;
            }

            .botao{
                display: block;
                font-size: 20px;
                cursor: pointer;
                font-family: 
                position: relative;
                background-color: #F9EAC3;
                color: #106F0e;
                border: none;
                padding: 1rem;
                border-radius: 10px;
            }
            
            .botao:hover{
                background-color: #e5c97e;
            }
        `;
    }

    render(){
        return html `
           <button @click="${this.clicou}" class="botao" type=${this.tipoDeEnvio} texto=>${this.texto}</button>
        `;
    }

    clicou(){
        console.log("Clicou no Botão!");
    }
}

customElements.define('meu-botao', Botao);

