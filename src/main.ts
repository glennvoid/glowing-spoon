import { defineCustomElement } from "./lib/apiCustomElement"
// vue SFC
import ButtonSFC from './Button.ce.vue'
// turn component into web components
export const Counter = defineCustomElement(ButtonSFC, { shadowRoot: false })

customElements.define("my-counter", Counter)

// register global typings
declare module 'vue' {
    export interface GlobalComponents {
        'Counter': typeof Counter,
    }
}