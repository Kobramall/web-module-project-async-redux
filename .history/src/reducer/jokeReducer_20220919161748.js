import { GET_JOKE_SUCCESS, GET_JOKE_ERROR, SHOW_PUNCHLINE, SHOW_SETUP} from "../action/jokeAction";

const initialState = {
   joke: {
    setup: "",
    punchline: "",
    id: 0,
    type: ""
},
    showSetup: false,
    showPunchline: false
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
            case GET_JOKE_SUCCESS:
            return {
                    ...state, joke: action.payload
                }
            case GET_JOKE_ERROR:
                return {}  
            case SHOW_SETUP:
            console.log("HERE")    
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