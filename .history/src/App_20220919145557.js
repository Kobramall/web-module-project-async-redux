import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { showS, showPL } from './action/jokeAction'

const App= (props) => {
  
  
  return (
    <div className="App">
    <div className="intro">
           <h2>Want To Hear A Joke?</h2>
                <button onClick={() => props.showS()}>{props.showSetup ? "NO" : "YES"}</button>
        </div>
        {props.showSetup ? <div className='setup'>
            <h2>{props.setup}</h2>
            <button onClick={() => props.showPL()}>{props.showPunchline ? "Haha" : "?"}</button>
        </div> : <div></div> }
        {props.showPunchline ? <div className='punchline'>
          <h2>{props.punchline}</h2>
        </div> : <div></div>}
    </div>
  );
}



const mapStateToProps = state => {
  return{
    showPunchline: state.showPunchline,
    showSetup: state.showSetup,
    setup: state.setup, 
    punchline: state.punchline
  }
}


export default connect(mapStateToProps, {showS, showPL })(App)