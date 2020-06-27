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
            <img class="logo" src="https://thumbs.gfycat.com/HeftyDescriptiveChimneyswift-size_restricted.gif" alt="logo"/>
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
            <img class="logo" src="https://thumbs.gfycat.com/UnsteadyUnkemptKangaroo-size_restricted.gif" alt="logo"/>
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
            <img class="logo" src="https://thumbs.gfycat.com/FloweryHandsomeCuckoo-small.gif" alt="logo"/>
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
