import * as Constant from "../../../constants/actionTypes"


export const setReduxData = (data) => {
    return {
        type: Constant.LATEST_REDUX_STATE,
        payload:data
    }
}