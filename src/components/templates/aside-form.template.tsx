import React from "react";
import {AsideFormNamespace} from "../../libs/namespaces/ui/templates/aside-form.namespace";
import {Input} from "../elements/input.element";
import {Button} from "../elements/button.element";
import {Textarea} from "../elements/textarea.element";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {addTodo, TodoItemPayloadInterface} from "../../store/actions/todo.actions";

class AsideForm extends React.Component<
    AsideFormNamespace.AsideFormAllPropsInterface,
    AsideFormNamespace.AsideFormStateInterface> {

    state: AsideFormNamespace.AsideFormStateInterface = {
        title: '',
        content: ''
    }

    constructor(props: AsideFormNamespace.AsideFormAllPropsInterface) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFormElementValues = this.handleFormElementValues.bind(this);
    }

    private handleSubmit(e: any): void {
        this.props.setTodoItem(this.state);
        e.preventDefault();
    }

    private handleFormElementValues(name: any, value: any):void {
        const newState = { [name]: value } as Pick<AsideFormNamespace.AsideFormStateInterface, keyof AsideFormNamespace.AsideFormStateInterface>
        this.setState(newState);
    }

    render(): React.ReactNode {
        return <div className="row">
            <form onSubmit={e => this.handleSubmit(e)}>
                <div className="col-xs-12">
                    <Input placeholder='Başlık' name={'title'} getValue={this.handleFormElementValues}/>
                </div>
                <div className="col-xs-12">
                    <Textarea placeholder={'Not'} name={'content'} getValue={this.handleFormElementValues}/>
                </div>
                <div className="col-xs-12">
                    <Button classes='btn-info margin-bottom-20'>Ekle</Button>
                </div>
            </form>
        </div>;
    }

}

const mapStateToProps = (state: AsideFormNamespace.AsideFormStateInterface, props: AsideFormNamespace.AsideFormStatePropsInterface) => {
    return state
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setTodoItem: (payload: TodoItemPayloadInterface) => dispatch(addTodo(payload)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AsideForm)
