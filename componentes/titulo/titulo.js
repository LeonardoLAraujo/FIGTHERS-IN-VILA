import {LitElement, html, css} from 'https://unpkg.com/lit-element@latest/lit-element.js?module';

export class Titulo extends LitElement{

    static get properties(){
        return{
            texto: {type: String},
            class: {type: String},
        }
    }

    constructor(){
        super();
    }

    static get styles(){
        return css`
            h1{
                position: relative;
                color: #fff;
            }

            .cor-branca{
                color: #fff;
            }

            .centralizar{   
                text-align: center;
                color: #fff;
            }
            
            .aumentar-fonte{
                font-size: 80px;
                color: #fff;
            }
            
            .titulo-principal{
                margin: 0px;
                font-size: 40px;
                color: #106F0e;
                margin-top: 26rem;
                background-color: #F9EAC3;
                padding: 1rem;
            }

            .h1__home{
                margin: 0;
                font-size: 40px;
            }
        `;
    }

    render(){
        return html `
            <h1 class=${this.class} texto=>${this.texto}</h1>
        `;
    }
}

customElements.define('meu-titulo', Titulo);

