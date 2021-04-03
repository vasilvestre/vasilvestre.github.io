import { Controller } from 'stimulus'
import ReactDOM from 'react-dom'
import React from 'react'
import Card from '../component/card'

export default class extends Controller {
    static values = { url: String }

    initialize() {
        this.load()
    }

    load() {
        fetch(this.urlValue)
            .then((response) => response.text())
            .then((jsonUnparsed) => JSON.parse(jsonUnparsed))
            .then((json) => json['hydra:member'])
            .then((members) => {
                ReactDOM.render(
                    members.map((member, index) => (
                        <Card
                            key={index}
                            title={member.title}
                            content={member.content}
                        />
                    )),
                    this.element
                )
            })
    }
}
