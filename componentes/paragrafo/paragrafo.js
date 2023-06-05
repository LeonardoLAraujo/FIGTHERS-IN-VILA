import {LitElement, html, css} from 'https://unpkg.com/lit-element@latest/lit-element.js?module';

export class Paragrafo extends LitElement{

    static properties = {
        texto: {type: String},
        class: {type: String},
    }

    constructor(){
        super();
    }

    static styles = css`
        .corBranca-25{
            color: #fff;
            font-size: 25px;
        }

        .p-download-global{
            font-size: 18px;
            color: #fff;
        }

       .p-guia{
            font-size: 22px;
            color: #fff;
       }
    `;

    render(){
        return html`
            <p class=${this.class} texto=>${this.texto}</p>
        `;
    }
}

customElements.define('meu-paragrafo', Paragrafo);