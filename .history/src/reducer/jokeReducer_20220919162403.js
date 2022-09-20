import { GET_JOKE_SUCCESS,  SHOW_PUNCHLINE, SHOW_SETUP} from "../action/jokeAction";

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
    switch(action.type) {
            case GET_JOKE_SUCCESS:
                console.log("HERE")
            return {
                    ...state, joke: action.payload
                } 
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