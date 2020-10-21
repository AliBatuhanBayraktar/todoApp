import React from "react";
import {AsideContentNamespace} from "../../libs/namespaces/ui/templates/aside-content.namespace";
import {Accordion} from "./accordion.template";
import {connect} from "react-redux";

class AsideContent extends React.Component<
    AsideContentNamespace.AsideContentAllPropsInterface,
    AsideContentNamespace.AsideContentStateInterface>{

    render(): React.ReactNode {
        return <div className="row">
            { this.props.todoReducer?.map( (item) => (
                <div key={item.id} className="col-xs-12">
                    <Accordion
                        id={item.id}
                        complated={item.completed}
                        title={item.title}
                        content={item.content}/>
                </div>
            ))}
        </div>
    }

}

const mapStateToProps = (state: AsideContentNamespace.AsideContentStateInterface, props: AsideContentNamespace.AsideContentStatePropsInterface) => {
    return state
};



export default connect(mapStateToProps)(AsideContent)
