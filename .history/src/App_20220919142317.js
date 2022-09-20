import React from 'react';
import './App.css';
import { connect } from 'react-redux'

function App () {
  
  console.log(props)
  
  return (
    <div className="App">
    <div className="intro">
           <h2>Want To Hear A Joke?</h2>
                <button>YES</button>
        </div>
        {props.showSetup ? <div></div> : <div className='setup'>
            <h2>What are Marios overalls made out of</h2>
            <button>?</button>
        </div>}
        {props.showPunchline ? <div></div> : <div className='punchline'>
          <h2>Dem Dem Dem</h2>
        </div>}
    </div>
  );
}



const mapStateToProps = state => {
  return{
    showPunchline: state.showPunchline,
    showSetup: state.showSetup
  }
}


export default connect(mapStateToProps, {})(App)