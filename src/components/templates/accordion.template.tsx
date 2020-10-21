import {AccordionNamespace} from "../../libs/namespaces/ui/templates/accordion.namespace";
import React from "react";
import {AccordionHead} from "../widgets/accordion-head.widget";
import AccordionBody from "../widgets/accordion-body.widget";

export class Accordion extends React.Component<
    AccordionNamespace.AccordionPropsInterface,
    AccordionNamespace.AccordionStateInterface>{

    state: AccordionNamespace.AccordionStateInterface = {
        isOpen: false,
    }

    constructor(props: AccordionNamespace.AccordionPropsInterface) {
        super(props);
        this.toggleAccordion = this.toggleAccordion.bind(this)
    }

    toggleAccordion(): void {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render(): React.ReactNode {
        return <div className={`accordion ${this.state.isOpen ? 'open' : ''}`}>
            <AccordionHead title={this.props.title} toggleAccordion={this.toggleAccordion} completed={this.props.complated}/>
            <AccordionBody id={this.props.id} content={this.props.content} complated={this.props.complated}/>
        </div>;
    }

}
