import {LitElement, html, css} from 'https://unpkg.com/lit-element@latest/lit-element.js?module';
import { Rota } from './rotas/rota.js'; 
import { Home } from './pages/home/home.js';
import { Menu } from './pages/menu.js';
import { Guia } from './pages/guia/guia.js';
import { SobreNos } from './pages/sobreNos/sobreNos.js';
import { Contato } from './pages/contato/contato.js';
import { Download } from './pages/download/download.js';
import { Rodape } from './pages/rodape.js';

class MyApp extends LitElement{

    constructor(){
       super();
       this.localDaRotaAtual = new Rota();
    }

    static get styles(){
        return css`
        `;
    }

    render(){
        return html `
            <meu-menu id="corpoPrincipal"></meu-menu>

            <main id="principal>
                ${this.localDaRotaAtual}
            </main>

            ${console.log(`
            DESENVOLVEDOR: LEONARDO LEAL ARAUJO
            GITHUB: https://github.com/LeonardoLAraujo

                    ████████████████
                    ██▓▒░░░░░░░░░▒▓██
                    ██▓▒░░░░░░░░░▒▓██
                    ██▓▒░░█░░█░░░▒▓██
                    ██▓▒░░█░░█░░░▒▓██
                    ██▓▒░░░░░░░░░▒▓██
                    ██▓▒░░░░░░░░░▒▓██
                    ██▓▒█░░░░░░█░▒▓██
                    ██▓▒░█░░░░█░░▒▓██
                    ██▓▒░░████░░░▒▓██
                    ██▓▒░░░░░░░░░▒▓██
                    ██▓▒░░░░░░░░░▒▓██
                    ██▓▒░░░░░░░░░▒▓██
                    _██████▓▓██████▓░
                    ______▒▓███▓▒░
                    __░▒▓████████▓▒░
                    ░▒▓███████████▓▒░
                    
            `)}
        `;
    }

}


customElements.define('my-app', MyApp);



