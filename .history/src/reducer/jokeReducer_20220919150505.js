import { GET_JOKE, GET_JOKE_SUCCESS, GET_JOKE_ERROR, SET_IS_FETCHING, SHOW_PUNCHLINE, SHOW_SETUP} from "../action/jokeAction";

export const initialState = {
   joke: {
    setup: "hfog",
    punchline: ""
   },
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
                return {
                    ...state, 
                    showSetup: !state.showSetup
                }
            case SHOW_PUNCHLINE:
                return {...state, showPunchline: true}
        default:
            return state;
    }
}