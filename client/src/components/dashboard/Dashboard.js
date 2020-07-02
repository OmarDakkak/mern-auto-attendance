import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

const Dashboard = ({auth: {
        user
    }}) => {
    return (
        <Fragment>
            <section className="container">
                <h1 className='large text-primary'>Dashboard</h1>
                <p className='lead'>
                    <i className='fas fa-user'/>
                    &nbsp;&nbsp;&nbsp;Welcome {user && user.name}
                </p>
            </section>

        </Fragment>
    );
};

Dashboard.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({auth: state.auth});

export default connect(mapStateToProps)(Dashboard);
