import {LitElement, html, css} from 'https://unpkg.com/lit-element@latest/lit-element.js?module';
import { Titulo } from '../../componentes/titulo/titulo.js';

export class Contato extends LitElement{
    constructor(){
        super();
    }

    static get styles(){
        return css`
            section{
                display: flex;
                justify-content: space-evenly;
                height: 32vh;
                margin-top: 4rem;
                flex-wrap: wrap;
            }
        `;
    }

    render(){
        return html `
            <meu-titulo class="centralizar aumentar-fonte" texto="Contato"></meu-titulo>

            <section>
                <div>
                    <minha-imagem class="img-contato" titulo="gitHub" url="https://cdn-icons-png.flaticon.com/512/25/25231.png" @click="${() => this.irParaLink('https://github.com/LeonardoLAraujo')}"></minha-imagem>
                    <meu-titulo class="centralizar" texto="GitHub"></meu-titulo>
                </div>
                <div>
                    <minha-imagem class="img-contato" titulo="instagram" url="https://cdn-icons-png.flaticon.com/512/174/174855.png" @click="${() => this.irParaLink('www.google.com.br')}"></minha-imagem>
                    <meu-titulo class="centralizar" texto="Instagram"></meu-titulo>
                </div>
                <div>
                    <minha-imagem class="img-contato" titulo="gmail" url="https://cdn-icons-png.flaticon.com/512/281/281769.png" @click="${() => this.irParaLink('https://lit.dev/docs/')}"></minha-imagem>
                    <meu-titulo class="centralizar" texto="Gmail"></meu-titulo>
                </div>
                
                
                
            </section>

        `;
    }

    irParaLink(link){
        console.log("yfe");
        window.open(link , "_blank");
    }
}

customElements.define('meu-contato', Contato);