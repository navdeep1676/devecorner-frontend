import React, { useContext } from "react";
import { Button, Checkbox, Form, Input, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { AppContext } from "../../helpers/app-context";
export const AddVideo = () => {
  const ctx = useContext(AppContext);
  const onFinish = async (values) => {
    console.log("Success:", values.upload[0]);
    let formData = new FormData();
    formData.append("title", values.title);
    formData.append("desc", values.desc);
    formData.append("url", values.url);
    formData.append("image", values.upload[0].originFileObj);
    const result = await ctx.HttpPost("video/post", formData);
    console.log(result);
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
          <Upload name="logo" listType="picture">
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
          name="url"
          label="Video Url"
          rules={[
            {
              required: true,
              message: "Please input Video Url!",
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
