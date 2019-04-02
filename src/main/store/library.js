import { createStore} from 'redux';

const initialState = {
  word : ['firstword', 'secondword', 'thirdword'],
  test : 'testvalue'
}

const reducer = (state = initialState, action) => {
  //console.log(Action library reducer, action);
  switch (action.type) {
    case 'actionTest1':
      return {...state, temp: action.payload.test}//eslint-disable-next-line
      break;
    default:
      return state
  }
}

const libraryStore = createStore(reducer);
export default libraryStore;
