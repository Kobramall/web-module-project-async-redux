import React from 'react';
import './App.css';
import { connect } from 'react-redux'

const App= (props) => {
  
  
  return (
    <div className="App">
    <div className="intro">
           <h2>Want To Hear A Joke?</h2>
                <button onClick={dispatch(showS)}>YES</button>
        </div>
        {props.showSetup ? <div className='setup'>
            <h2>What are Marios overalls made out of</h2>
            <button>?</button>
        </div> : <div></div> }
        {props.showPunchline ? <div className='punchline'>
          <h2>Dem Dem Dem</h2>
        </div> : <div></div>}
    </div>
  );
}



const mapStateToProps = state => {
  return{
    showPunchline: state.showPunchline,
    showSetup: state.showSetup
  }
}


export default connect(mapStateToProps, {showS})(App)