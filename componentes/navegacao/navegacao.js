import {LitElement, html, css} from 'https://unpkg.com/lit-element@latest/lit-element.js?module';

/***
 * @class
 */
export class Navegacao extends LitElement{

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
    static get styles(){
        return css ``;
    }

    /***
     * @overload
     * @method
     */
    render(){
        return html`
            <nav>
            
            </nav>
        `;
    }

}