import {LitElement, html, css} from 'https://unpkg.com/lit-element@latest/lit-element.js?module';
import { Titulo } from '../../componentes/titulo/titulo.js';
import { Botao } from '../../componentes/botao/botao.js';
import { Icone } from '../../componentes/icone/icone.js';
import { Loading } from '../../componentes/loading/loading.js';
import { Paragrafo } from '../../componentes/paragrafo/paragrafo.js';

export class SobreNos extends LitElement{
    constructor(){
        super();
    }

    static get styles(){
        return css`
            .sobre{
                display: flex;
                flex-direction: column;
                color: #fff;
                align-items: center;
                flex-wrap: wrap;
                padding: 1rem;
            }
        `;  
    }

    render(){
        return html `
            ${scroll(0,0)}
            <meu-loading class="carregar-sobreNos" textoLoad="Carregando" imagem="../../imagem/gif-chaves.gif"></meu-loading>
            
            <header class="cabecalho">
                <meu-titulo class="centralizar aumentar-fonte" texto="Sobre Nós"></meu-titulo>
            </header>

            <section class="sobre">
                <minha-imagem titulo="logo da empresa" class="logo-empresa" url="../../imagem/logo-empresa.jpeg"></minha-imagem>
                <meu-paragrafo class="sobreNos" texto="Estamos no mercado desde 2021 e, com varíos projetos no ar, como por exemplo o game friends"></meu-paragrafo>
            </section>
            

        `;
    }
}

customElements.define("meu-sobre", SobreNos);