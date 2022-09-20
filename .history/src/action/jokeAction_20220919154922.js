

export const GET_JOKE = 'GET_JOKE'
export const GET_JOKE_SUCCESS = 'GET_JOKE_SUCCESS'
export const GET_JOKE_ERROR = 'GET_JOKE_ERROR'
export const SET_IS_FETCHING = 'SET_IS_FETCHING'
export const SHOW_PUNCHLINE = 'SHOW_PUNCHLINE'
export const SHOW_SETUP = 'SHOW_SETUP'

export const getJoke = () => dispatch =>{
    
}

const setIsFetching = (isFetching) => {
    return {type: SET_IS_FETCHING, payload: isFetching}
}

export const showPL = () =>{
     return { type:SHOW_PUNCHLINE}
}

export function showS(){
    return { type: SHOW_SETUP}
}

export const getJokeSuccess = (joke) => {
    console.log("working")
    return{type:GET_JOKE_SUCCESS, payload: joke}
}