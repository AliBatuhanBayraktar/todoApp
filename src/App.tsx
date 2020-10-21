import React from 'react';
import './App.css';
import './libs/scss/style.scss';
import AsideForm from "./components/templates/aside-form.template";
import AsideContent from "./components/templates/aside-content.template";
import {Provider} from "react-redux";
import {todoReducer} from "./store/reducers/todo.reducer";
import {combineReducers, createStore} from "redux";
import {loadTodoState, saveTodoState} from "./store/services/todo.service";


class App extends React.Component<any, any> {

    persistedStore = loadTodoState();

    rootReducer = combineReducers({
        todoReducer: todoReducer,
    });

    store = createStore(
        this.rootReducer,
        this.persistedStore
    )

    constructor(props: any) {
        super(props);
        this.store.subscribe(() => saveTodoState(this.store.getState()))
    }

    render(): React.ReactNode {
        return <Provider store={this.store}>
            <div className='container'>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-4">
                        <AsideForm/>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-8">
                        <AsideContent/>
                    </div>
                </div>
            </div>
        </Provider>;
    }

}

export default App
