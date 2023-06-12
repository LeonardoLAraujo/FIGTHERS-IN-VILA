import {LitElement, html, css} from 'https://unpkg.com/lit-element@latest/lit-element.js?module';

/***
 * @class
 */
export class Botao extends LitElement{

    /***
     * @method
     * @overload
     * @static
     */
    static get properties(){
        return{
            texto: {type: String},
            tipoDeEnvio: {type: String},
        }
    }

    /***
     * @constructor
     */
    constructor(){
        super();
    }

    /***
     * @method
     * @static
     * @overload
     */
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

    /***
     * @method
     * @overload
     */
    render(){
        return html `
           <button @click="${this.baixarJogo}" class="botao" type=${this.tipoDeEnvio} texto=>${this.texto}</button>
           <slot></slot>
        `;
    }

    /***
     * @method
     */
    baixarJogo(){
        window.open('https://br.cfpatch.z8games.com/download/Crossfire_SA.exe')
    }
}

customElements.define('meu-botao', Botao);

