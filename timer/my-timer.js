import {LitElement, html, css} from 'https://unpkg.com/lit-element@latest/lit-element.js?module';
import { play, pause, replay } from './icons.js';

/***
 * @class
 */
export class MyTimer extends LitElement{

    /***
     * @method
     * @overload
     * @static
     */
    static properties = {
        duration: {},
        end: {state: true},
        remaining: {state: true},
    }

    /***
     * @method
     * @static
     * @overload
     */
    static get styles(){
        return css`
            :host{
                display: inline-block;
                min-width: 4em;
                text-align: center;
                padding: 0.2em;
                margin: 0.2em 0.1em;
                color: #fff;
                border: 1px solid #fff;
                padding: 2rem;
                background-color: #878787;
                box-shadow: 9px 20px 117px 2px rgba(0,0,0,0.39);
            }

            .principal{
                user-select: none;
                font-size: 0.6em;
                position: relative;

            }
        `;
    }   

    /***
     * @constructor
     */
    constructor(){
        super();
        this.duration = 60;
        this.end = null;
        this.remaining = 0;
    }

    /***
     * @method
     * @overload
     */
    render(){
        const {remaining, running} = this;
        const min = Math.floor(remaining / 60000);
        const sec = pad(min, Math.floor((remaining / 1000)% 60));
        const hun = pad(true, Math.floor((remaining % 1000) / 10));

        return html`
            ${min ? `${min}:${sec}` : `${sec}.${hun}`}

            <main class="principal">
                ${
                    remaining === 0 
                    ? '' 
                    : running 
                    ? html `<span @click=${this.pause}>${pause}</span>` 
                    : html `<span @click=${this.start}>${play}</span>`
                }

                <span @click=${this.reset}>${replay}</span>
            </main>
        `;
    }

    /***
     * @method
     */
    start(){
        this.end = Date.now() + this.remaining;
        this.tick();
    }

    /***
     * @method
     */
    pause(){
        this.end = null;
    }

    /***
     * @method
     */
    reset(){
        const running = this.running;
        this.remaining = this.duration * 1000;
        this.end = running ? Date.now() + this.remaining : null;
    }

    /***
     * @method
     */
    tick(){
        if(this.running){
            this.remaining = Math.max(0, this.end - Date.now());
            requestAnimationFrame(() => this.tick());
        }
    }

    /***
     * @method
     */
    get running(){
        return this.end && this.remaining;
    }

    /***
     * @callback
     */
    connectedCallback(){
        super.connectedCallback();
        this.reset();
    }
}

customElements.define('my-timer', MyTimer);

/***
 * @method
 */
function pad(pad, val){
    return pad ? String(val).padStart(2, '0') : val;
}