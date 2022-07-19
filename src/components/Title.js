import React, { useState, useReducer } from 'react';

import titleReducer, { initialState } from '../reducers/titleReducer';
import { toggleEditing, updateTitle } from './../actions/titleActions';

import TitleDisplay from './TitleDisplay';
import TitleForm from './TitleForm';

import { connect } from 'react-redux';
//connect() - connect your component to the store.

const Title = (props) => {
  //  const [state, dispatch] = useReducer(titleReducer, initialState);
  // console.log("Props from redux: ", props)

  const handleToggleEditing = () => {
    // dispatch(toggleEditing());
    props.toggleEditing()
  }

  const handleTitleUpdate = (title) => {
    dispatch(updateTitle(title));
  }

  return (
    <div>
      <h1>{props.appName}</h1>
      {
        !props.editing ?
          <TitleDisplay title={props.title} handleToggleEditing={handleToggleEditing} /> :
          <TitleForm handleTitleUpdate={handleTitleUpdate} />
      }
    </div>
  );
};

//MapStateToProps:
//Will be called every time the store state changes. Recieves the entire store state, and should 
//return an object of data this component needs. 
const mapStateToProps = (stateFromStore) => {
  // console.log(stateFromStore);
  return {
    titleInProps: stateFromStore.title,
    appName: stateFromStore.appName,
    editing: stateFromStore.editing,
  }

}

export default connect(mapStateToProps, { updateTitle, toggleEditing })(Title);
//export default connect(mapStateToProps, null)(Title);