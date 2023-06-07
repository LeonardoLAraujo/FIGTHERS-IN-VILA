import {LitElement, html, css} from 'https://unpkg.com/lit-element@latest/lit-element.js?module';

export class ListaUl extends LitElement{

    static get properties(){
        return{
            class: {type: String},
        }
    }

    constructor(){
        super();       
    }

    static get styles(){
        return css`
            .menu__lista{
                display: flex;
                flex-direction: row;
                list-style: none;
                justify-content: space-around;
                align-items: center;
                width: 40%;
            }   

            .menu__lista:hover{
                color: #106F0e;
            }

            .menu__lista-mobile{
                background-color: rgb(216, 206, 67);
                position: absolute;
                width: 52%;
                margin-top: 3rem;
                padding: 1rem;
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-left: -25%;
                z-index: 10;
                border-radius: 10px;
            }

            .menu__lista-mobile[aparecer]{
                display:none;
            }

            @media (min-width: 900px){
                .menu__lista-mobile{
                    display: none;
                }
            }

            @media (max-width: 900px){
                .menu__lista{
                    display: none;
                }
            }

            h1{
                color: #fff;
            }
        `;
    }

    firstUpdated(){
        this.meuUl = document.querySelector("ul");

       
    }

    render(){
        return html`
            <ul class=${this.class}>
                <slot></slot>
            </ul>
        `;
    }

} 

customElements.define('lista-ul', ListaUl);