import {LitElement, html, css} from 'https://unpkg.com/lit-element@latest/lit-element.js?module';
import { Titulo } from '../../componentes/titulo/titulo.js';
import { Botao } from '../../componentes/botao/botao.js';
import { Icone } from '../../componentes/icone/icone.js';

export class Download extends LitElement{
    constructor(){
        super();
    }

    static get styles(){
        return css `
            #cabecalho{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: start;
                height: 800px;
                width: 100wh;
                background-image: url("../../imagem/banner-download.jpeg");
                background-size: cover;
                background-repeat: no-repeat;
                margin-bottom: 1rem;
            }   

            .container__requistos{
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                padding: 1rem;
                grid-gap: 1rem;
            }

            .container-requisitos meu-titulo{
                text-align: center;
            }

            article{
                display: flex;
                justify-content: space-evenly;
            }
            
            span{
                font-size: 24px;
            }

            p{
                font-size: 18px;
                color: #fff;
            }

            .minha-section{
                padding: 1rem;
            }
            
            .requisitos{
                border: 7px solid #161616;
                padding: 1rem;

            }

            .titulo-botao{
                margin-top: 8.5rem;

            }

            @media (max-width: 1000px){
                .container__requistos{
                    grid-template-columns: 1fr 1fr;
                }
            }

            @media (max-width: 700px){
                .container__requistos{
                    grid-template-columns: 1fr;
                }
            }
        `;
    }

    render(){
        return html `
            <header id="cabecalho">
                <div class="titulo-botao">
                    <meu-titulo class="aumentar-fonte" texto="Download"></meu-titulo>
                    <meu-botao texto="BAIXAR FIGTHERS IN VILA"></meu-botao>
                </div>   
            </header>

            <section class="minha-section">
                <meu-titulo class="centralizar" texto="REQUISITOS DO SISTEMA"></meu-titulo>

                <div class="container__requistos">
                    <div class="requisitos">   
                        <meu-titulo class="cor-branca" texto="PROCESSADOR (CPU)"></meu-titulo>
                        <p>
                            <span>MÍNIMOS:</span>
                            Intel Pentium IV 3+ Ghz ou AMD Athlon64 3500+
                            <br><br>
                            <span>RECOMENDADOS:</span>
                            AMD Ryzen™ 3 1200 Processor @ 3.1GHz (4 Cores), ~3.4GHz
                            Intel® Core™ i5-3470 Processor @ 3.20GHz (4 Cores),~3.2GHz
                        </p>
                    </div>
                    <div class="requisitos">   
                        <meu-titulo class="cor-branca" texto="MEMORIA RAM"></meu-titulo>
                        <p>
                            <span>MÍNIMOS:</span>
                            2GB de RAM
                            <br><br>
                            <span>RECOMENDADOS:</span>
                            4GB de RAM
                        </p>
                    </div>
                    <div class="requisitos">   
                        <meu-titulo class="cor-branca" texto="PLACA DE VÍDEO"></meu-titulo>
                        <p>
                            <span>MÍNIMOS:</span>
                            Intel HD Graphics 4600
                            
                            <br><br>
                            <span>RECOMENDADOS:</span>
                            256MB NVIDIA GeForce 8500 /ATI Radeon HD 2600
                        </p>
                    </div>
                    <div class="requisitos">   
                        <meu-titulo class="cor-branca" texto="ARMAZENAMENTO (HDD)"></meu-titulo>
                        <p>
                            <span>MÍNIMOS:</span>
                            260GB
                            <br><br>
                            <span>RECOMENDADOS:</span>
                            500GB
                        </p>
                    </div>
                    <div class="requisitos">   
                        <meu-titulo class="cor-branca" texto="SiSTEMA OPERACIONAL"></meu-titulo>
                        <p>
                            <span>MÍNIMOS:</span>
                            Windows 7
                            <br><br>
                            <span>RECOMENDADOS:</span>
                            Windows 10
                        </p>
                    </div>
                    <div class="requisitos">   
                        <meu-titulo class="cor-branca" texto="DIRECTX"></meu-titulo>
                        <p>
                            <span>MÍNIMOS:</span>
                            Directx 9
                            <br><br>
                            <span>RECOMENDADOS:</span>
                            Directx 11
                        </p>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('meu-download', Download);