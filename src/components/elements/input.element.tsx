import React from "react";
import {AbstractFormElement} from "./abstract-form-element.element";

export class Input extends AbstractFormElement<any, any>{

    render(): React.ReactNode {
        return <div className='form-group'>
            <input
                type='text'
                placeholder={this.props.placeholder}
                value={this.state.value}
                onChange={(e) => this.handleInputValue(e)}
                required/>
        </div>
    }

}
