import {LitElement, html, css} from 'https://unpkg.com/lit-element@latest/lit-element.js?module';

export class Faq extends LitElement{

    static properties = {
        titulo: {type: String},
        conteudo: {type: String},
        class: {type: String},
    }

    constructor(){
        super();
    }

    static styles = css `
        .faq-container{
            width: 90%;
            border: 2px solid #fff;
            margin: 1rem;
            border-radius: 10px;
            padding: 0.2rem;
            cursor: pointer;
        }

        details{
            color: #fff;
            font-size: 35px;
            text-align: left;
            margin-left: 1rem;
            margin-top: 0.4rem;
        }
        
        details[open] summary{
            border-bottom: 1px solid #fff;
        }

   
    `;

    render(){
        return html `
        <div class="faq-container">
            <details>
                <summary titulo>${this.titulo}</summary>
                <div>
                    <p conteudo=>${this.conteudo}</p>
                </div>
            </details>
        </div>
        `;
    }

}

customElements.define('meu-faq', Faq);