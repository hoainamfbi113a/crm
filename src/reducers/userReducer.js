import * as userConstants from "../constants/userConstant";
const initialState = {
    listUser: [],
    taskEditing: null,
}
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case userConstants.FETCH_LIST_USER: {
            return {
                ...state,
                listUser: []
            }
        }
        case userConstants.FETCH_LIST_USER_SUCCESS: {
            return {
                ...state,
                listUser: action.payload.data,
            }
        }
        case userConstants.FETCH_LIST_USER_FAILED: {
            return {
                ...state,
                listUser:[]
            }
        }
        default:
            return initialState
    }
}
export default userReducer;