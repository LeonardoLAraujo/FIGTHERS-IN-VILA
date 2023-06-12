import {LitElement, html, css} from 'https://unpkg.com/lit-element@latest/lit-element.js?module';
import { ListaLi } from '../componentes/lista-li/lista-li.js';
import { Imagem } from '../componentes/imagem/imagem.js';
import { Icone } from '../../componentes/icone/icone.js';

export class Menu extends LitElement{

    static get properties(){
        return{
            aparecer: {type: Boolean, reflect: true},
            desaparecer: {type: Boolean, reflect: true},
        }
    }

    constructor(){
        super();
        this.icone = new Icone();
        this.aparecer = false;
        this.corpo = document.querySelector("body");
    }

    static styles = css `
        .cabecalho{
            width: 100%;
        }

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
            margin-top: 20rem;
            padding: 1rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-left: 41%;
            z-index: 10;
            border-radius: 10px;
        }

        #fade{
            position: absolute;
            z-index: 1;
            height: 100vh;        
            opacity: 1;
            backdrop-filter: blur(6px);
            background: #726f6fa6 0% 0% no-repeat padding-box;
            width: 100%;
            margin-top: 5.4rem;
        }
        
        .menu__lista-mobile[aparecer]{
            display:none;
        }
        #fade[aparecer]{
            display: none;
        }

        .cabecalho__menu{
            display: flex;
            flex-direction: row;
            list-style: none;   
            justify-content: space-around;
            align-items: center;
            padding: 0.5rem;
            background-color: #161616;
        }

        .botao{
            border: none;
            background-color: transparent;
        }

        .botao-abrir-menu[aparecer]{
            display: none;
        }   

        .botao-fechar-menu[aparecer]{
            display: none;
        }

        @media (max-width: 900px){
            .menu__lista{
                display: none;
            }

            .cabecalho_menu{
                justify-content: space-between;
            }
        }

        @media (min-width: 900px){
            .menu__lista-mobile{
                display: none;
            }

            #fade{
                display: none;
            }
        }
    `;

    firstUpdated(){
        this.menuMobile = this.shadowRoot?.querySelector(".menu__lista-mobile");
        this.fade = this.shadowRoot?.querySelector("#fade");
        this.botao__abrir__menu = this.shadowRoot?.querySelector(".botao-abrir-menu");
        this.botao__fechar__menu = this.shadowRoot?.querySelector(".botao-fechar-menu");
    }

    render(){
        return html`
            <header class="cabecalho">
                <div id="fade" aparecer></div>
                <nav class="cabecalho__menu">
                    <minha-imagem class="logo" url="../../imagem/logo.webp"  @click="${() => this.irParaLink()}"></minha-imagem>
                    <ul class="menu__lista" >
                        <minha-lista class="lista__item__desktop" link="/#home" texto="Home"></minha-lista>
                        <minha-lista class="lista__item__desktop" link="/#guia" texto="Guia do Jogo"></minha-lista>
                        <minha-lista class="lista__item__desktop" link="/#download" texto="Download"></minha-lista>
                        <minha-lista class="lista__item__desktop" link="/#contato" texto="Contato"></minha-lista>
                        <minha-lista class="lista__item__desktop" link="/#sobreNos" texto="Sobre nós"></minha-lista>
                    </ul>
                    <ul class="menu__lista-mobile" aparecer>
                        <minha-lista class="lista__item__mobile" link="/#home" texto="Home" @click="${this.fecharMenu}"></minha-lista>
                        <minha-lista class="lista__item__mobile" link="/#guia" texto="Guia do Jogo" @click="${this.fecharMenu}"></minha-lista>
                        <minha-lista class="lista__item__mobile" link="/#download" texto="Download" @click="${this.fecharMenu}"></minha-lista>
                        <minha-lista class="lista__item__mobile" link="/#contato" texto="Contato" @click="${this.fecharMenu}"></minha-lista>
                        <minha-lista class="lista__item__mobile" link="/#sobreNos" texto="Sobre nós" @click="${this.fecharMenu}"></minha-lista>
                    </ul>

                    <button class="botao botao-abrir-menu">    
                        <meu-icone nomeIcone="menu" @click="${this.abrirMenu}"></meu-icone>
                    </button>
                    
                    <button class="botao botao-fechar-menu" aparecer>
                        <meu-icone nomeIcone="close" @click="${this.fecharMenu}" ></meu-icone>
                    </button>
                    
                </nav>
            </header>
        `;
    }

    irParaLink(){
        const a = document.createElement('a');
        a.href = '/#home';
        
        window.location.replace(a.href);

    }

    abrirMenu(){
        this.menuMobile.removeAttribute('aparecer');
        this.fade.removeAttribute("aparecer");
        this.corpo.style.overflow = 'hidden';
        this.botao__abrir__menu.setAttribute("aparecer", "aparecer");
        this.botao__fechar__menu.removeAttribute("aparecer");
    }

    fecharMenu(){
        this.menuMobile.setAttribute('aparecer', 'aparecer');
        this.fade.setAttribute("aparecer", 'aparecer');
        this.corpo.style.overflow = 'auto';
        this.botao__fechar__menu.setAttribute("aparecer", "aparecer");
        this.botao__abrir__menu.removeAttribute("aparecer");

        scroll(0,0);
    }
}

customElements.define('meu-menu', Menu);
