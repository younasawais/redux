const initialState = {
  word          : [],
  translation1  : [],
  translation2  : [],
  synonym       : [],
  definition1   : [],
  definition2   : [],
  example1      : [],
  example2      : [],
  category      : [],
  type          : [],
}

const reducerLibraryFiltered = (state = initialState, action) => {
  //let temp = {state : state, action : action};
  //console.log('reducerLibraryFiltered',temp);
  switch (action.type) {
    case 'FILTEREDLIBRARY':
        let libraryFiltered = {...action.payload.filteredLibrary};
        return {...state, ...libraryFiltered};  // eslint-disable-next-line
      break;
    default:
      return state;
  }
}

export default reducerLibraryFiltered;
