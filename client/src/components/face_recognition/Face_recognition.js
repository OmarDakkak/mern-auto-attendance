import React, {Fragment} from "react";
import axios from "axios";

export default class Face_recognition extends React.Component {
    state = {
        count: "Recognizing/Attendance...."
    };

    componentDidMount() {
        axios
            .get("/pfa_RecognizeAttendance")
            .then(res => {
                const count = res.data;
                this.setState({count});
            });
    }

    render() {
        return (
            <Fragment>
                <section className="container">
                    {" "}
                    <h1 className='large text-primary'>Recognizing & Attendance</h1>
                    <p className='lead'>
                        <i/> {this.state.count === "Recognizing/Attendance...."
                            ? "Recognizing/Attendance...."
                            : this
                                .state
                                .count
                                .substring(61, 82)}
                    </p>
                </section>

            </Fragment>
        );
    }
}
