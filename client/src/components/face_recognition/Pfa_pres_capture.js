import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { capture } from "../../actions/auth";

const Pfa_pres_capture = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  //   const email = "";
  //   const password = "";
  //   const formData = { email, password };

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    capture(email, password);
    //props.history.push("/pfa_capture");
    //<Redirect to='/pfa_capture'></Redirect>;
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Capture face</h1>
      <p className='lead'>
        <i /> Fill in the Id and the name
      </p>
      <form className='form' onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Enter the ID'
            name='email'
            value={email}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Enter the name'
            name='password'
            value={password}
            onChange={e => onChange(e)}
            minLength='6'
          />
        </div>
        <input type='submit' className='btn btn-primary' value='Capture face' />
      </form>
    </Fragment>
  );
};

Pfa_pres_capture.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Pfa_pres_capture);
