export namespace AccordionBodyNamespace {

    export type AccordionBodyAllPropsInterface =
        AccordionBodyOwnPropsInterface &
        AccordionBodyStateDispatchPropsInterface

    export interface AccordionBodyOwnPropsInterface {
        id: number
        content: string
        complated: boolean
    }

    export interface AccordionBodyStateDispatchPropsInterface {
        deleteTodoItem?: any
        toggleTodoItem?: any
    }

    export interface AccordionBodyStateInterface {

    }

}
