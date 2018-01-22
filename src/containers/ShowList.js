import React from 'react'
import { connect } from 'react-redux'
import TodoList from '../components/TodoList';

const getDataTodos = (todos, filter) => {
    switch (filter) {
      case 'SHOW_ALL':
        return todos
      default:
        throw new Error('Unknown filter: ' + filter)
    }
  }

const mapStateToProps = (state) => (
    {
        todos : getDataTodos(state.todos, state.getFilter)
    }
)

const ShowList = connect(
    mapStateToProps
)(TodoList)

export default ShowList