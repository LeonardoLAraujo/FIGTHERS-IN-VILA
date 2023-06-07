import {LitElement, html, css} from 'https://unpkg.com/lit-element@latest/lit-element.js?module';

export class MyPage extends LitElement{

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

    constructor(){
        super();
        this.value = 1;
    }

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

    render(){
        return html`
            <span>Active: ${this.active}</span>
            <button @click="${() => (this.active = !this.active)}">Toggle active</button>

            <p>${this.value}</p>
            <button @click="${this.getNewVal}">Get new value</button>
        `;
    }

    getNewVal(){
        this.value = Math.floor(Math.random() * 100);
    }
}

customElements.define('my-element', MyPage);