import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import GameIntro from './game_intro';
import GamePlay from './game_play';
import Results from './results';
import { clearErrorMessage } from '../js/actions/index';

import '../scss/trivia_game.scss';

const mapDispatchToProps = dispatch => ({
  clearErrorMessage: () => dispatch(clearErrorMessage()),
})

const mapStateToProps = state => ({ errorMessage: state.errorMessage});


class TriviaGame extends Component {

  render() {
    return (
      <div>
        { renderErrorMessage(this.props) }
        <div className="trivia-game__screen-wrapper">
          <Switch>
            <Route exact path="/play" component={GamePlay} />
            <Route exact path="/intro" component={GameIntro} />
            <Route exact path="/results" component={Results} />
            <Route component={GameIntro} />
          </Switch>
        </div>
      </div>
    );
  }
}

const  renderErrorMessage = (props)=>  {
  if (!props.errorMessage) {
     return
  }

   return (
     <div>
       <p style={{ backgroundColor: '#e99', padding: 10 }}>
         <b>{props.errorMessage}</b>
         {' '}
         <button onClick={props.clearErrorMessage}>
           Dismiss
         </button>
       </p>
     </div>
     )
   }

TriviaGame.propTypes = {
  clearErrorMessage: PropTypes.func.isRequired
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps )(TriviaGame));
