import React from "react";
import Form from "react-bootstrap/Form";

export const CustomInput = (props) => {
  const {
    astype,
    label,
    name,
    id,
    className,
    placeholder,
    error,
    onChange,
    onBlur,
    value,
    type,
  } = props;
  return (
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        as={astype !== "" ? astype : ""}
        id={id}
        type={type}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        value={value}
      />
      <Form.Text className="text-muted">{error ? error : ""}</Form.Text>
    </Form.Group>
  );
};
