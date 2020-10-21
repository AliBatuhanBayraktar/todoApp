import React from "react";
import {AccordionBodyNamespace} from "../../libs/namespaces/ui/widgets/accordion-body.namespace";
import {Button} from "../elements/button.element";
import {Dispatch} from "redux";
import {deleteTodo, toggleTodo} from "../../store/actions/todo.actions";
import {connect} from "react-redux";

class AccordionBody extends React.Component<
    AccordionBodyNamespace.AccordionBodyAllPropsInterface,
    AccordionBodyNamespace.AccordionBodyStateInterface> {

    render(): React.ReactNode {

        let complateButton;

        if (!this.props.complated) {
            complateButton = <Button onClick={() => this.props.toggleTodoItem(this.props.id)} classes='btn-warning margin-right-10'>Tamamlanmadı</Button>;
        } else {
            complateButton = <Button onClick={() => this.props.toggleTodoItem(this.props.id)} classes='btn-success margin-right-10'>Tamamlandı</Button>;
        }

        return <div className='accordion-body'>
            <article>
                <p>{ this.props.content }</p>
                { complateButton }
                <Button onClick={() => this.props.deleteTodoItem(this.props.id)} classes='btn-danger'>Sil</Button>
            </article>
        </div>;
    }

}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        deleteTodoItem: (payload: number) => dispatch(deleteTodo(payload)),
        toggleTodoItem: (payload: number) => dispatch(toggleTodo(payload))
    }
}

export default connect(null, mapDispatchToProps)(AccordionBody)
