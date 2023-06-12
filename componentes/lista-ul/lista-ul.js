import {LitElement, html, css} from 'https://unpkg.com/lit-element@latest/lit-element.js?module';

/***
 * @class
 */
export class ListaUl extends LitElement{

    /***
     * @static
     * @overload
     * @method
     */
    static get properties(){
        return{
            class: {type: String},
            aparecer: {type: String},
        }
    }

    /***
     * @constructor
     */
    constructor(){
        super();       
        this.texto = 'teszte';
    }

    /***
     * @static
     * @overload
     * @method
     */
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

            ul[aparecer]{
                display: none;
            }

        `;
    }

    /***
     * @method
     */
    firstUpdated(){
        this.meuUl = this.shadowRoot?.querySelector("ul");

        this.aparecer = "false";

        if(this.aparecer === "false"){
            this.meuUl.removeAttribute("aparecer");
        }else if(this.aparecer === "true"){
            this.meuUl.setAttribute("aparecer", "aparecer");
            console.log("aparecer");
        }
    }

    /***
     * @overload
     * @method
     */
    render(){
        return html`
            <ul class=${this.class} aparecer=${this.aparecer}>
                <meu-titulo texto="KnnoiNION"></meu-titulo>
            </ul>
        `;
    }

} 

customElements.define('lista-ul', ListaUl);