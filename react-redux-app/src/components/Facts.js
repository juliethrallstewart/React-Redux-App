import React from 'react';
import { connect } from 'react-redux';
import { PushSpinner } from "react-spinners-kit";
import './facts.css'


import { getData } from '../actions';

import  FactGenerator from './FactGenerator';

const Facts = props => {
  return (
    <>
      <h1 className="headline">Welcome to Random Cat Facts app!</h1>
      <button className="cta-button" onClick={props.getData}>
        {props.isLoading ? (
          <PushSpinner type="tailspin" color="#00BFFF" height="15" width="100" />
        ) : (
          'Get Random Cat Fact!'
        )}
      </button>
      {props.webcams &&
        props.webcams.map(cam => <FactGenerator key={cam.name} webcam={cam} />)}
    </>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    webcams: state.webcams
  };
};
export default connect(
  mapStateToProps,
  { getData }
)(Facts);

// TASKS
// - get WebcamList connected to the Redux store
// - Bring in the `test` property from state
// - if done correctly, you should see "It's working" dipslayed in the app
// GOOD LUCK 😃
