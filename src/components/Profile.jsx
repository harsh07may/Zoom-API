import { Button } from "antd";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth";
import "antd/dist/antd.css";
import "./Profile.css";
import { Calendar, Collapse } from "antd";
import calendarlogo from "../assets/calendarlogo.svg";
const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const onPanelChange = (value, mode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };
  return (
    <div className="Events">
      {/* Calendar + Events */}

      <div className="upcoming-events">
        {/* Just the Events */}

        <h2>Upcoming Events</h2>
        <p style={{color:"white"}}>Don't miss scheduled events</p>
        <div className="scroll">
          <Collapse expandIconPosition="end" className="collapse-menu">
            <Panel header="This is panel header 1" key="1">
              <p>{text}</p>
            </Panel>
          </Collapse>
          <Collapse expandIconPosition="right" className="collapse-menu">
            <Panel header="This is panel header 1" key="1">
              <p>{text}</p>
            </Panel>
          </Collapse>
          <Collapse expandIconPosition="right" className="collapse-menu">
            <Panel header="This is panel header 1" key="1">
              <p>{text}</p>
            </Panel>
          </Collapse>
          <Collapse expandIconPosition="right" className="collapse-menu">
            <Panel header="This is panel header 1" key="1">
              <p>{text}</p>
            </Panel>
          </Collapse>
          <Collapse expandIconPosition="right" className="collapse-menu">
            <Panel header="This is panel header 1" key="1">
              <p>{text}</p>
            </Panel>
          </Collapse>
          <Collapse expandIconPosition="right" className="collapse-menu">
            <Panel header="This is panel header 1" key="1">
              <p>{text}</p>
            </Panel>
          </Collapse>
        </div>
      </div>
      <div className="upcoming-events-1">
        <div className="calendar-header">
          <img src={calendarlogo} />
          <h3>Calendar</h3>
        </div>
        <hr className="new4"/>
        {/* <Calendar style={{borderRadius:5}} className="calendar-inner" /> */}
        {/* <Calendar fullscreen={false} onPanelChange={onPanelChange}  className="calendar-inner"/> */}
        <div className="site-calendar-demo-card">
          <Calendar
            fullscreen={false}
            onPanelChange={onPanelChange}
            className="calendar-inner"
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
