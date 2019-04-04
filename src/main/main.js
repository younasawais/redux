import React            from 'react';
import { Provider }     from 'react-redux';
import                       './styles/style.css';
import GivenInfo        from './givenInfo';
import Comments         from './comments';
import Answers          from './answers';
import ControlButton    from './controlButton';
//import Calculations     from './Calculations';
import Settings         from './settings';
import Debug            from './debug';
//import {fullLibrary}    from './data/library';
import store            from './redux/store/store';
//console.log('store value main', store.getState());
export class Main extends React.Component {
  render(){
    //console.log('render Main',store);
    return(
      <Provider store={store}>
        <div className = 'main'>
          <GivenInfo />
          <Comments />
          <Answers />
          <Settings />
          {/* <ControlButton />*/}
          <Debug /> 
        </div>
      </Provider>
    )
  }
}


/* States
 *** default ***
-> after load page
-> after all filters applied (not necessary)

  *** selectAnswer ***
-> defaultState & startBtn
-> afterLastWord & btnRestart
-> afterAnswerNext & selectAnswer

*** afterNext ***
-> selectAnswer & btnSelectedAnswer

*/
