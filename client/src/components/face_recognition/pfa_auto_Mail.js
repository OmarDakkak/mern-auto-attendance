import React, { Fragment } from "react";
import axios from "axios";

export default class pfa_auto_Mail extends React.Component {
  state = {
    count: "sending email...",
  };

  componentDidMount() {
    console.log("inside auto mail");
    axios.get("/pfa_auto_Mail").then(res => {
      const count = res.data;
      console.log(res.data);
      this.setState({ count });
    });
  }

  render() {
    return (
      <Fragment>
        {" "}
        <h1 className='large text-primary'>Sending Email</h1>
        <p className='lead'>
          <i /> {this.state.count==="sending email..."?"sending email...":"Email Sent Successfully!"}
        </p>
      </Fragment>
    );
  }
}
