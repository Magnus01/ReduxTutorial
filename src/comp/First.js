import React from "react";
import { connect } from "react-redux";
import {showlist } from '../actions/user';

class First extends React.Component {

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


function mapStateToProps(state) {

    return {
        user: state.user
    }
}


export default connect(mapStateToProps, {showlist})(First);
