import React, { Component } from 'react';
import GameIntro from './game_intro'
import { connect } from "react-redux";

function TriviaGame(props) {
  return <GameIntro/>
}

const ok = (str) => str

export default TriviaGame
