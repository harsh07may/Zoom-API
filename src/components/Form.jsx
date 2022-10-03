import React from "react";
import { useEffect } from "react";
import "antd/dist/antd.css";
import "./Form.css";
import { Button, Form, Input, DatePicker, Card } from "antd";
import moment from "moment-timezone";
import axios from "axios";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 12,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const Forms = () => {
  const onFinish = (values) => {
    console.log(values);

    axios
      .post("https://localhost:7010/createmeeting", values)
      .then((res) => {
        console.log(res);
        window.alert("Successfully added");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="create">
      <Card className="form-card">
        <h2>ADD EVENTS</h2>
        <p>Come on add an event</p>
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          autoComplete="off"
          validateMessages={validateMessages}
          className="Form-container"
        >
          <Form.Item
            name={"topic"}
            label="Event Title"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="agenda"
            label="Description"
            rules={[
              {
                message: "Describe your event",
              },
            ]}
          >
            <Input.TextArea showCount maxLength={100} />
          </Form.Item>
          <Form.Item name={"duration"} label="Duration">
            <Input />
          </Form.Item>
          <Form.Item
            name={"date"}
            label="Start"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <DatePicker
              format="MMMM Do YYYY, h:mm"
              className="date-picker"
              showTime={{
                defaultValue: moment("00:00", "HH:mm"),
              }}
              onChange={(date, dateString) => setStart(dateString)}
            />
          </Form.Item>

          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button htmlType="submit" className="submit-button">
              Add Event
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Forms;
