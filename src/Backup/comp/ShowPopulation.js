import React from "react";
import { connect } from "react-redux";
import {showlist } from '../actions/user';

class ShowPopulation extends React.Component {

  constructor() {
        super();
this.showlist=this.showlist.bind(this);

    }


showlist(){
this.props.showlist();

}

  render() {
    return (
      <div>
        <h1> Show Population chart</h1>
        <button onClick={this.props.showlist}>
        Click here to show Chart
        </button>
      </div>
    );
  }
}

export default connect(mapStateToProps, {showlist})(ShowPopulation);
