


const JokeList = (props) =>{
    return(
        <div>
            <div className="intro">
               <h2>Want To Hear A Joke?</h2>
                    <button>YES!</button>
            </div>
            <div>
                <h2>{props.setup}</h2>
                <button>?</button>
            </div>
            <div>
              <h2>{props.punchline}</h2>
            </div>
        </div>
    )
}