import React from "react";
import PropTypes from "prop-types";
import { Modal } from "antd";
import { Content, Text } from "Components";
import { useNavigate } from "react-router-dom";
import styles, { Footer, Divider } from "./styles";
import { getSizeByParam } from "./rules";
import { ButtonSave, ButtonCancel } from "./Buttons";

const ModalComponent = ({
  visible,
  titleHeader,
  children,
  onCancel,
  showDividerHeader,
  showCancel,
  showSave,
  showFooter,
  showHeader,
  styleModal,
  styleFooter,
  styleHeader,
  styleContent,
  styleButtonSave,
  styleButtonCancel,
  typeButtonSave,
  typeButtonCancel,
  titleButtonSave,
  titleButtonCancel,
  closable,
  modalProps,
  ...otherProps
}) => {
  const navigate = useNavigate();
  const handleCancel = () => {
    if (onCancel) {
      return onCancel();
    }

    return navigate(-1);
  };

  return (
    <Modal
      visible={visible}
      centered
      footer={
        showFooter && [
          <Footer key={1} style={styleFooter}>
            {showSave && (
              <ButtonSave
                key={1}
                styleButtonSave={styleButtonSave}
                typeButtonSave={typeButtonSave}
                titleButtonSave={titleButtonSave}
                {...otherProps}
              />
            )}
            {showCancel && (
              <ButtonCancel
                key={2}
                onCancel={handleCancel}
                styleButtonCancel={styleButtonCancel}
                typeButtonCancel={typeButtonCancel}
                titleButtonCancel={titleButtonCancel}
                {...otherProps}
              />
            )}
          </Footer>,
        ]
      }
      title={
        showHeader && (
          <div style={styleHeader}>
            <Text.Bold size={20}>{titleHeader}</Text.Bold>
            {showDividerHeader && <Divider />}
          </div>
        )
      }
      onCancel={handleCancel}
      width={getSizeByParam(otherProps).width}
      style={styleModal}
      closable={closable}
      maskTransitionName=""
      {...modalProps}
    >
      <Content style={{ ...styles.content, ...styleContent }}>
        {children}
      </Content>
    </Modal>
  );
};

ModalComponent.propTypes = {
  visible: PropTypes.bool,
  children: PropTypes.node,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  typeButtonSave: PropTypes.string,
  typeButtonCancel: PropTypes.string,
  titleHeader: PropTypes.string,
  titleButtonSave: PropTypes.string,
  titleButtonCancel: PropTypes.string,
  showDividerHeader: PropTypes.bool,
  showFooter: PropTypes.bool,
  showCancel: PropTypes.bool,
  showSave: PropTypes.bool,
  showHeader: PropTypes.bool,
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
  closable: PropTypes.bool,
  history: PropTypes.objectOf(PropTypes.func),
  styleModal: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
  styleContent: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
  styleHeader: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
  styleFooter: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
  styleButtonSave: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
  styleButtonCancel: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
};

ModalComponent.defaultProps = {
  visible: true,
  size: "small",
  typeButtonSave: "add",
  typeButtonCancel: "link",
  titleButtonSave: "Salvar",
  titleButtonCancel: "Cancelar",
  showFooter: true,
  showCancel: true,
  showSave: true,
  showHeader: true,
  closable: true,
  styleModal: {},
  styleContent: {},
  styleHeader: {},
  styleFooter: {},
  styleButtonSave: {},
  styleButtonCancel: {},
  onCancel: null,
};

export default ModalComponent;
