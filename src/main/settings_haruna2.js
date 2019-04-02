import React            from 'react';
import { cardStyle }    from './styles/styles';
import { connect }      from 'react-redux';

class Settings extends React.Component {
  constructor(props){
    super(props);
    this.startRangeChanged = this.startRangeChanged.bind(this);
    this.endRangeChanged   = this.endRangeChanged.bind(this);
    this.answers           = this.answers.bind(this);
    this.random            = this.random.bind(this);
    this.mode              = this.mode.bind(this);
  }

  startRangeChanged(e){
    e.preventDefault();
    let val = parseInt(e.target.value,10);
      if(val <= this.props.reducerFullLibrary.word.length && val > -1 && val < this.props.reducerSettings.endRange){
        this.props.dispatchStartRange(val);
      }
  }


  endRangeChanged(e){
    e.preventDefault();
    let val = parseInt(e.target.value,10);
    // let temp = [val, this.props.reducerSettings.startRange];
    // console.log('val',temp);
      if(val <= this.props.reducerFullLibrary.word.length && val > this.props.reducerSettings.startRange){
        this.props.dispatch({
          type : 'ENDRANGE',
          payload : {'endRange' : val}});
      }
  }

  answers(e){
    let val = e.target.value;
    if(val <= 8 && val > 1){
      this.props.dispatch({
        type : 'ANSWERS',
        payload : {'answers' : val}});
    }
  }

  random(e){
    e.preventDefault();
    let val = e.target.value;
    this.props.dispatch({
      type : 'RANDOM',
      payload : {'random' : val}});
  }

  mode(e){
    let val = e.target.value;
    this.props.dispatch({
      type : 'MODE',
      payload : {'mode' : val}});
  }

  render(){
    return(
    <div style={cardStyle}>
      <h2>Settings</h2>
      <p>Start Range</p>
      <input type="number" onChange={this.startRangeChanged} value={this.props.reducerSettings.startRange}/>
      <p>End Range</p>
      <input type="number" onChange={this.endRangeChanged} value={this.props.reducerSettings.endRange}/>
      <p>Possible answers</p>
      <input type="number" onChange={this.answers} value={this.props.reducerSettings.answers}/>
      <p>Mode</p>
      <select onChange={this.mode} value={this.props.reducerSettings.mode}>
        <option value='wordToDefinition'>Word to Definition</option>
        <option value='wordToTranslation'>Word to Translation</option>
        <option value='definitionToWord'>Definition to Word</option>
        <option value='translationToWord'>Translation to Word</option>
      </select>
      <p>Random</p>
      <select onChange={this.random} value={this.props.reducerSettings.random}>
        <option value="No">No</option>
        <option value="Yes">Yes</option>
      </select>
      {/* <p>Category</p>
      <select onChange={this.category} value={this.props.settings.category}>
        <option value="politics">Politics</option>
        <option value="travel">Travel</option>
        <option value="technology">Technology</option>
      </select> */}
    </div>
    )
  }
}
const mapStateToProps = (state) => ({
  reducerSettings: state.reducerSettings
})

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchStartRange: (value) => {
      //console.log('dispatchSettingsStartValue', value)
      dispatch({type : 'STARTRANGE', payload : {startRange : value}});
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangeComponent)
