import {TodoState} from "../actions/todo.actions";

export const initialStateOfTodo: TodoState[] = []

type todoReducersActionType = addTodoReducersActionType &
    deleteTodoReducersActionType &
    toggleTodoReducersActionType;

type addTodoReducersActionType = { type: 'ADD_TODO', title: string, content: string }
type deleteTodoReducersActionType =  { type: 'DELETE_TODO', id: number }
type toggleTodoReducersActionType =  { type: 'TOGGLE_TODO', id: number }

export const todoReducer = (
    state: TodoState[] = initialStateOfTodo,
    action: todoReducersActionType
): TodoState[] => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    title: action.title,
                    content: action.content,
                    completed: false
                }
            ]
        case 'DELETE_TODO':
            return state.filter(item => item.id !== action.id)
        case 'TOGGLE_TODO':
            return state.map(item => item.id === action.id ? {
                id: item.id,
                title: item.title,
                content: item.content,
                completed: !item.completed
            } : item  )
        default:
            return state
    }
}



