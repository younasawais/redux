const initialState = {
  divAnswersView        : 'visible',
  divSettingsView       : 'visible',
  divDebugView          : 'visible',
  divControlButtonView  : 'visible',
  divCommentsView       : 'visible',
  divGivenInfoView      : 'visible',

  correctView           : 'visible',
  inCorrectView         : 'visible',
  commentLine1View      : 'visible',
  commentLine2View      : 'visible',
  commentLine3View      : 'visible',
  commentLine1Value     : 'Press Start or go to setup',
  commentLine2Value     : 'visible',
  commentLine3Value     : 'visible',
  controlsButtonValue   : 'START',
  controlsButtonView    : 'visible',
  resetButtonValue      : 'RESET',
  resetButtonView       : 'visible',
}

const reducerViewObjects = (state = initialState, action) => {
  //console.log('startrange',state.settings.startRange);
  //let payloadTemp;
  switch (action.type) {
    case 'TODOVIEW':
        // let libraryFiltered = action.payload.filteredLibrary;
        // return {...state, libraryFiltered};  // eslint-disable-next-line
      break;
    default:
      return state;
  }
}

export default reducerViewObjects;
