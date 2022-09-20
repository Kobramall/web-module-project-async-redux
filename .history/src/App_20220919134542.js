import React from 'react';
import './App.css';
import { connect } from 'react-redux'

export const App = (props) => {
  
  console.log("HERE")
  
  return (
    <div className="App">
    <div className="intro">
           <h2>Want To Hear A Joke?</h2>
                <button>YES</button>
        </div>
        {showSetup ? <div></div> : <div className='setup'>
            <h2>What are Marios overalls made out of</h2>
            <button>?</button>
        </div>}
        {showPunchline ? <div></div> : <div className='punchline'>
          <h2>Dem Dem Dem</h2>
        </div>}
    </div>
  );
}

export default App;

const mapStateToProps = state => {
  return{
    showPunchline: state.showPunchline,
    showSetup: state.showSetup, 
  }
}


export connect(mapStateToProps, {showPunchline, showSetup})(App)