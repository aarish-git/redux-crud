const initialState = {
  act:0,
  index:'',
  datas:[],
}

 const Reducer = (state=initialState, action) => {
    const newState={...state}

    if (action.type==='SUBMIT') {
      let datas = state.datas;
      let name = this.refs.name.value;
      let address = this.refs.address.value

      // if (this.state.act === 0) {
        let data = {
          name, address
        }
        datas.push(data);
      // } else {
      //   let index = this.state.index;
      //   datas[index].name = name;
      //   datas[index].address = address
      // }
      this.refs.myform.reset();

    } else if(action.type==='EDIT') {
      let data = state.datas;
    this.refs.name.value = data.name;
    this.refs.address.value = data.address;

    // this.setState({
    //   act:1,
    //   index:i
    // })
    }else if(action.type==='REMOVE') {
      let datas = state.datas;
      datas.splice(1);
      this.refs.myform.reset();
    }

    return newState
}

export default Reducer