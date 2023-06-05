import {LitElement, html, css} from 'https://unpkg.com/lit-element@latest/lit-element.js?module';

export class Iframe extends LitElement{

    static properties = {
        altura: {type: String},
        largura: {type: String},
        titulo: {type: String},
        url: {type: String},
    }

    constructor(){
        super();
    }

    static styles = css`

    `;

    render(){
        return html`
            <iframe width=${this.largura} height=${this.altura} src=${this.url} title=${this.titulo} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        `;
    }
}

customElements.define("video-yt", Iframe);