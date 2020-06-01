import React, { Fragment } from "react";
import axios from "axios";

export default class pfa_capture extends React.Component {
  state = {
    count: "your face has been captured succesfully",
  };

  componentDidMount() {
    axios.get("/pfa_capture").then(res => {
      const count = res.data;
      this.setState({ count });
    });
  }

  render() {
    return <Fragment>{this.state.count}</Fragment>;
  }
}
