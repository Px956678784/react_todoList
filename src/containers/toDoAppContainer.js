import { connect } from 'react-redux';
import ToDoApp from '../component/toDoApp.js'
import { inputChange, submmitTodo, itemClick, itemDel } from '../redux/modules/toDoApp'; // we added this

function mapStateToProps(state) {
    return {
        toDoApp: state.toDoApp // gives our component access to state through props.toDoApp
    }
}

function mapDispatchToProps(dispatch) {
    return {
        inputChange: (value) => dispatch(inputChange(value)),
        submmitTodo: (value) => dispatch(submmitTodo(value)),
        itemClick: (value) => dispatch(itemClick(value)),
        itemDel: (value) => dispatch(itemDel(value))
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDoApp);
