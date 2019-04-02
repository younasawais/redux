const initialState = {
  appStatus        : 'Default',
  totalWrong       : 0,
  totalRight       : 0,
  startRange       : 0,
  endRange         : 10,
  answers          : 8,
  mode             : 'wordToTranslation',
  random           : 'No',
  category         : '',
  comment          : 'Press Start or go to setup',
  selectedAnswer   : '',
  initialize       : true,
  //filterUpdate     : false,
}

const reducerSettings = (state = initialState, action) => {
  //let temp = {state : state, action : action};
  //console.log('reducerSettings',temp);
  switch (action.type) {
    case 'STARTRANGE':
        console.log("changing startrange");
        return {...state,  startRange : action.payload.startRange};  // eslint-disable-next-line
      break;
    case 'ENDRANGE':
        return {...state, endRange : action.payload.endRange};  // eslint-disable-next-line
      break;
    case 'ANSWERS':
        return {...state, answers : action.payload.answers};  // eslint-disable-next-line
      break;
    case 'RANDOM':
        return {...state, random : action.payload.random};  // eslint-disable-next-line
      break;
    case 'MODE':
        return {...state, mode : action.payload.mode};  // eslint-disable-next-line
      break;
    case 'RESETFILTER':
        return {...state, filterUpdate : action.payload.filterUpdate};  // eslint-disable-next-line
      break;
    // case 'FILTEREDLIBRARY':
    //     return {...state, filterUpdate : false};  // eslint-disable-next-line
    //   break;
    case 'INITIALIZE':
        return {...state, initialize : action.payload.initialize};  // eslint-disable-next-line
      break;
    default:
      return state;
  }
}

export default reducerSettings;
