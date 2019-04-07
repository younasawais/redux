import React    from 'react';

export class Child1 extends React.Component {
  constructor(props){
    super(props);
    this.state = ({
     temp             : '',
    })
    this.handleChange = this.handleChange.bind(this);
    //this.handleAction = this.handleAction.bind(this);
  }

  handleChange(event){
    event.preventDefault();
    console.log({target: event.target})
    console.log({test: "test123"})
    // let temp = event.
  }

  render(){
    return(
    <div>
      <p>Child1</p>
      <input onChange={this.handleChange} type="text"/>
      <p>{this.state.temp}</p>
    </div>
    )
  }
}
