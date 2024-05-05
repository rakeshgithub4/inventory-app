import * as Constant from "../../../constants/actionTypes"

const INITIAL_STATE = {
    userData:{}
}

const user = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case Constant.LATEST_REDUX_STATE: 
        return Object.assign({},state,{
            userData:{name:"Ram",age:24}
        })
        default: 
        return state;
    }
}

export default user;
