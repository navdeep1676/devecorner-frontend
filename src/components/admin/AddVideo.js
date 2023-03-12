import React, { useContext, useState } from "react";
import { Button, Checkbox, Form, Input, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { AppContext } from "../../helpers/app-context";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Editor from "./comman/Editor/Editor";
export const AddVideo = () => {
  const ctx = useContext(AppContext);
  const [text, setText] = useState(null);
  const [summary, setSummary] = useState(false);
  console.log(text);
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    if (text === null) {
      setSummary(true);
      return false;
    } else {
      setSummary(false);
      let formData = new FormData();
      formData.append("title", values.title);
      formData.append("desc", values.desc);
      formData.append("url", values.url);
      formData.append("image", values.upload[0].originFileObj);
      formData.append("summary", text);
      const result = await ctx.HttpPost("video/post", formData);
      if (result.status === true) {
        ctx.setModalData({
          icon: "",
          showModal: true,
          titleText: "Add Video",
          messageText: result.msg,
          secondaryBtnClassName: "btn-primary",
          secondaryBtnText: "Done",
          type: "success",
        });
        form.resetFields(); //reset form
        setText(null);
        setSummary(null);
      } else {
        ctx.setModalData({
          icon: "",
          showModal: true,
          titleText: "Add Video",
          messageText: result.msg,
          secondaryBtnClassName: "btn-primary",
          secondaryBtnText: "Done",
          type: "danger",
        });
      }
    }
  };
  console.log(summary);
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
  const modules = {
    toolbar: {
      container: "#toolbar",
    },
  };
  const formats = [
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "color",
    "background",
    "script",
    "header",
    "blockquote",
    "code-block",
    "indent",
    "list",
    "direction",
    "align",
    "link",
    "image",
    "video",
    "formula",
  ];
  return (
    <div>
      <h5>Add Video</h5>
      <Form
        form={form}
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
          rules={[
            {
              required: true,
              message: "Please input Video Thumbnail",
            },
          ]}
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
          <Input maxLength={100} />
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
          <Input.TextArea showCount maxLength={300} />
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
        <Form.Item name="summary" label="Summary" className="mb-0">
          <Editor name={"summary"} text={text} setText={setText} />
        </Form.Item>
        {summary && (
          <div className="error text-danger">Summary is Required</div>
        )}

        <Form.Item className="mt-4">
          <Button type="primary" htmlType="submit">
            Add Video
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
