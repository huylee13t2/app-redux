import { combineReducers } from 'redux'
import todos from './todos'
import getFilter from './getFilter'

const todoApp = combineReducers({
    todos,
    getFilter
})

export default todoApp