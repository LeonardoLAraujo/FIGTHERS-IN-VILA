import {LitElement, html, css} from 'https://unpkg.com/lit-element@latest/lit-element.js?module';
import { Titulo } from '../../componentes/titulo/titulo.js';
import { Paragrafo } from '../../componentes/paragrafo/paragrafo.js';
import { Iframe } from '../../componentes/iframe/iframe..js';

export class Guia extends LitElement{
    constructor(){
        super();
    }

    static styles = css`
        .lutaComSapato{
            height: 50vh;
            background-color: rgb(22, 22, 22);
            padding: 1rem;
        }

        .cadaUmPorSi{
            height: 50vh;
            padding: 1rem;
        }

        .modoCs{
            height: 50vh;
            background-color: rgb(22, 22, 22);
            padding: 1rem;
        }

        .modoTrafico{
            height: 50vh;
            padding: 1rem;
        }

        header{
            padding: 1rem;
        }
    `;

    render(){
        return html `
            <header>
                <meu-titulo class="centralizar" texto="Guia do Jogo"></meu-titulo>
                <meu-paragrafo class="p-guia" texto="O jogo é de luta, onde você escolhe entre o kiko e o chaves, tem vários tipo de luta, com poder, com objetos como sapatos por exemplo, mais em baixo, mostraremos uma lista para você"></meu-paragrafo>
            </header>
            

            <div class="lutaComSapato">
                <meu-titulo class="centralizar" texto="Luta com sapatos"></meu-titulo>
                <meu-paragrafo class="p-guia" texto="Nesse modo a luta é do Chaves contra o kiko, mas como arma o sapato"></meu-paragrafo>
                <video-yt altura="340" largura="600" url="https://www.youtube.com/embed/EzkRNR7c8_g" titulo="Chaves vcs Kiko na luta de sapato"></video-yt>
            </div>
            <div class="cadaUmPorSi">
                <meu-titulo class="centralizar" texto="Luta cada um Por Si"></meu-titulo>
                <meu-paragrafo class="p-guia" texto="O modo cada um por si, está sendo implantado, mas você escolhe um dos personagens da vila e sai batendo em todo mundo, o ultimo de pé ganha"></meu-paragrafo>
                <video-yt altura="340" largura="600" url="https://www.youtube.com/embed/YmD2vzorS94" titulo="Luta na vila, cada um por Si"></video-yt>
            </div>
            <div class="modoCs">
                <meu-titulo class="centralizar" texto="Modo Tiro - FPS"></meu-titulo>
                <meu-paragrafo class="p-guia" texto="Modo FPS, vai ter o time da policial e terrorista, você escolhe um dos personagem da vila e o time"></meu-paragrafo>
                <video-yt altura="340" largura="600" url="https://www.youtube.com/embed/ZiMbpzShPK8" titulo="Modo FPS"></video-yt>
            </div>
            <div class="modoTrafico">
                <meu-titulo class="centralizar" texto="Modo Trafico +18"></meu-titulo>
                <meu-paragrafo class="p-guia" texto="Esse modo é para pessoas adultas, você será um traficante e precisará passar drogas para as pessoas da vila sem ser pego"></meu-paragrafo>
                <video-yt altura="340" largura="600" url="https://www.youtube.com/embed/l5-rbPXKycA" titulo="Modo Trafico">
            </div>
        `;
    }
}

customElements.define('guia-guia', Guia);