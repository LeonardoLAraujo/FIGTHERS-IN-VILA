import {LitElement, html, css} from 'https://unpkg.com/lit-element@latest/lit-element.js?module';
import { Hide } from './hide.js';


class App extends LitElement{

    static get properties(){
        return{

        };
    }

    constructor(){
        super();
    }

    render(){
        return html`
            <hide-hide></hide-hide>
            <br>
            <html-inse></html-inse>
        `;
    }
}

customElements.define('my-element', App);