import { Controller } from 'stimulus'
import { useTransition } from 'stimulus-use'

export default class extends Controller {
    static targets = ['name']

    connect() {
        useTransition(this)
    }

    greet() {
        const element = this.nameTarget
        const name = element.value
        console.log(`Hello, ${name}!`)
    }
}
