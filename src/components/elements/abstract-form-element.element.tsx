import React from "react";
import {AbstractFormElementNamespace} from "../../libs/namespaces/ui/elements/abstract-form-element.namespace";

export abstract class AbstractFormElement<
    P extends AbstractFormElementNamespace.AbstractFormElementPropsInterface,
    S extends AbstractFormElementNamespace.AbstractFormElementStateInterface
    > extends React.Component<P, S>{

    static defaultProps = {
        value: null,
        placeholder: null,
    }

    state: any = {
        value: ''
    }

    handleInputValue(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>):void {
        this.setState({
            value: e.target.value
        }, () => this.props.getValue(this.props.name, this.state.value))
    }

}
