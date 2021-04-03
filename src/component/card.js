import React from 'react'
import ReactHtmlParser from 'react-html-parser'
import hljs from 'highlight.js'

class Card extends React.Component {
    render() {
        return (
            <div className="flex items-center content-center justify-center justify-items-center linear-bg">
                <div className="container mx-4 my-4 bg-gray-800 rounded-md border-2">
                    <div className="border-opacity-0 rounded-md flex mx-auto justify-between flex-col divide-y divide-gray-200">
                        <div className="flex-grow p-6 ml-6 text-xl font-bold text-white">
                            {this.props.title}
                        </div>
                        <div className="flex-grow p-4 overflow-x-auto text-white">
                            {ReactHtmlParser(this.props.content, {
                                transform: (node) => {
                                    if (
                                        node.type === 'text' &&
                                        node.parent.name === 'pre'
                                    ) {
                                        node.data = hljs.highlightAuto(
                                            node.data,
                                            ['json', 'php', 'js', 'yaml']
                                        ).value
                                        node.data = (
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html: node.data,
                                                }}
                                            />
                                        )
                                    }
                                },
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card
