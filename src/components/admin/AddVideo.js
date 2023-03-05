import React from "react";
import { Button, Checkbox, Form, Input, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

export const AddVideo = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  return (
    <div>
      <h5>Add Video</h5>
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="upload"
          label="Upload"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          extra="Please Upload JPG or PNG File"
        >
          <Upload name="logo" action="/upload.do" listType="picture">
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>
        <Form.Item
          label="Video Title"
          name="title"
          rules={[
            {
              required: true,
              message: "Please input your video Title",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="desc"
          label="Video Description"
          rules={[
            {
              required: true,
              message: "Please input Video Description",
            },
          ]}
        >
          <Input.TextArea showCount maxLength={100} />
        </Form.Item>

        <Form.Item
          name="website"
          label="Website"
          rules={[
            {
              required: true,
              message: "Please input website!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add Video
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
