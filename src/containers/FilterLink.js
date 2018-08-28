import React from 'react'
import { NavLink } from 'react-router-dom'

const FilterLink = ({filter, children}) => (

    <NavLink
        to={filter === 'Home' ? '/' : `/${filter}`}>
        {children}
    </NavLink>


)


export default FilterLink;
