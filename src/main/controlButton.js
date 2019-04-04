import React from 'react';
import { cardStyle }    from './styles/styles';
import { connect,Provider }      from 'react-redux';
import FilterWords      from './calculations/filter';
import store            from './redux/store/store';

class ControlButton extends React.Component {
  constructor(props){
    super(props);
    this.onClickCResetApp     = this.onClickCResetApp.bind(this);
    this.onClickControlButton = this.onClickControlButton.bind(this);
  }

  onClickCResetApp(e){
    e.preventDefault();
    //this.props.dispatch({type : 'RESETAPP', payload : {'initialize' : false}});

  }

  onClickControlButton(e){
    e.preventDefault();
    const temp = e.textContent;
    console.log('target',e.textContent);
    if (e.textContent ==='<button>START</button>') {
      alert('works');
    }else if(e.textContent ==='START'){
      alert('START works');
    }else{
      alert('didnt work :' + e.textContent);

      console.log('target',e.textContent);
    }
  }

  render(){
    //console.log('render controlButton',this.props.reducerLibraryFiltered);
    return(
        <Provider store={store}>
          <div style={cardStyle}>
            <h2>Control Button</h2>
            <button onClick={this.onClickControlButton}>{this.props.reducerViewObjects.controlsButtonValue}</button>
            <button onClick={this.onClickCResetApp}>{this.props.reducerViewObjects.resetButtonValue}</button>
            <FilterWords />
          </div>
        </Provider>
    )
  }
}

export default connect(state => state)(ControlButton);
