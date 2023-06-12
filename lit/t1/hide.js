import {LitElement, html, css} from 'https://unpkg.com/lit-element@latest/lit-element.js?module';

export class Hide extends LitElement{

    static get properties(){
        return{
            greeting: {},
            todos: {type: Array},
            show: {type: Boolean},
        };
    }

    constructor(){
        super();
        this.greeting = `Hiya, let's get some stuff done...`;
        this.todos = ['sleep!', 'eat', 'work', 'exercise'];
        this.show = false;
    }

    render(){
        return html`
            <p>
                ${this.greeting}
                <button @click="${() => (this.show = !this.show)}">Todos</button>
            </p>
            ${
                this.show ? html`
                    <ul>${this.todos.map((i) => html`<li>${i}</li>`)}</ul>
                ` : ''
            }
        `;
    }
}

customElements.define('hide-hide', Hide);