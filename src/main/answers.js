import React            from 'react';
import { connect }      from 'react-redux';
import { cardStyle }    from './styles/styles';

class Answers extends React.Component {
  constructor(props){
    super(props);
    this.totalButtons    = this.totalButtons.bind(this);
    this.state = ({
      // allButtons : [],
      // value : ""
    })
  }

  totalButtons(){
    var buttons = [];
    for (var i = 0; i < this.props.reducerSettings.answers; i++) {
      buttons.push(<button key={i}> Button {i+1}</button>);
    }
    return buttons;
  }

  render(){
    const buttons = this.totalButtons();

    return(
    <div style={cardStyle}>
      <h2>Answers</h2>
      {buttons}
    </div>
    )
  }
}


export default connect(state => state)(Answers);
