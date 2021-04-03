import { Controller } from 'stimulus'
import ReactDOM from 'react-dom'
import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Blog from '../component/blog'
import Links from '../component/links'
import Profile from '../component/profile'
import Menu from '../component/menu'
import Routes from '../const/routes'

export default class extends Controller {
    static values = { url: String }

    initialize() {
        this.load()
    }

    load() {
        ReactDOM.render(
            <Router>
                <div className="h-full min-h-screen">
                    <Profile />
                    <Menu />
                    <div className="flex-shrink-0 content-center">
                        <Route exact path={Routes.home} component={Links} />
                        <Route path={Routes.blog} component={Blog} />
                    </div>
                </div>
            </Router>,
            this.element
        )
    }
}
