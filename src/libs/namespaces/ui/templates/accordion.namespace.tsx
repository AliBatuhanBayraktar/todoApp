export namespace AccordionNamespace {

    export interface AccordionPropsInterface {
        id: number
        title: string
        content: string
        complated: boolean
    }

    export interface AccordionStateInterface {
        isOpen: boolean;
    }

}
