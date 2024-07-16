
import React, { Component } from 'react';
class LifecycleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    console.log('Component did mount');
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log('Component did update');
    }
  }
  componentWillUnmount() {
    console.log('Component will unmount');
  }
  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div >
        <h1 className='bg-cyan-200 text-black text-lg  p-2 m-2'>Count: {this.state.count}</h1>
        <button className='bg-fuchsia-400 text-white text-m text-center p-2 m-2 rounded-lg hover:bg-cyan-200 hover:text-slate-800' onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}
export default LifecycleComponent;
