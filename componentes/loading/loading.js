import {LitElement, html, css} from 'https://unpkg.com/lit-element@latest/lit-element.js?module';
import { Paragrafo } from '../paragrafo/paragrafo.js';

export class Loading extends LitElement{

    static get properties(){
        return{
            class: {type: String},
            imagem: {type: String},
            textoLoad: {type: String},
        }
    }

    constructor(){
        super();
        this.corpo = document.querySelector("body");
    }

    static get styles(){
        return css`
            .carregar{
                position: absolute;
                z-index: 1;
                height: 100vh;        
                opacity: 1;
                backdrop-filter: blur(6px);
                background: #726f6fa6 0% 0% no-repeat padding-box;
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                display: none
            }

            .carregar-home{
                margin-top: -5.7rem;
            }

            .carregar-guia{
                margin-top: -5.7rem;
            }

            .carregar-contato{ 
                margin-top: -9rem;
            }

            .carregar-sobreNos{
                margin-top: -9rem;
            }

            .carregar[carregando]{
                display: flex;
            }
        `;  
    }

    firstUpdated(){
        this.load = this.shadowRoot?.querySelector(".carregar");                                         
    }

    render(){
        return html`
            <div class="carregar ${this.class}" ${this.carregar()} imagem=${this.imagem} textoLoad=${this.textoLoad}> 
                <minha-imagem class="loading" url=${this.imagem}></minha-imagem>
                <meu-paragrafo class="load" texto=${this.textoLoad}></meu-paragrafo>
            </div>
        `;
    }

    carregar(){

        setTimeout(() => {
            this.load.setAttribute('carregando', 'carregando');
            this.corpo.style.overflow = 'hidden';
        },);
        
        setTimeout(() => {
            this.load.removeAttribute("carregando");
            this.corpo.style.overflow = 'auto';
        }, 800);

    }
}

customElements.define('meu-loading', Loading);