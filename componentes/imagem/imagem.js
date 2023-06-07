import {LitElement, html, css} from 'https://unpkg.com/lit-element@latest/lit-element.js?module';

export class Imagem extends LitElement{

    static get properties(){
        return{
            url: {type: String},
            titulo: {type: String},
            class: {type: String},
        }
    }

    constructor(){
        super();
    }

    static get styles(){
        return css`
            .logo{
                width: 70px;
                cursor: pointer;
            }

            .rodape-logo{
                width: 100px;
            }

            .img-contato{
                width: 110px;
                cursor: pointer;
                color: #fff;
            }

            .imagem-home{
                width: 100%;
                height: 100%;
            }

            .logo-empresa{
                width: 200px;
                height: 200px;
                border-radius: 50px;
            }

            .imagem-sobre{
                position: absolute;
                margin-left: 26%;
            }

            .imagem-sobre-inver{
                position: absolute;
                margin-left: -40%;
                width: 210px;
                margin-top: 2rem;
            }

            .imagem-sobre2{
                position: absolute;
                margin-left: 3%;
                width: 400px;
                margin-top: 3rem;
            }

            @media (max-width: 750px){
                .imagem-sobre{
                    display: none;
                }

                .imagem-sobre-inver{
                    display: none;
                }

                .imagem-sobre2{
                    display: none;
                }
            }

            .loading{
                width: 8rem;
            }
        `;
    }

    render(){
        return html `
            <img class=${this.class} src=${this.url} title=${this.titulo}>
        `;
    }
}

customElements.define('minha-imagem', Imagem);

