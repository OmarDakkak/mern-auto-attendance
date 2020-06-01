import React, { Fragment } from "react";
import axios from "axios";

export default class pfa_train extends React.Component {
  state = {
    count: " images are training...",
  };

  componentDidMount() {
    axios.get("/pfa_train").then(res => {
      const count = res.data;
      this.setState({ count });
    });
  }

  render() {
    return (
      <Fragment>
        <h1 className='large text-primary'>Training images</h1>
        <p className='lead'>
          <i /> {this.state.count}
        </p>
      </Fragment>
    );
  }
}
