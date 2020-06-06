const initialState = {
    list: [{ item: 'test', done: false }], // just added this to test that state is being passed down propperly,
    newToDo: ''
}; //The initial state of this reducer (will be combined with the states of other reducers as your app grows)

const INPUT_CHANGED = 'INPUT_CHANGED';
const SUBMMIT_TODO = 'SUBMMIT_TODO';
const ITEM_CLICK = 'ITEM_CLICK';
const ITEM_DEL = 'ITEM_DEL';

//改变输入框内容
export function inputChange(newToDo) {
    const value = newToDo.target.value
    return {
        type: INPUT_CHANGED,
        value
    }
}

//点击提交
export function submmitTodo(event) {
    event.preventDefault()//阻止按钮原来的动作
    return {
        type: SUBMMIT_TODO
    }
}

//点击项目划线
export function itemClick(i) {
    return {
        type: ITEM_CLICK,
        i
    }
}

//删除项目
export function itemDel(i) {
    return {
        type: ITEM_DEL,
        i
    }
}


export default function reducer(state = initialState, action) { // a function that has two parameters, state (which is initialized as our initialState obj), and action, which we'll cover soon.
    switch (action.type) {
        case INPUT_CHANGED:
            return Object.assign(
                {},
                state,
                { newToDo: action.value }
            );
        case SUBMMIT_TODO:
            return Object.assign(
                {},
                state,
                {
                    list: [...state.list, { item: state.newToDo, done: false }],
                    newToDo: ''
                }
            );
        case ITEM_CLICK:
            return Object.assign(
                {},
                state,
                {
                    list: [...state.list.slice(0, action.i),
                    Object.assign({}, state.list[action.i], { done: !state.list[action.i].done }),
                    ...state.list.slice(action.i + 1)
                    ]
                }
            );

        case ITEM_DEL:
            return Object.assign(
                {},
                state,
                {
                    list: [...state.list.slice(0, action.i),
                    ...state.list.slice(action.i + 1)
                    ]
                }
            );
        default:
            return state;
    }
}