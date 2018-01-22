let nextId = 3

export const addTodo = (text) => (
    {
        type : 'ADD_TODO',
        id : nextId++,
        text
    }
)

export const isActive = (id) => (
    {
        type : 'IS_ACTIVE',
        id
    }
)