import {LitElement, html, css} from 'https://unpkg.com/lit-element@latest/lit-element.js?module';
import { ListaLi } from '../componentes/lista-li/lista-li.js';
import { Imagem } from '../componentes/imagem/imagem.js';

export class Rodape extends LitElement{
    
    static get properties(){
        return{
            class: {type: String},
        }
    }

    constructor(){
        super();
    }

    static styles = css `
        article{
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
            background-color: #161616;
            height: 100%;
            align-items: center;
            
        }

        .rodape-contato{
            height: 37vh;
        }

        .rodape-sobre{
            height: 39vh;
        }

        p{
            color: #fff;
            font-size: 25px;
            padding: 1rem;
        }
    `;

    render(){
        return html`
            <article class=${this.class}>
                <minha-imagem class="rodape-logo" url="../imagem/logo.webp"></minha-imagem>
                <div>
                <p>
                    IVORTEX © 2023 Ivortex. Todos direitos reservados. Todas as outras marcas 
                    comerciais são propriedades dos respectivos proprietários.
                </p>
                </div>
            </article>
        `;
    }
}

customElements.define('meu-rodape', Rodape);