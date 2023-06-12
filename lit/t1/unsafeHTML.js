import {LitElement, html, css} from 'https://unpkg.com/lit-element@latest/lit-element.js?module';

const markup = '<h3>Some HTML to Render.</h3>';

export class Unse extends LitElement{

    constructor(){
        super();
    }

    render(){
        return html`
            <h3>UnsafeHTML directive example</h3>
            Look out, potentially unsafe HTML ahead:
            ${unsafeHTML(markup)}
        `;
    }
}

customElements.define('html-inse', Unse);