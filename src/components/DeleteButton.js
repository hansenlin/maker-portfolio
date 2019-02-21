import React from 'react';
import { connect } from 'react-redux';
import { shutCdpAsync } from '../actions';

const mapStateToProps = state => {
  return {
    started: state.started
  }
}

function mapDispatchToProps(dispatch) {
  return ({
    start: () => {
      dispatch(shutCdpAsync());
    }
  })
}

const DeleteButton = ({ started, start }) => {
  return (
    <button onClick={start}>
      {started ? 'Restart' : 'Start'}
    </button>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteButton);
