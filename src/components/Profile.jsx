import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth";
import axios from "axios";
import "antd/dist/antd.css";
import "./Profile.css";
import { Calendar, Collapse } from "antd";
import calendarlogo from "../assets/calendarlogo.svg";
import moment from "moment";
const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [meetings, setMeetings] = useState([]);
  useEffect(() => {
    axios
      .get("https://localhost:7010/getmeetings")
      .then((res) => {
        setMeetings(res.data.meetings);
      })
      .catch((error) => console.log(error));
  }, []);
  const onDelete = (e) => {
    const id = e.target.value;
    console.log(id);
    axios
      .delete("https://localhost:7010/deletemeet?id=" + id)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };
  const onPanelChange = (value, mode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };
  return (
    <div className="Events">
      {/* Calendar + Events */}

      <div className="upcoming-events">
        {/* Just the Events */}

        <h2>Upcoming Events</h2>
        <p style={{ color: "white" }}>Don't miss scheduled events</p>
        <div className="scroll">
          {meetings &&
            meetings.map((meeting) => (
              <Collapse
                key={meeting.id}
                expandIconPosition="end"
                className="collapse-menu"
              >
                <Panel header={meeting.topic} key="1">
                  <p>
                    Date:{moment(meeting.start_time).format("MMMM Do YYYY")}
                  </p>
                  <p>Time:{moment(meeting.start_time).format(" h:mm:ss a")}</p>
                  <p>ID:{meeting.id}</p>
                  <button onClick={onDelete} value={meeting.id}>
                    Delete
                  </button>
                  Join URL:<a href={meeting.join_url}>{meeting.join_url}</a>
                </Panel>
              </Collapse>
            ))}
        </div>
      </div>
      <div className="upcoming-events-1">
        <div className="calendar-header">
          <img src={calendarlogo} />
          <h3>Calendar</h3>
        </div>
        <hr className="new4" />
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
