import React from 'react';
//import { cardStyle }    from './styles/styles';
import { connect }      from 'react-redux';

class FilterWords extends React.Component{
  constructor(props){
    super(props);
    this.filterWordList = this.filterWordList.bind(this);
    this.filterRange    = this.filterRange.bind(this);
    this.applyRandom    = this.applyRandom.bind(this);
    this.randomOrder    = this.randomOrder.bind(this);
    this.filterWordList();
  }


  render(){
    console.log('render filter',this.props.reducerLibraryFiltered);
    return(
        <div>
          <p>Filtered lib length : <span>{this.props.reducerLibraryFiltered.word.length} : Todo</span></p>
        </div>
      )
  }


  filterWordList(){
    console.log('filterWordList function',this.props.reducerLibraryFiltered);
    const { props } = this;
    let filteredLibrary = {
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
    };

    filteredLibrary = {...this.filterRange(filteredLibrary)};
    filteredLibrary = {...this.applyRandom(filteredLibrary)};
    //this.props.dispatchFilterWordAction(filteredLibrary)
    props.dispatch({type : 'FILTEREDLIBRARY', payload : {'filteredLibrary' : filteredLibrary}});

  }

  filterRange(filteredLibrary){
    const { props } = this;
    let start       = props.reducerSettings.startRange;
    let end         = props.reducerSettings.endRange;
    let filtered    = end - start;
    //let temp        = {'start': start,'end' : end, 'filtered' : filtered}
    let fullLibrary = props.reducerFullLibrary;
      //console.log('before', temp);
    for(let i = start ; i < (filtered + start) ; i++){
      filteredLibrary.word.push(fullLibrary.word[i]);
      filteredLibrary.translation1.push(fullLibrary.translation1[i]);
      filteredLibrary.translation2.push(fullLibrary.translation2[i]);
      filteredLibrary.synonym.push(fullLibrary.synonym[i]);
      filteredLibrary.definition1.push(fullLibrary.definition1[i]);
      filteredLibrary.definition2.push(fullLibrary.definition2[i]);
      filteredLibrary.example1.push(fullLibrary.example1[i]);
      filteredLibrary.example2.push(fullLibrary.example2[i]);
      filteredLibrary.category.push(fullLibrary.category[i]);
      filteredLibrary.type.push(fullLibrary.type[i]);
    }
    return filteredLibrary;
  }

  applyRandom(filteredLibrary){
    const { props } = this;
    if(props.reducerSettings.random === 'Yes'){

        var numbersMixed 		= this.randomOrder(filteredLibrary.word.length);
        let tempList 				= {...filteredLibrary};
        // console.log('after random', numbersMixed);
        for(var i = 0 ; i < filteredLibrary.word.length ; i++){
          tempList.word[i] 					= filteredLibrary.word[numbersMixed[i]];
          tempList.translation1[i] 	= filteredLibrary.translation1[numbersMixed[i]];
          tempList.translation2[i] 	= filteredLibrary.translation2[numbersMixed[i]];
          tempList.synonym[i] 			= filteredLibrary.synonym[numbersMixed[i]];
          tempList.definition1[i] 	= filteredLibrary.definition1[numbersMixed[i]];
          tempList.definition2[i] 	= filteredLibrary.definition2[numbersMixed[i]];
          tempList.example1[i] 			= filteredLibrary.example1[numbersMixed[i]];
          tempList.example2[i] 			= filteredLibrary.example2[numbersMixed[i]];
          tempList.category[i] 			= filteredLibrary.category[numbersMixed[i]];
          tempList.type[i] 					= filteredLibrary.type[numbersMixed[i]];
        }

        for(i = 0 ; i < filteredLibrary.word.length ; i++){
          filteredLibrary.word[i]          = tempList.word[i];
          filteredLibrary.translation1[i]  = tempList.translation1[i];
          filteredLibrary.translation2[i]  = tempList.translation2[i];
          filteredLibrary.synonym[i]       = tempList.synonym[i];
          filteredLibrary.definition1[i]   = tempList.definition1[i];
          filteredLibrary.definition2[i]   = tempList.definition2[i];
          filteredLibrary.example1[i]      = tempList.example1[i];
          filteredLibrary.example2[i]      = tempList.example2[i];
          filteredLibrary.category[i]      = tempList.category[i];
          filteredLibrary.type[i]          = tempList.type[i];
        }
        return filteredLibrary;
    }else{
      return filteredLibrary;
    }
  }

  randomOrder(lengthArray){
    var n = lengthArray + 1; //filteredList.word.length;
    var a = new Array("");
    for(var l = 0; l < n ; l++){
      a[l] = l;
    }


    for(var p = n - 1; p > 0; p--) {
        var j = Math.floor(Math.random() * (p + 1));
        var tmp = a[p];
        a[p] = a[j];
        a[j] = tmp;
    }
    return a;
  }

}

export default connect(state => state)(FilterWords);

  // static getDerivedStateFromProps(props, state){
  //   console.log('getDerivedStateFromProps state',state);
  //   console.log('getDerivedStateFromProps props',props);
  //   //props.filterWordList();
  //   //return true;
  // }
  // componentDidUpdate(prevProps, prevState){
  //   console.log('componentDidUpdate prevProps',prevProps);
  //   console.log('componentDidUpdate prevState',prevState);
  //   this.filterWordList();
  // }
  // componentWillMount(){
  //   console.log('componentWillMount',this.props.reducerLibraryFiltered);
  //   this.filterWordList();
  // }

  // componentWillReceiveProps(nextProps){
  //   console.log('componentWillReceiveProps',this.props.reducerLibraryFiltered);
  //   const startRangePrev = this.props.reducerSettings.startRange;
  //   const startRangeNew  = nextProps.reducerSettings.startRange;
  //   const endRangePrev   = this.props.reducerSettings.endRange;
  //   const endRangeNew    = nextProps.reducerSettings.endRange;
  //   const different = startRangeNew !== startRangePrev ? true : endRangePrev !== endRangeNew ? true : false;
  //   if (different) {
  //     console.log('componentWillReceiveProps true',this.props.reducerLibraryFiltered);
  //     this.filterWordList();
  //   }
  // }
