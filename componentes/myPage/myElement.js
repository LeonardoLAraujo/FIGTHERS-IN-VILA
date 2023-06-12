import {LitElement, html, css} from 'https://unpkg.com/lit-element@latest/lit-element.js?module';

/***
 * @class
 */
export class MyPage extends LitElement{

    /***
     * @static
     * @overload
     * @method
     */
    static get properties(){
        return{
            active: {type: Boolean, reflect: true},
        
            value: {
                hasChanged(newVal, oldVal){
                    const hasChanged = newVal % 2 === 1;
                    console.log(`${newVal}, ${oldVal}, ${hasChanged}`);
                    return hasChanged;
                },
            }
        };
    }

    /***
     * @constructor
     */
    constructor(){
        super();
        this.value = 1;
    }

    /***
     * @static
     * @overload
     * @method
     */
    static get styles(){
        return css`
            :host{
                display: inline-block;
            }

            :host([active]){
                border: 1px solid red;
            }
        `;
    }

    /***
     * @overload
     * @method
     */
    render(){
        return html`
            <span>Active: ${this.active}</span>
            <button @click="${() => (this.active = !this.active)}">Toggle active</button>

            <p>${this.value}</p>
            <button @click="${this.getNewVal}">Get new value</button>
        `;
    }

    /***
     * @method
     */
    getNewVal(){
        this.value = Math.floor(Math.random() * 100);
    }
}

customElements.define('my-element', MyPage);