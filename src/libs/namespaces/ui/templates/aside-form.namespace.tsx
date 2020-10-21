export namespace AsideFormNamespace {

    export type AsideFormAllPropsInterface =
        AsideFormOwnPropsInterface &
        AsideFormStatePropsInterface &
        AsideFormStateDispatchPropsInterface



    export interface AsideFormOwnPropsInterface {

    }

    export interface AsideFormStatePropsInterface {

    }

    export interface AsideFormStateDispatchPropsInterface {
        setTodoItem?: any,
        deleteTodoItem?: any
    }

    export interface AsideFormStateInterface {
        title: string,
        content: string
    }

}
