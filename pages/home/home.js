import {LitElement, html, css} from 'https://unpkg.com/lit-element@latest/lit-element.js?module';
import { Titulo } from '../../componentes/titulo/titulo.js';
import { Imagem } from '../../componentes/imagem/imagem.js';
import { Botao } from '../../componentes/botao/botao.js';
import { Faq } from '../../componentes/faq/faq.js';
import { Paragrafo } from '../../componentes/paragrafo/paragrafo.js';
import { ListaUl } from '../../componentes/lista-ul/lista-ul.js';
import { Loading } from '../../componentes/loading/loading.js';
import { MyPage } from '../../componentes/myPage/myElement.js';

/***
 * @class
 */
export class Home extends LitElement{

     /**
     * @method
     * @static
     * @overload
     */
    static get properties(){
        return{
            aparecer: {type: Boolean},
        }
    }

    /***
     * @constructor
     */
    constructor(){
        super();
        this.aparecer = true;
    }

     /**
     * @method
     * @static
     * @overload
     */
    static get styles(){
        return css`
            .cabecalho{
                width: 100%;
                height: 100vh;
                background-image: url('../../imagem/banner-download.jpeg');
                background-size: cover;
                backrground-repeat: no-repeat;
                display: flex;
                justify-content: center;
            }

            .conteudo{
                text-align: center;
            }

            .conteudo p{
                color: #fff;
                font-size: 25px;
            }

            .guiaDoJogo{
                background-color: rgb(22, 22, 22);
                color: #fff;
                height: 50vh; 
                padding: 1rem;
            }

            .quemSomos{
                height: 50vh;
                padding: 1rem;
            }

            .entreContato{
                height: 50vh;
                background-color: rgb(22, 22, 22);
                padding: 1rem;
            }

            .faq{
                height: 62  vh;
                padding: 1rem;
            }
        `;
    }

     /**
     * @method
     * @overload
     */
    render(){
        return html `
        ${scroll(0,0)}

        <meu-loading class="carregar-home" textoLoad="Carregando" imagem="../../imagem/gif-chaves.gif"></meu-loading>

        <header class="cabecalho">
            <meu-titulo class="titulo-principal" texto="FIGTHERS IN VILA"></meu-titulo>
        </header>

        <section class="conteudo">
            <div class="guiaDoJogo">
                <meu-titulo class="h1__home" texto="Conheça nossa Guia de jogo"></meu-titulo>
                <meu-paragrafo class="corBranca-25" texto="A guia de jogo vai te ajudar a entender melhor o jogo, explicamos rapidamente sobre as mecanicas e botões para acerta golpes, através de um vídeo"></meu-paragrafo>
                <minha-imagem class="imagem-sobre"  url="https://www.imagenspng.com.br/wp-content/uploads/2015/02/chaves-14.png"></minha-imagem>
                <meu-link class="link-home" link="/#guia" texto="Ir para a Guia de Jogo"><meu-link>
                
            </div>
            <div class="quemSomos">
                <meu-titulo class="h1__home" texto="Quem somos"></meu-titulo>
                <meu-paragrafo class="corBranca-25" texto="Somos uma empresa criada no ano de 2021, com o intuido de desenvolver software, sites e jogos, a cada ano que se passa, mais projetos nós desenvolvemos"></meu-paragrafo>
                <minha-imagem class="imagem-sobre-inver"  url="https://i0.wp.com/imagensemoldes.com.br/wp-content/uploads/2020/02/Turma-do-Chaves-PNG-07.png?fit=391%2C563&ssl=1"></minha-imagem>
                <meu-link class="link-home" link="/#sobreNos" texto="Saiba mais Sobre nós"><meu-link>
            </div>
            <div class="entreContato">
                <meu-titulo class="h1__home" texto="Quer entrar com contato conosco"></meu-titulo>
                <meu-paragrafo class="corBranca-25" texto="Entre em contato conosco e nós reporte bugs e erros, para melhorar cada vez mais o jogo, basta nós mandar mensagem pelas nossas redes sociais!"></meu-paragrafo>
                <minha-imagem class="imagem-sobre2"  url="https://artpoin.com/wp-content/uploads/2023/04/chaves-em-desenho1.png"></minha-imagem>
                <meu-link class="link-home" link="/#contato" texto="Entre em contato"><meu-link>
                
            </div>
            <div class="faq">
                <meu-titulo class="h1__home" texto="FAQ"></meu-titulo>
                <meu-faq titulo="Qual o gênero do jogo?" conteudo="O jogo é de luta, onde você escolhe entre o Kiko e o Chaves"></meu-faq>
                <meu-faq titulo="O jogo é 100% seguro para baixar?" conteudo="Sim, o jogo foi desenvolvido com a alta segurança no mercado de hoje em dia"></meu-faq>
                <meu-faq titulo="Tem para todas as plataformas?" conteudo="No momento não, o desenvolvimento do jogo foi pensado em primeiro momento para desktop"></meu-faq>
            </div>
           
        </section>            
        `;
    }
}

customElements.define('home-home', Home);