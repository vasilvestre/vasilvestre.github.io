import React from 'react'
import { Link } from 'react-router-dom'
import Routes from '../const/routes'

const Menu = () => (
    <div className="flex justify-center divide-x divide-gray-200 pt-4">
        <Link
            className="text-center text-white px-2 font-bold underline text-sm"
            to={Routes.home}
        >
            Home
        </Link>
        <Link
            className="text-center text-white px-2 font-bold underline text-sm"
            to={Routes.blog}
        >
            Blog
        </Link>
    </div>
)

export default Menu
