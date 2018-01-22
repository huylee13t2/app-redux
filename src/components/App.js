import React from 'react'

import TodoList from './TodoList'
import ShowList from '../containers/ShowList'
import AddTodo from '../containers/AddTodo'

const App = () => {
    return(
        <div style={{ padding : 30 }} >
            <AddTodo />
            <ShowList />
        </div>
    )
}

export default App