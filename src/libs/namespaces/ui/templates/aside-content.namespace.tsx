export namespace AsideContentNamespace {

    export type AsideContentAllPropsInterface =
        AsideContentOwnPropsInterface &
        AsideContentStatePropsInterface &
        AsideContentStateDispatchPropsInterface


    export interface AsideContentOwnPropsInterface {

    }

    export interface AsideContentStatePropsInterface {
        todoReducer?: TodoItemInterface[]
    }

    export interface AsideContentStateDispatchPropsInterface {

    }

    export interface AsideContentStateInterface {
        todoList?: TodoItemInterface[]
    }

    export interface TodoItemInterface {
        id: number,
        title: string,
        content: string,
        completed: boolean
    }

}



