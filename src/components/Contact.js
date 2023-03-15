import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CustomInput } from "./comman/CustomInput";
import { AiFillLinkedin } from "react-icons/ai";
import * as yup from "yup";
import { useFormik } from "formik";
import { AppContext } from "../helpers/app-context";
import { Seo } from "./comman/Seo";

let contactSchema = yup.object({
  name: yup.string().required("Your Name is Required."),
  mobile: yup.string().required("Mobile No is Required."),
  email: yup
    .string()
    .email("Email Address should be Valid.")
    .required("Email Address is Required."),
  subject: yup.string().required("Subject is Required."),
  message: yup.string().required("Message is Required."),
});

export const Contact = () => {
  const ctx = useContext(AppContext);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      subject: "",
      message: "",
    },
    validationSchema: contactSchema,
    onSubmit: async (values) => {
      const res = await ctx.HttpPost("contact/post", values);
      if (res.status === true) {
        ctx.setModalData({
          icon: "",
          showModal: true,
          titleText: "Contact",
          messageText: res.msg,
          secondaryBtnClassName: "btn-primary",
          secondaryBtnText: "Done",
          type: "success",
        });
      } else {
        ctx.setModalData({
          icon: "",
          showModal: true,
          titleText: "Error",
          messageText: res.msg,
          secondaryBtnClassName: "btn-primary",
          secondaryBtnText: "Done",
          type: "error",
        });
      }
      formik.resetForm();
    },
  });
  return (
    <>
      <Seo
        title="Contact Us : Developer's Corner"
        kw="developers corner ,developers corner, coding , programming, tutprials"
      />
      <section className="contact-wrapper-1 py-5 pt-0">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h1 className="heading mb-4 text-center">
                <span style={{ color: "#000" }}>Contact </span>{" "}
                <span style={{ color: "rgb(245, 141, 28)" }}>Us</span>
              </h1>
            </div>
          </div>
          <div className="row pt-4">
            <div className="col-12 col-lg-6">
              <div className="address card h-100 p-3">
                <div className="social-media-icons d-flex gap-4 justify-content-center mt-5 align-items-center">
                  <a
                    href="https://www.instagram.com/heartblack1676/"
                    target={"_blank"}
                  >
                    <img src="/images/instagram.png" alt="instagram" />
                  </a>
                  <a href="https://discord.gg/Qea48uw9" target={"_blank"}>
                    <img src="/images/discord.png" width={40} alt="discord" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/navdeep-dahiya-719016186/"
                    target={"_blank"}
                  >
                    <AiFillLinkedin
                      className="fs-1"
                      style={{ color: "#0077b5" }}
                    />
                  </a>
                  <a href="https://t.me/developerscornernd" target={"_blank"}>
                    <img
                      src="/images/telegram.png"
                      width={40}
                      alt="instagram"
                    />
                  </a>
                  <a
                    href="https://chat.whatsapp.com/IHfO4PcsjQTEnWg6KHRd7f"
                    target={"_blank"}
                  >
                    <img src="/images/wapp.png" width={40} alt="instagram" />
                  </a>
                </div>
                <h1 className="heading mb-4 mt-5 text-center">
                  <span style={{ color: "#000" }}>Add</span>
                  <span style={{ color: "rgb(245, 141, 28)" }}>ress:</span>
                </h1>

                <p className="mt-3 heading text-center">
                  HNo: 277, VPO: Mandaura, Sonipat, Haryana
                </p>
                <h1 className="heading mb-4 mt-5 text-center">
                  <span style={{ color: "#000" }}>Mail </span>
                  <span style={{ color: "rgb(245, 141, 28)" }}>At:</span>
                </h1>
                <p className="heading mb-4  text-center">
                  <a
                    className="text-decoration-none"
                    href="mailto:ndyt1676@gmail.com"
                  >
                    <span style={{ color: "#000" }}>ndyt1676</span>
                    <span style={{ color: "rgb(245, 141, 28)" }}>
                      @gmail.com
                    </span>
                  </a>
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="contact-wrapper card p-3">
                <Form onSubmit={formik.handleSubmit}>
                  <CustomInput
                    type="text"
                    label="Your Name"
                    id="name"
                    name="name"
                    placeholder="Enter Name"
                    onChange={formik.handleChange("name")}
                    onBlur={formik.handleBlur("name")}
                    value={formik.values.name}
                    error={formik.touched.name && formik.errors.name}
                  />
                  <CustomInput
                    label="Email Address"
                    type="email"
                    id="email"
                    placeholder="Enter Email Address"
                    name="email"
                    onChange={formik.handleChange("email")}
                    onBlur={formik.handleBlur("email")}
                    value={formik.values.email}
                    error={formik.touched.email && formik.errors.email}
                  />
                  <CustomInput
                    type="tel"
                    label="Mobile Number"
                    id="mobile"
                    placeholder="Mobile"
                    name="mobile"
                    onChange={formik.handleChange("mobile")}
                    onBlur={formik.handleBlur("mobile")}
                    value={formik.values.mobile}
                    error={formik.touched.mobile && formik.errors.mobile}
                  />
                  <CustomInput
                    type="text"
                    label="Subject"
                    id="subject"
                    placeholder="Subject"
                    name="subject"
                    onChange={formik.handleChange("subject")}
                    onBlur={formik.handleBlur("subject")}
                    value={formik.values.subject}
                    error={formik.touched.subject && formik.errors.subject}
                  />
                  <CustomInput
                    label="Message"
                    astype="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: "100px" }}
                    name="message"
                    onChange={formik.handleChange("message")}
                    onBlur={formik.handleBlur("message")}
                    value={formik.values.message}
                    error={formik.touched.message && formik.errors.message}
                  />

                  <Button className="button py-2 px-5" type="submit">
                    Send
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
