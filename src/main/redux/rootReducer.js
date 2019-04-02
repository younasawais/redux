import { combineReducers }      from 'redux';
import reducerFullLibrary       from './reducers/fullLibrary';
import reducerSettings          from './reducers/settings';
import reducerLibraryFiltered   from './reducers/libraryFiltered';
import reducerViewObjects       from './reducers/viewObjects';

const rootReducer = combineReducers({
  //posts : posts,
  reducerFullLibrary,
  reducerSettings,
  reducerLibraryFiltered,
  reducerViewObjects,
})

export default rootReducer;
