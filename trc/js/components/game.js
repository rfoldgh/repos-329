import {guessNumber} from '../actions/index';
import {newGame} from '../actions/index';
import {getFewestGuesses} from '../actions/index';
import React from 'react';
import {connect} from 'react-redux';
import GuessForm from './guessForm';
import GuessList from './guessList';


export class Game extends React.Component { 
    constructor(props) {
        super(props);   
        this.props.dispatch(getFewestGuesses());
        this.newGame = this.newGame.bind(this);
		
    }
    

    newGame(event){
        event.preventDefault();
        this.props.dispatch(newGame());
    }
	
	// getFewestGuesses(){
	 // event.preventDefault();
	 
	// }
	
	saveFewestGuesses(){
		this.props.dispatch();
	}
    
  
    render() {
        console.log(this.props.feedback);
        let form;
        if (this.props.win == false){
         
        return (
            <div className="game">
					 < GuessForm win={this.props.win} guesses={this.props.guesses} />
					<h2>{this.props.feedback}</h2>
					<div className="fewest-guesses">{this.props.fewestGuesses}</div>
					<GuessList />
					<div className="fewest-guesses">
						{this.props.getFewestGuesses}
					</div>
            </div>
			
        );
        }
        else {
            
            return ( //bind new method to the class
             <button type='submit' id="new-game-button" onClick={this.newGame}>New Game</button>
            );
                }
            }
        }
        
const mapStateToProps = (state, props) => ({
    feedback: state.feedback,
    guesses: state.guesses,
    win: state.win
});

export default connect(mapStateToProps)(Game);
