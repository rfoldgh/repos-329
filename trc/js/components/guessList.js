
import React from 'react';
import {connect} from 'react-redux';
import {getFewestGuesses} from '../actions/index';


export class GuessList extends React.Component { 
    constructor(props) {
        super(props);   
		
    }
    

    render() {
            let guessList = [];
        if(this.props.guesses){
            for(var i=0;i<this.props.guesses.length;i++){
                guessList.push(<li>{this.props.guesses[i]}</li>);
            }//end for
        }//end if
             return (
                <ul className="guessesList">
                    {guessList}
                </ul>   
                );
        }

 }
    
const mapStateToProps = (state, props) => ({
    guesses: state.guesses
});
        
export default connect(mapStateToProps)(GuessList);