import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { showS, showPL, getJoke } from './action/jokeAction'

const App= (props) => {
  
   getJoke
  return (
    <div className="App">
    <div className="intro">
           <h2>Want To Hear A Joke?</h2>
                <button onClick={() => props.showS()}>{props.showSetup ? "NO" : "YES"}</button>
        </div>
        {props.showSetup ? <div className='setup'>
            <h2>{props.joke.setup}</h2>
            <button onClick={() => props.showPL()}>{props.showPunchline ? "Haha" : "?"}</button>
        </div> : <div></div> }
        {props.showPunchline ? <div className='punchline'>
          <h2>{props.joke.punchline}</h2>
        </div> : <div></div>}
    </div>
  );
}



const mapStateToProps = state => {
  return{
    showPunchline: state.showPunchline,
    showSetup: state.showSetup,
    joke: state.joke
  }
}


export default connect(mapStateToProps, {showS, showPL, getJoke })(App)