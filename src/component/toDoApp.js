import React, { Component } from 'react';
import List from './List.js'
import Input from './Input.js'

class ToDoApp extends Component {
    //Input内容变化同步到newToDo变量
    onInputChange = (event) => {
        this.setState({
            newToDo: event.target.value
        })
    }
    //提交newToDo到列表中
    onInputSubmmit = (event) => {
        event.preventDefault()
        this.setState((previousState) => ({
            list: [...previousState.list, { item: previousState.newToDo, done: false }],
            newToDo: ''
        }));
    }
    //划掉已经做完的事项
    onListItemClick = (i) => { // takes the index of the element to be updated
        this.setState((previousState) => ({
            list: [
                ...previousState.list.slice(0, i), // slice returns a new array without modifying the existing array. Takes everything up to, but not including, the index passed in.
                Object.assign({}, previousState.list[i], { done: !previousState.list[i].done }), // Object.assign is a new ES6 feature that creates a new object based on the first param (in this case an empty object). Other objects can be passed in and will be added to the first object without being modified.
                ...previousState.list.slice(i + 1) // takes everything after the index passed in and adds it to the array.
            ]
        }))
    };
    //删除事项
    deleteListItem = (i) => {
        this.setState((previousState) => ({ // using previous state again
            list: [
                ...previousState.list.slice(0, i), // again with the slice method
                ...previousState.list.slice(i + 1) // the only diffence here is we're leaving out the clicked element
            ]
        }))
    };
    componentWillMount() { // run before the render method
        this.setState({ // add an array of strings to state.
            list: [{ item: 'thing1', done: false }, { item: 'thing2', done: false }, { item: 'thing3', done: false }],
            newTodo: 'test'
        })
    };
    render() {
        return (
            <div className="row">
                <div className="col-md-10 col-md-offset-1">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <h1>My To Do App</h1>
                            <hr />
                            <Input value={this.props.toDoApp.newToDo} onChange={this.props.inputChange} submmit={this.props.submmitTodo} />
                            <List listItems={this.props.toDoApp.list} onClick={this.props.itemClick} deletClick={this.props.itemDel} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ToDoApp;
