import React from "react";
import {ButtonNamespace} from "../../libs/namespaces/ui/elements/button.namespace";


export class Button extends React.Component<
    ButtonNamespace.ButtonPropsInterface,
    ButtonNamespace.ButtonStateInterface>
{

    static defaultProps = {
        classes: 'btn-info'
    }

    render(): React.ReactNode {
        return <button onClick={this.props.onClick} className={`btn ${this.props.classes}`}>{this.props.children}</button>
    }

}
