import React from "react";
import {AccordionHeadNamespace} from "../../libs/namespaces/ui/widgets/accordion-head.namespace";
import {PlusIcon} from "../icons/plus.icon";
import {Colors} from "../../libs/constants/styles";
import {CheckIcon} from "../icons/check.icon";


export class AccordionHead extends React.Component<AccordionHeadNamespace.AccordionHeadPropsInterface, AccordionHeadNamespace.AccordionHeadStateInterface>{

    render(): React.ReactNode {

        let check;

        if (this.props.completed) {
            check = <CheckIcon color={Colors.dark}/>
        }

        return <div className='accordion-head'>
            <div>
                { check }
            </div>
            <div>
                <h3>{this.props.title}</h3>
            </div>
            <div onClick={() => this.props.toggleAccordion()}>
                <PlusIcon color={Colors.dark}/>
            </div>
        </div>
    }

}
