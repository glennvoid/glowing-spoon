import { defineCustomElement } from "./lib/apiCustomElement"
// vue SFC
import ButtonSFC from '@/components/ui/button/Button.vue'
// turn component into web components
export const Button = defineCustomElement(ButtonSFC, { shadowRoot: false })

customElements.define("vce-button", Button)

// register global typings
declare module 'vue' {
    export interface GlobalComponents {
        'Button': typeof Button,
    }
}