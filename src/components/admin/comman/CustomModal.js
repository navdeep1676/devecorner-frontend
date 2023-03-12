import { Modal } from "antd";

import { CustomButton } from "./CustomButton";

export const CustomModal = (props) => {
  const {
    title,
    isModalOpen,
    primaryBtnText,
    secondaryBtnText,
    secondaryBtnClassName,
    handlePrimaryBtn,
    handleSecondaryBtn,
    modalBody,
    setIsModalOpen,
  } = props;
  return (
    <Modal
      title={title}
      centered
      open={isModalOpen}
      footer={null}
      closable={false}
    >
      <img
        src="/images/icon/close.svg"
        alt="close"
        onClick={() => handleSecondaryBtn()}
        className="cursor-pointer position-absolute"
        style={{
          right: "20px",
          top: "15px",
          width: "12px",
        }}
      />
      {modalBody ? modalBody : ""}
      <div className="mx-auto mt-4">
        <CustomButton
          className={"button d-inline-block py-2 px-4"}
          title={secondaryBtnText ? secondaryBtnText : "Cancel"}
          onClick={handleSecondaryBtn}
        />
        {primaryBtnText ? (
          <CustomButton
            title={primaryBtnText}
            onClick={handlePrimaryBtn}
            className="button d-inline-block py-2 px-4 ms-4"
          />
        ) : (
          ""
        )}
      </div>
    </Modal>
  );
};
