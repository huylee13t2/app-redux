import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ todo, isActive }) => {
    return (
        <li>
            <a>{todo.text}</a>
        </li>
    )
}

Todo.propTypes = {
    todo: PropTypes.shape(
        {
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired
        }
    ).isRequired
}

export default Todo