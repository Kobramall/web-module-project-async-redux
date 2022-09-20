import { GET_JOKE, GET_JOKE_SUCCESS, GET_JOKE_ERROR, SET_IS_FETCHING } from "../action/jokeAction";

export const initialState = {
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
            case SHOW_SETUP:
                return {...state, showSetup:true}
            case SHOW_PUNCHLINE:
                return {...state, showPunchline: true}
        default:
            return state;
    }
}