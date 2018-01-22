const data = [
    {
        id: 1,
        text: 'aaaa',
        completed: false
    },
    {
        id: 2,
        text: 'bbb',
        completed: false
    }
]

const todos = (state = data, action) => {
    console.log(action.type)
    switch (action.type) {
        case 'ADD_TODO':
            console.log('===> ADD_TODO')
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'IS_ACTIVE':
            console.log('===> Is Active')
            return state.map(todo =>
                (todo.id === action.id)
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        default:
            return state
    }
}

export default todos
