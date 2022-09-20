import { GET_JOKE, GET_JOKE_SUCCESS, GET_JOKE_ERROR } from "../action/jokeAction";

const initialState = {
    setup: "",
    punchline: "",
    isFetching: false,
    showSetup: false,
    showPunchline: false
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case SET_IS_FETCHING:
            return {...state, isFetching: action.payload}
            case GET_JOKE:
                return {...state, setup: action.payload, punchline: action.payload}
            case GET_JOKE_SUCCESS:
                return {}
            case GET_JOKE_ERROR:
                return {}  
        default:
            return state;
    }
}