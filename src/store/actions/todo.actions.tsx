export interface TodoItemPayloadInterface {
    title: string,
    content: string,
}

export interface TodoState {
    id: number
    title: string,
    content: string,
    completed: boolean
}

export const addTodo = ( payload: TodoItemPayloadInterface ) => ({
    type: 'ADD_TODO',
    id: Date.now(),
    title: payload.title,
    content: payload.content,
    completed: false

})

export const deleteTodo = (id: number) => ({
    type: 'DELETE_TODO',
    id
})

export const toggleTodo = (id: number) => ({
    type: 'TOGGLE_TODO',
    id
})
