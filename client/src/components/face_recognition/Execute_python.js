import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import Card from '../../../src/shared/UIElements/Card';
import './Execute_python.css';
const Execute_python = () => {
  return (
    <Fragment>
    <ul className="item_list">

      <li className="item">
        <Card className="item__content">
          <div className="item_img">
            <img class="logo" src="https://image.freepik.com/free-vector/attendance-concept-businessman-holding-checklist-vector-flat-design_149152-172.jpg" alt="logo"/>
          </div>
          <div className="item_info">
            <h2>Recognize / Attendance</h2>  
            <p>description</p>                          
          </div>
          <div className="item_actions">
            <Link to='/face_recognition' className='btn btn-danger'>
            Recognize/Attendance
            </Link>
          </div>
        </Card>
      </li>

      <li className="item">
        <Card className="item__content">
          <div className="item_img">
            <img class="logo" src="https://miro.medium.com/max/1600/1*DKSQVZdEa2GEv2ksxWViTg.gif" alt="logo"/>
          </div>
          <div className="item_info">
            <h2>Capture Faces</h2>  
            <p>Capture Faces</p>                          
          </div>
          <div className="item_actions">
            <Link to='/Pfa_pres_capture' className='btn btn-danger'>
            Capture Faces
            </Link>
          </div>
        </Card>
      </li>

      <li className="item">
        <Card className="item__content">
          <div className="item_img">
            <img class="logo" src="https://www.unite.ai/wp-content/uploads/2019/12/Typical_cnn-1.png" alt="logo"/>
          </div>
          <div className="item_info">
            <h2>Train Images</h2>  
            <p>Train Images</p>                          
          </div>
          <div className="item_actions">
            <Link to='/pfa_train' className='btn btn-danger'>
            Train Images
            </Link>
          </div>
        </Card>
      </li>
      <li className="item">
        <Card className="item__content">
          <div className="item_img">
            <img class="logo" src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/6538357/original/Email-Icon/send-you-an-auto-email-script-and-list-of-500k-fresh-emails.jpg" alt="logo"/>
          </div>
          <div className="item_info">
            <h2>Auto Mail</h2>  
            <p>Auto Mail</p>                          
          </div>
          <div className="item_actions">
            <Link to='/pfa_auto_Mail' className='btn btn-danger'>
            Auto Mail
            </Link>
          </div>
        </Card>
      </li>

    </ul>
    </Fragment>
  );
};

export default Execute_python;