import {LitElement, html, css} from 'https://unpkg.com/lit-element@latest/lit-element.js?module';
import { Titulo } from '../../componentes/titulo/titulo.js';
import { Botao } from '../../componentes/botao/botao.js';
import { Icone } from '../../componentes/icone/icone.js';

export class SobreNos extends LitElement{
    constructor(){
        super();
    }

    static get styles(){
        return css`
            .sobre{
                display: flex;
                flex-direction: row;
                color: #fff;
                justify-content: space-around;
                flex-wrap: wrap;
                padding: 1rem;
            }

            .sobre p {
                font-size: 21px;
                text-align: justify;
            }
        `;  
    }

    render(){
        return html `
            <header class="cabecalho">
                <meu-titulo class="centralizar aumentar-fonte" texto="Sobre Nós"></meu-titulo>
            </header>

            <section class="sobre">
                <minha-imagem titulo="logo da empresa" class="logo-empresa" url="../../imagem/logo-empresa.jpeg"></minha-imagem>
                <p>Estamos no mercado desde 2021 e, com varíos projetos no ar, como por exemplo o game friends ... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum feugiat ullamcorper. Nam nisi elit, iaculis quis vulputate et, bibendum id lacus. Nullam non tincidunt nibh, eget faucibus eros. Quisque aliquam libero nibh. Nullam lacinia ultrices porttitor. Maecenas sit amet justo et justo consequat mattis. Maecenas bibendum mauris gravida magna elementum consequat. Sed hendrerit pretium libero, luctus dignissim odio scelerisque quis. Vestibulum cursus est ut elit condimentum, ac dictum justo ornare.
                Mauris neque turpis, fringilla sit amet venenatis vitae, aliquet sed elit. Donec nec aliquam ligula. Pellentesque varius pharetra diam et sollicitudin. Sed sed lorem nisl. Fusce ullamcorper purus vel arcu tristique, laoreet euismod enim cursus. Vestibulum ultrices ultrices ipsum, vitae ornare mi scelerisque sed. Sed sed leo a enim consequat vehicula dictum ut eros. 
                Mauris eu purus nisl. Proin eu turpis maximus, rhoncus lorem quis, ultricies turpis. Maecenas vel elit lacinia, rutrum nulla non, mollis dui. Etiam pellentesque aliquet nibh a sollicitudin. Proin vel dui non lacus eleifend viverra nec dapibus sapien. Vestibulum lacinia massa urna, eget euismod nibh consectetur in. Proin vitae arcu ornare, tempus justo eu, congue augue. Proin ultricies in erat id sodales. Nulla quis nisi scelerisque, consectetur ligula eu, ullamcorper neque. Aliquam congue suscipit eros ac bibendum. Ut eu odio gravida, vehicula purus at, cursus purus. Donec molestie metus in imperdiet lacinia. Nam eu metus ut enim venenatis porta eu nec purus. Sed vitae nisl velit. Phasellus ullamcorper auctor velit nec varius..</p> 
            </section>
            

        `;
    }
}

customElements.define("meu-sobre", SobreNos);