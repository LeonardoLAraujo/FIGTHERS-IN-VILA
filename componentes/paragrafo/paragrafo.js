import {LitElement, html, css} from 'https://unpkg.com/lit-element@latest/lit-element.js?module';

/***
 * @class
 */
export class Paragrafo extends LitElement{

    /***
     * @static
     * @overload
     * @method
     */
    static properties = {
        texto: {type: String},
        class: {type: String},
    }

    /***
     * @constructor
     */
    constructor(){
        super();
    }

    /***
     * @static
     * @overload
     * @method
     */
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

       .load{
        color: #fff;
        font-size: 22px;
       }

       .sobreNos{
            font-size: 21px;
            text-align: justify;
       }
    `;
    
    /***
     * @method
     * @overload
     */
    render(){   
        return html`
            <p class=${this.class} texto=>${this.texto}</p>
        `;
    }
}

customElements.define('meu-paragrafo', Paragrafo);